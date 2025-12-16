const mongoSanitize = require('mongo-sanitize');
const sanitizeMiddleware = (req, res, next) => {
    try {
        mongoSanitize(req.body);
        mongoSanitize(req.params);

        const queryCopy = { ...req.query };
        mongoSanitize(queryCopy);

        req.querySanitized = queryCopy;

        next();
    } catch (error) {
        next(error);
    }
}

module.exports = sanitizeMiddleware;