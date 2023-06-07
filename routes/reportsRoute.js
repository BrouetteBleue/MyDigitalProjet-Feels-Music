module.exports = (server) => {
    
    const reportController = require("../controllers/reportController");
    const jwtMiddleware = require("../middlewares/jwtmiddleware");
    
    server.route("/account/:account_id/reports")
    .get(jwtMiddleware.verifyToken, reportController.listAllReports)
    .post(reportController.createAReport);

    server.route("/reports/:report_id") // req.params.report_id
    .get(reportController.getAReport)
    .put(reportController.updateAReport)
    .delete(reportController.deleteAReport)
}