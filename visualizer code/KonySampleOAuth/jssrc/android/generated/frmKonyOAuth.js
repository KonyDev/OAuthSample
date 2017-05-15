function addWidgetsfrmKonyOAuth() {
    frmKonyOAuth.setDefaultUnit(kony.flex.DP);
    var flxRoot = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxRoot",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "width": "100%"
    }, {}, {});
    flxRoot.setDefaultUnit(kony.flex.DP);
    var flxcTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxcTitle",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxcTitle.setDefaultUnit(kony.flex.DP);
    var ImgLogo = new kony.ui.Image2({
        "centerX": "50%",
        "id": "ImgLogo",
        "isVisible": true,
        "skin": "slImage",
        "src": "logo.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblWelcome = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblWelcome",
        "isVisible": true,
        "skin": "CopyslLabel081acb17c31dd41",
        "text": "Welcome to",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label06ee91d2f156d47 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label06ee91d2f156d47",
        "isVisible": true,
        "skin": "CopyslLabel019bafab8049444",
        "text": "Kony Cloud OAuth",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "3dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxcTitle.add(ImgLogo, lblWelcome, Label06ee91d2f156d47);
    var flxCredentials = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "60%",
        "clipBounds": true,
        "height": "220dp",
        "id": "flxCredentials",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "47dp",
        "skin": "slFbox",
        "top": "399dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxCredentials.setDefaultUnit(kony.flex.DP);
    var txtBoxUserId = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "txtBoxUserId",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "44dp",
        "placeholder": "email id",
        "secureTextEntry": false,
        "skin": "CopyslTextBox03ba9986155fb4c",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "16dp",
        "width": "260dp"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox0865a37577dc846",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtBoxPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "txtBoxPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "38dp",
        "placeholder": "password",
        "secureTextEntry": true,
        "skin": "CopyslTextBox0cb29d0554e4b40",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "66dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox0865a37577dc846",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnKonyOAuth = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnTrans",
        "height": "50dp",
        "id": "btnKonyOAuth",
        "isVisible": true,
        "left": "41dp",
        "onClick": AS_Button_bfb040a8ac0749c8a8df87e25091df7a,
        "skin": "sknBtnTrans",
        "text": "Sign In",
        "top": "121dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxCredentials.add(txtBoxUserId, txtBoxPassword, btnKonyOAuth);
    flxRoot.add(flxcTitle, flxCredentials);
    frmKonyOAuth.add(flxRoot);
};

function frmKonyOAuthGlobals() {
    frmKonyOAuth = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmKonyOAuth,
        "enabledForIdleTimeout": false,
        "id": "frmKonyOAuth",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_0a56827a04644498b5fcec464ea72d46,
        "skin": "CopyslForm060492da1c29d4d"
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
    frmKonyOAuth.info = {
        "kuid": "b724dd6f39a34626978197fff612c72e"
    };
};