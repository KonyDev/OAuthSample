function addWidgetsfrmLoad() {
    frmLoad.setDefaultUnit(kony.flex.DP);
    var lblLoad = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "40%",
        "id": "lblLoad",
        "isVisible": true,
        "skin": "CopyslLabel0e8e2de675b0a40",
        "text": "Loading.....",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    frmLoad.add(lblLoad);
};

function frmLoadGlobals() {
    frmLoad = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLoad,
        "enabledForIdleTimeout": false,
        "id": "frmLoad",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0e97bc218e06a4e"
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
    frmLoad.info = {
        "kuid": "0111d41464664794817394d7ef0f2af8"
    };
};