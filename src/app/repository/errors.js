class CustomError extends Error {
  constructor(name, data = {}, ...params) {
    super(...params);
    this.name = name;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
  }
}

class DataFetchError extends CustomError {
  constructor(data = {}, ...params) {
    super('DataFetchError', data, ...params);
  }
}

export { DataFetchError, CustomError };
