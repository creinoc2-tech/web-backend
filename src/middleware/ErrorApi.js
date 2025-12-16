const AppError = require("../utils/appError");

const ErrorApi = (req, res, next) => {
    try {
        next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
    } catch (error) {
        next(error);
    }
};

module.exports = ErrorApi;