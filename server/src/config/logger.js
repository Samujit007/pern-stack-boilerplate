const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, colorize } = format;


const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

// Create a Winston logger instance
const logger = createLogger({
  level: 'info', 
  format: combine(
    label({ label: 'express-backend' }),
    timestamp(),
    colorize(), 
    myFormat
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      ),
      level: 'info'
    }),
    // Log errors to a separate file
    new transports.File({ filename: './logs/error.log', level: 'error' }),
    // Log all levels to a combined file
    new transports.File({ filename: './logs/combined.log' })
  ],
});
//Example
//logger.info(`getting post: ${post.content}`);
//logger.error(`getSinglePost failed: ${error.message}`);
module.exports = logger;
