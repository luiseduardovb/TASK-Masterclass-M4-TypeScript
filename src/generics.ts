abstract class StorageItem {
  /**
   * Creates an abstract storage manager
   *
   * @param {string} name - unique name given to stored item
   * @param {number} [exp] - the number of milliseconds to wait
   *                       before marking data as stale
   */
  constructor(private name: string, private exp?: number) {}

  remove(): void {}

  // value = 1 -> { exp: 10390930, value: 1 }
  // value = { foo: "bar" } -> { exp: 10930193, value: { foo: "bar" } }
  set(value: any): void {}

  get(): any {}
}

class LocalStorageItem extends StorageItem {}

class SessionStorageItem extends StorageItem {}
