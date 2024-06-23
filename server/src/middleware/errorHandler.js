
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ status: err.status || 500, error: err.message || err.stack || 'Something went wrong!'});
};
  
module.exports = errorHandler;
  