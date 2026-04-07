/**
 * Hero Media Storage — uses IndexedDB to persist uploaded photos/videos
 * across page reloads. Files are stored as Blobs and converted to object
 * URLs on demand.
 *
 * Slide URLs that begin with `idb://` reference a blob in this store.
 */

const DB_NAME = 'stark-hero-db';
const STORE_NAME = 'media';
const DB_VERSION = 1;

const IDB_PREFIX = 'idb://';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => resolve(req.result);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
}

/** Save a file blob and return its `idb://` reference. */
export async function saveMedia(file: File | Blob): Promise<string> {
  const key = `m-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(file, key);
    tx.oncomplete = () => resolve(IDB_PREFIX + key);
    tx.onerror = () => reject(tx.error);
  });
}

/** Look up a blob by its `idb://` reference. */
export async function getMedia(ref: string): Promise<Blob | null> {
  if (!ref.startsWith(IDB_PREFIX)) return null;
  const key = ref.slice(IDB_PREFIX.length);
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).get(key);
    req.onsuccess = () => resolve((req.result as Blob) || null);
    req.onerror = () => reject(req.error);
  });
}

/** Delete a blob from storage. Safe to call on non-idb refs. */
export async function deleteMedia(ref: string): Promise<void> {
  if (!ref.startsWith(IDB_PREFIX)) return;
  const key = ref.slice(IDB_PREFIX.length);
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Resolve an `idb://` ref to a usable object URL.
 * If the ref isn't an idb:// reference, returns it unchanged.
 * Returns null if the blob isn't found.
 */
export async function resolveMediaUrl(ref: string | undefined): Promise<string | undefined> {
  if (!ref) return undefined;
  if (!ref.startsWith(IDB_PREFIX)) return ref;
  const blob = await getMedia(ref);
  if (!blob) return undefined;
  return URL.createObjectURL(blob);
}

export function isIdbRef(ref: string | undefined): boolean {
  return !!ref && ref.startsWith(IDB_PREFIX);
}
