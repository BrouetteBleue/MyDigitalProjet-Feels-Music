
function apiResponse(res, status, message, data) {
    const response = {
        status: status,
        message: message,
        data: data
    };
    res.status(status).json(response);
}

module.exports = {
    apiResponse: apiResponse
};