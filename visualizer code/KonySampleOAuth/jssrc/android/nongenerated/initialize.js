//Type your code here
var client = null;
var auth_client = null;
//var res={"code":0,"message":""};
//var flag=0;
var isMbaasInitialized = false

function initializeClient() {
    if (isMbaasInitialized) {} else {
        kony.application.showLoadingScreen("sknLoading", "Please Wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        client = new kony.sdk();
        client.init(MBaaSConfig.appKey, MBaaSConfig.appSecret, MBaaSConfig.serviceURL, function(response) {
            //res.code=1;
            //res.message=JSON.stringify(response);
            frmHome.flxLogos.setVisibility(true);
            isMbaasInitialized = true;
            kony.application.dismissLoadingScreen();
        }, function(error) {
            kony.application.dismissLoadingScreen();
            //res.code=0;
            //res.message=JSON.stringify(error);
            alert("Initialization failed: " + JSON.stringify(error));
        });
    }
}