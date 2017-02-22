//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "OAuthDemo",
    appName: "OAuthDemo",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.83.1",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "OAuthDemo",
    isMFApp: false,
    eventTypes: [],
    url: "http://KH1495.kitspl.com:8080/OAuthDemo/MWServlet",
    secureurl: "http://KH1495.kitspl.com:8080/OAuthDemo/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializetmpCalendar();
    initializetmpDrive();
    initializetmpSegLinkedin();
    initializetmpCalender();
    initializetmpLinkedinShare();
    initializetmpOneDrive();
    initializetmpProfile();
    initializetmpInvokeService();
    initializetmpLoinkedinSharefooter();
    initializeTemp019aa0a9ca12b43();
    frmBoxGlobals();
    frmCalenderGlobals();
    frmHomeGlobals();
    frmKonyOAuthGlobals();
    frmLinkedinShareGlobals();
    frmLoadGlobals();
    frmOneDriveGlobals();
    frmProfileGlobals();
    frmSplashGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6900
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: AS_AppEvents_f4559899b21645c780a279636382b6f2,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;