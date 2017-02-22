function initializetmpLoinkedinSharefooter() {
    flxcMsg0ea0da2c7a7f147 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "flxcMsg0ea0da2c7a7f147",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox01a5b92b017f646"
    }, {}, {});
    flxcMsg0ea0da2c7a7f147.setDefaultUnit(kony.flex.DP);
    var flxcLoc015452b4102d244 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxcLoc015452b4102d244",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "slFbox01a5b92b017f646",
        "top": "40%",
        "width": "5%",
        "zIndex": 1
    }, {}, {});
    flxcLoc015452b4102d244.setDefaultUnit(kony.flex.DP);
    var Image089ba4006894545 = new kony.ui.Image2({
        "id": "Image089ba4006894545",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage0a5c527064f5043",
        "src": "location.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxcLoc015452b4102d244.add(Image089ba4006894545);
    var flxcCam0380482b2a61f40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxcCam0380482b2a61f40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox01a5b92b017f646",
        "top": "40%",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    flxcCam0380482b2a61f40.setDefaultUnit(kony.flex.DP);
    var imgCam0e6975fe9511a4b = new kony.ui.Image2({
        "id": "imgCam0e6975fe9511a4b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage0a5c527064f5043",
        "src": "camera.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxcCam0380482b2a61f40.add(imgCam0e6975fe9511a4b);
    var txtBxMsg072dee191946c46 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "80%",
        "id": "txtBxMsg072dee191946c46",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox046d487a98db345",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "1dp",
        "width": "55%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnShare0108a8a1ad3c84b = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed0df805f6cee8245",
        "id": "btnShare0108a8a1ad3c84b",
        "isVisible": true,
        "left": "0%",
        "skin": "CopysknBtnLinkedinShare031005e0ecc5a43",
        "text": "Share",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [3, 2, 3, 2],
        "paddingInPixel": false
    }, {});
    flxcMsg0ea0da2c7a7f147.add(flxcLoc015452b4102d244, flxcCam0380482b2a61f40, txtBxMsg072dee191946c46, btnShare0108a8a1ad3c84b);
}