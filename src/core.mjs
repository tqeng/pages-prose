export const statuses = ['Want to Read', 'Currently Reading', 'Completed'];
export const demoUsers = [{ id: 'alice', name: 'Alice', bio: 'Reading together, one chapter at a time.' }, { id: 'bob', name: 'Bob', bio: 'Here for the discussion.' }];

export class ReadingService {
  constructor(store, catalogue, now = () => new Date().toISOString()) {
    this.store = store; this.catalogue = structuredClone(catalogue); this.now = now;
    this.data = store.load() ?? { shelves: [], reviews: [], threads: [], profiles: structuredClone(demoUsers), sequence: 0 };
    this.user = null;
  }
  // Demo identity selection is deliberately not password authentication.
  signIn(id) { if (!demoUsers.some(u => u.id === id)) throw Error('Unknown demo user'); this.user = id; }
  signOut() { this.user = null; }
  requireUser() { if (!this.user) throw Error('Choose a demo reader first'); return this.user; }
  book(id) { const b = this.catalogue.find(b => b.id === id); if (!b) throw Error('Book not found'); return structuredClone(b); }
  search(query = '') { const q = query.trim().toLowerCase(); return structuredClone(this.catalogue.filter(b => `${b.title} ${b.author}`.toLowerCase().includes(q))); }
  change(action) { const next = structuredClone(this.data); const value = action(next); this.store.save(next); this.data = next; return structuredClone(value); }
  profile(id) { const p = this.data.profiles.find(u => u.id === id); if (!p) throw Error('Reader not found'); return structuredClone({ ...p, reviews: this.data.reviews.filter(r => r.user === id) }); }
  editProfile(name, bio) { const id = this.requireUser(); if (!name.trim()) throw Error('Display name is required'); return this.change(d => Object.assign(d.profiles.find(p => p.id === id), { name: name.trim(), bio: bio.trim() })); }
  shelves(owner = this.requireUser()) { if (owner !== this.requireUser()) throw Error('Private reading list'); return structuredClone(this.data.shelves.filter(s => s.user === owner)); }
  setShelf(bookId, status) {
    const user = this.requireUser(); this.book(bookId); if (!statuses.includes(status)) throw Error('Invalid reading status');
    return this.change(d => {
      let s = d.shelves.find(s => s.user === user && s.book === bookId);
      if (!s) { s = { user, book: bookId, page: 0 }; d.shelves.push(s); }
      const previous = s.status; s.status = status;
      s.completedAt = status === 'Completed' ? (previous === 'Completed' ? s.completedAt : this.now()) : null;
      return s;
    });
  }
  removeShelf(bookId) { const user = this.requireUser(); return this.change(d => { d.shelves = d.shelves.filter(s => !(s.user === user && s.book === bookId)); }); }
  setProgress(bookId, page) {
    const user = this.requireUser(), b = this.book(bookId);
    if (!Number.isInteger(b.pages) || b.pages <= 0) throw Error('Page total unavailable; tracking disabled');
    if (!Number.isInteger(page) || page < 0 || page > b.pages) throw Error(`Enter a whole page from 0 to ${b.pages}`);
    if (!this.data.shelves.some(s => s.user === user && s.book === bookId)) throw Error('Add the book to a shelf first');
    return this.change(d => { const s = d.shelves.find(s => s.user === user && s.book === bookId); s.page = page; return { ...s, percent: page / b.pages * 100, promptComplete: page === b.pages && s.status !== 'Completed' }; });
  }
  reviews(bookId) { this.book(bookId); return structuredClone(this.data.reviews.filter(r => r.book === bookId)); }
  saveReview(bookId, rating, text) {
    const user = this.requireUser(); this.book(bookId);
    if (!Number.isFinite(rating) || rating < 0.25 || rating > 5 || !Number.isInteger(rating * 4)) throw Error('Rating must be 0.25 to 5 in quarter-star steps');
    return this.change(d => { let r = d.reviews.find(r => r.user === user && r.book === bookId); if (!r) { r = { id: `r${++d.sequence}`, user, book: bookId }; d.reviews.push(r); } Object.assign(r, { rating, text: text.trim() }); return r; });
  }
  deleteReview(id) { const user = this.requireUser(); const r = this.data.reviews.find(r => r.id === id); if (!r || r.user !== user) throw Error('Only the owner may delete a review'); return this.change(d => { d.reviews = d.reviews.filter(r => r.id !== id); }); }
  editReview(id, rating, text) { const user = this.requireUser(), r = this.data.reviews.find(r => r.id === id); if (!r || r.user !== user) throw Error('Only the owner may edit a review'); return this.saveReview(r.book, rating, text); }
  post(bookId, text, spoiler = false, parent = null) {
    const user = this.requireUser(); this.book(bookId); if (!text.trim()) throw Error('Discussion text is required');
    if (parent && !this.data.threads.some(t => t.id === parent && t.book === bookId && !t.parent)) throw Error('Thread not found for this book');
    return this.change(d => { const t = { id: `t${++d.sequence}`, user, book: bookId, text: text.trim(), spoiler: Boolean(spoiler), parent, createdAt: this.now() }; d.threads.push(t); return t; });
  }
  discussions(bookId, revealed = []) { this.book(bookId); return structuredClone(this.data.threads.filter(t => t.book === bookId).map(t => ({ ...t, text: t.spoiler && !revealed.includes(t.id) ? null : t.text, hidden: t.spoiler && !revealed.includes(t.id) }))); }
}
