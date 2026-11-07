// Adapters share the load/save contract. The service commits only after save succeeds.
export class MemoryStore {
  constructor() { this.data = null; }
  load() { return structuredClone(this.data); }
  save(data) { this.data = structuredClone(data); }
}

export class BrowserStore {
  constructor(storage, key = 'pages-prose-v1') { this.storage = storage; this.key = key; }
  load() { const raw = this.storage.getItem(this.key); return raw ? JSON.parse(raw) : null; }
  save(data) { this.storage.setItem(this.key, JSON.stringify(data)); }
}
