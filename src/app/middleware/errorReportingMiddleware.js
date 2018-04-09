import { getNewLogger } from '../logger';

const logger = getNewLogger('errorReportingMiddleware');

const errorReportingMiddleware = () => next => action => {
  try {
    next(action);
  } catch (err) {
    logger.error('Exception', err);
    throw err;
  }
};

export default errorReportingMiddleware;
