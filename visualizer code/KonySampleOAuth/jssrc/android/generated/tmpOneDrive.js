function initializetmpOneDrive() {
    flxOneDrive = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxOneDrive",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox02f26ae2e162843"
    }, {}, {});
    flxOneDrive.setDefaultUnit(kony.flex.DP);
    var btnBack = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknBtnBack",
        "id": "btnBack",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_abc3448a8eed4201bebd24347e78ad02,
        "skin": "sknBtnBack",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblDrive = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblDrive",
        "isVisible": true,
        "skin": "sknLblTitle",
        "text": "Files & Folders",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnLogout = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknBtnLogout",
        "id": "btnLogout",
        "isVisible": true,
        "onClick": AS_Button_cebdbf3796564498baa2428fa4689e34,
        "right": "5%",
        "skin": "sknBtnLogout",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxOneDrive.add(btnBack, lblDrive, btnLogout);
}