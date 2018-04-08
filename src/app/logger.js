import {getLogger, setEnabled, setShowStackTraces, BrowserConsoleAppender, PatternLayout, Level} from 'log4javascript';

setEnabled(true);
setShowStackTraces(true);

export {getLogger, BrowserConsoleAppender, PatternLayout, Level};
