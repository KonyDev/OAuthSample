function boxLogin() {
    //frmLoad.show();
    providerSelected = "Box";
    login(MBaaSConfig.boxProvider, displayBoxProfile);
}

function displayBoxProfile(profile) {
    kony.print("profile stringify: " + JSON.stringify(profile));
    var raw_res = profile.user_attributes.raw_response;
    var full_name = JSON.parse(raw_res).name;
    var Profile_Pic = profile.user_attributes.avatar_url;
    var email = profile.user_attributes.login;
    kony.application.dismissLoadingScreen();
    displayProfile(undefined, undefined, full_name, email, Profile_Pic);
    frmProfile.headers[0].lblTitle.text = "Box Profile";
    //	frmProfile.footers[0].btnInvokeService.text="Access Files & Folders";
}