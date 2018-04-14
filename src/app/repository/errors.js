class DataFetchError extends Error {
  constructor(data = {}, ...params) {
    super(...params);
    this.name = 'DataFetchError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DataFetchError);
    }

    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
  }
}

export { DataFetchError }
