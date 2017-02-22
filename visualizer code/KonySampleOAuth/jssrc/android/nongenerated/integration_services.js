var service_name = "";
var operation_name = "";
var params = {};
var headers = {};
var integrationClient = null;

function integration_service(service_name, operation_name, params, headers, callback) {
    try {
        integrationClient = client.getIntegrationService(service_name);
    } catch (exception) {
        alert("Service name:" + exception.message);
    }
    integrationClient.invokeOperation(operation_name, headers, params, function(result) {
        callback(result);
    }, function(error) {
        frmLinkedinShare.flxcLinkediNShare.btnShare.setVisibility(true);
        kony.application.dismissLoadingScreen();
        if (service_name === "LinkedInPostURL" && error.httpStatusCode === 400) alert("Duplicate post not allowed");
        else alert("Integration Service Failure :" + service_name + "  " + JSON.stringify(error));
    });
}