var providerSelected = "";

function profile(provider_name, callback) {
    var user_store_client = client.getIdentityService(provider_name);
    user_store_client.getProfile(false, function(profile) {
        callback(profile);
    }, function(error) {
        kony.application.dismissLoadingScreen();
        alert("Error occured while fetching the profile.");
    });
}
/**
 *Common login for all ID provider.
 */
function login(provider_name, displayProfileFn) {
    function successCallBack(response) {
        kony.application.showLoadingScreen("sknLoading", "fetching details..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        // profile(provider_name,display_profile);
        // var user_store_client = client.getIdentityService(provider_name);
        auth_client.getProfile(false, function(result) {
            displayProfileFn(result);
        }, function(error) {
            // kony.application.dismissLoadingScreen();
            alert("Error occured while fetching the profile details");
        });
    }

    function failureCallBack(error) {
        kony.application.dismissLoadingScreen();
        alert("Identity service login failed :" + error.message);
    }
    if (res.code == 1) {
        try {
            //kony.application.showLoadingScreen("sknLoading","Please Wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
            auth_client = client.getIdentityService(provider_name);
            auth_client.login({}, successCallBack, failureCallBack);
        } catch (exception) {
            alert("Exception" + exception.message);
        }
    } else {
        alert("issues with init");
    }
}