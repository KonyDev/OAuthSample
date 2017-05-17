function addWidgetsfrmSplash() {
    frmSplash.setDefaultUnit(kony.flex.DP);
    frmSplash.add();
};

function frmSplashGlobals() {
    frmSplash = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSplash,
        "enabledForIdleTimeout": false,
        "id": "frmSplash",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_b2e757150f554f54b5a082bb9f40126c,
        "skin": "CopyslForm07a8d885cc0ca4d"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmSplash.info = {
        "kuid": "cfe6395ffd49488696eced3ef2d3657e"
    };
};