function initializetmpProfile() {
    flxPro = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxPro",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0ebfb65d19b184f"
    }, {}, {});
    flxPro.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblTitle",
        "isVisible": true,
        "skin": "CopyslLabel05bbf26d52d1240",
        "text": "Profile",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 5,
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
        "height": "40dp",
        "id": "btnLogout",
        "isVisible": true,
        "onClick": AS_Button_9d5cb2e068394469b8127e6c49a00527,
        "right": "5%",
        "skin": "sknBtnLogout",
        "width": "40dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPro.add(lblTitle, btnLogout);
}