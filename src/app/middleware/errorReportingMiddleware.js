import { BrowserConsoleAppender, getLogger, Level, PatternLayout } from '../logger';

const logger = getLogger('errorReportingMiddleware');
logger.setAdditivity(true);
logger.setLevel(Level.WARN);

const appender = new BrowserConsoleAppender();
appender.setLayout(new PatternLayout("[%c] %d{yyyy-MM-dd HH:mm:ss,SSS} %-5p - %m%n"));
appender.setThreshold(Level.WARN);

logger.addAppender(appender);

const errorReportingMiddleware = () => next => action => {
  try {
    next(action);
  } catch (err) {
    logger.error('Exception ', err);
    throw err;
  }
};

export default errorReportingMiddleware;
