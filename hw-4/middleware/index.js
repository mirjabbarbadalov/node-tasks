const logger = function (req, res, next) {
  const method = req.method;
  const url = req.originalUrl;
  const queryParams = JSON.stringify(req.query);
  const body = JSON.stringify(req.body);

  const logMessage = `${method} ${url} query:${queryParams} body:${body}`;

  console.log(logMessage);

  next();
};

export default logger;
