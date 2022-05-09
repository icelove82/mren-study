const errorHandler = (err, req, res, next) => {
  // if status not set then 500
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    statck: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
