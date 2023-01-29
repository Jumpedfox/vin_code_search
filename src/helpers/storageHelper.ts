class Storage {
  setItem = (key: string, value: unknown): void => {
    if (value !== undefined && value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  getItem = <T>(key: string): null | T => {
    const stringValue = localStorage.getItem(key);

    if (stringValue) {
      return JSON.parse(stringValue);
    }
    return null;
  };

  deleteItem = (key: string): boolean => {
    const isExist = !!this.getItem(key);
    if (!isExist) return false;
    localStorage.removeItem(key);
    return true;
  };
}

const storage = new Storage();

export default storage;
