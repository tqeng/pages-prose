import { ReadingService, statuses } from './core.mjs';
import { BrowserStore } from './storage.mjs';
import { books } from './catalogue.mjs';
const service = new ReadingService(new BrowserStore(localStorage), books);
const view = document.querySelector('#view'), message = document.querySelector('#message');
const esc = text => String(text ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
let screen = 'catalogue', selected = null, query = '', revealed = [];
function run(action, success = 'Saved successfully.') { try { const result = action(); render(); message.textContent = success; return result; } catch (error) { message.textContent = error.message; } }
const name = id => esc(service.profile(id).name);
function render() {
  if (screen === 'catalogue') {
    const matches = service.search(query);
    view.innerHTML = `<h1>Book search</h1><p class="intro">Search the sample catalogue and open a book.</p><form id="search" class="search"><label>Search by title or author<input id="query" value="${esc(query)}" placeholder="Try Jane Austen"></label><button>Search</button></form><p class="muted">${matches.length} books in this result · local sample catalogue</p><div class="grid">${matches.map(b => `<article class="card"><div class="cover">[Book cover]</div><h2>${esc(b.title)}</h2><p class="muted">${esc(b.author)}</p><button data-book="${b.id}">View book</button></article>`).join('') || '<p>No results. Try another title or author.</p>'}</div>`;
    document.querySelector('#search').onsubmit = e => { e.preventDefault(); query = document.querySelector('#query').value; render(); document.querySelector('#search button').focus(); };
  } else if (screen === 'shelves') {
    if (!service.user) { view.innerHTML = '<h1>My shelves</h1><p>Choose a demo reader to see their private reading list.</p>'; return; }
    const shelves = service.shelves();
    view.innerHTML = `<h1>My shelves</h1><p class="intro">${name(service.user)}'s private reading list</p>${shelves.map(s => { const b = service.book(s.book); return `<article class="panel"><h2>${esc(b.title)}</h2><p>${esc(s.status)} · Page ${s.page}${b.pages ? ` of ${b.pages} (${Math.round(s.page/b.pages*100)}%)` : ' · tracking unavailable'}</p>${s.completedAt ? `<p class="muted">Completed ${esc(s.completedAt.slice(0,10))}</p>` : ''}<button data-book="${b.id}">Manage book</button></article>`; }).join('') || '<p>No books yet. Discover a book and add it to your shelves.</p>'}`;
  } else if (screen === 'profile') {
    if (!service.user) { view.innerHTML = '<h1>Your profile</h1><p>Choose a demo reader to edit their profile.</p>'; return; }
    const p = service.profile(service.user);
    view.innerHTML = `<h1>Your profile</h1><form id="profile" class="panel"><label>Display name<input id="displayName" value="${esc(p.name)}" required></label><label>About you<textarea id="bio">${esc(p.bio)}</textarea></label><button>Save profile</button></form><h2>Your community reviews</h2>${p.reviews.map(r => `<div class="panel"><button data-book="${r.book}">${esc(service.book(r.book).title)}</button><p>${r.rating} stars · ${esc(r.text)}</p></div>`).join('') || '<p>No reviews yet.</p>'}`;
    document.querySelector('#profile').onsubmit = e => { e.preventDefault(); run(() => service.editProfile(document.querySelector('#displayName').value, document.querySelector('#bio').value)); };
  } else renderBook();
  document.querySelectorAll('[data-book]').forEach(b => b.onclick = () => { selected = b.dataset.book; screen = 'book'; revealed = []; message.textContent = ''; render(); });
}
function renderBook() {
  const b = service.book(selected), shelf = service.user ? service.shelves().find(s => s.book === b.id) : null;
  const ownReview = service.reviews(b.id).find(r => r.user === service.user);
  const posts = service.discussions(b.id, revealed);
  view.innerHTML = `<button id="back" class="secondary">Back to discovery</button><h1>${esc(b.title)}</h1><p class="intro">${esc(b.author)} · ${b.pages ?? 'Unknown'} pages · ${esc(b.genre)}</p><div class="split"><section><div class="panel"><h2>Reading status and progress</h2>${service.user ? `<form id="shelf" class="actions"><label>Reading status<select id="status">${statuses.map(s => `<option ${shelf?.status===s?'selected':''}>${s}</option>`).join('')}</select></label><button>${shelf ? 'Update shelf' : 'Add to shelf'}</button></form>${shelf ? `<form id="progress" class="actions"><label>Current page<input id="page" type="number" min="0" max="${b.pages ?? 0}" step="1" value="${shelf.page}" ${!b.pages?'disabled':''}></label><button ${!b.pages?'disabled':''}>Save progress</button></form><p>${b.pages ? `${Math.round(shelf.page/b.pages*100)}% complete` : 'Page total unavailable; percentage tracking disabled.'}</p>${b.pages && shelf.page===b.pages && shelf.status!=='Completed' ? '<p class="notice">You reached the last page. Choose Completed above to record completion.</p>' : ''}<button id="remove" class="secondary">Remove from shelves</button>` : ''}` : '<p>Choose a demo reader to save reading progress.</p>'}</div><div class="panel"><h2>Community reviews</h2>${service.reviews(b.id).map(r => `<article class="post"><strong>${name(r.user)} · ${r.rating} stars</strong><p>${esc(r.text)}</p>${r.user===service.user?`<button data-delete="${r.id}" class="secondary">Delete my review</button>`:''}</article>`).join('') || '<p>No community reviews yet.</p>'}${service.user ? `<form id="review"><h3>${ownReview?'Edit your review':'Write a review'}</h3><label>Rating from 0.25 to 5<input id="rating" type="number" min="0.25" max="5" step="0.25" required value="${ownReview?.rating ?? 4}"></label><label>Review text<textarea id="reviewText">${esc(ownReview?.text ?? '')}</textarea></label><button>Save review</button></form>` : ''}</div></section><section class="panel"><h2>Book discussion</h2><p class="muted">Spoilers stay hidden until you reveal them.</p>${posts.map(t => `<article class="post ${t.parent?'reply':''}"><strong>${name(t.user)}</strong><p class="muted">${esc(t.createdAt)}${t.parent?' · Reply':''}</p>${t.hidden?`<p class="notice">Spoiler hidden</p><button data-reveal="${t.id}" class="secondary">Reveal spoiler</button>`:`<p>${esc(t.text)}</p>`}</article>`).join('') || '<p>Start the first conversation.</p>'}${service.user ? `<form id="post"><label>Reply to<select id="parent"><option value="">New thread</option>${posts.filter(t=>!t.parent).map(t=>`<option value="${t.id}">Thread by ${name(t.user)} (${t.id})</option>`).join('')}</select></label><label>Discussion text<textarea id="postText" required></textarea></label><label class="check"><input id="spoiler" type="checkbox"> Contains spoilers</label><button>Post discussion</button></form>` : '<p>Choose a demo reader to contribute.</p>'}</section></div>`;
  document.querySelector('#back').onclick = () => { screen='catalogue'; render(); };
  if (service.user) {
    document.querySelector('#shelf').onsubmit = e => { e.preventDefault(); run(() => service.setShelf(b.id, document.querySelector('#status').value)); };
    if (shelf) {
      document.querySelector('#progress').onsubmit = e => { e.preventDefault(); run(() => service.setProgress(b.id, document.querySelector('#page').value.trim() === '' ? NaN : Number(document.querySelector('#page').value))); };
      document.querySelector('#remove').onclick = () => run(() => service.removeShelf(b.id), 'Removed from shelves.');
    }
    document.querySelector('#review').onsubmit = e => { e.preventDefault(); run(() => service.saveReview(b.id, Number(document.querySelector('#rating').value), document.querySelector('#reviewText').value)); };
    document.querySelector('#post').onsubmit = e => { e.preventDefault(); run(() => service.post(b.id, document.querySelector('#postText').value, document.querySelector('#spoiler').checked, document.querySelector('#parent').value || null)); };
  }
  document.querySelectorAll('[data-delete]').forEach(el => el.onclick = () => run(() => service.deleteReview(el.dataset.delete), 'Review deleted.'));
  document.querySelectorAll('[data-reveal]').forEach(el => el.onclick = () => { revealed.push(el.dataset.reveal); render(); });
}
document.querySelector('#reader').onchange = e => { if(e.target.value) service.signIn(e.target.value); else service.signOut(); revealed=[]; message.textContent=''; render(); };
document.querySelectorAll('[data-nav]').forEach(el => el.onclick = () => { screen=el.dataset.nav; message.textContent=''; render(); });
render();
