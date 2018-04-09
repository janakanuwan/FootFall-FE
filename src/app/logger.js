import {
  getLogger,
  setEnabled,
  setShowStackTraces,
  BrowserConsoleAppender,
  PatternLayout,
  Level,
} from 'log4javascript';

const DEFAULT_PATTERN_LAYOUT = new PatternLayout('[%c] %d{yyyy-MM-dd HH:mm:ss,SSS} %-5p - %m%n');

setEnabled(true);
setShowStackTraces(true);

const getNewLogger = (name, level = Level.WARN, threshold = Level.WARN, additivity = true) => {
  const logger = getLogger(name);
  logger.setAdditivity(additivity);
  logger.setLevel(level);

  const appender = new BrowserConsoleAppender();
  appender.setLayout(DEFAULT_PATTERN_LAYOUT);
  appender.setThreshold(threshold);

  logger.addAppender(appender);

  return logger;
};

export { getNewLogger, Level };
