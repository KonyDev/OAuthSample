function initializetmpCalender() {
    flxCalender = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxCalender",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox02f26ae2e162843"
    }, {}, {});
    flxCalender.setDefaultUnit(kony.flex.DP);
    var lblCalender = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblCalender",
        "isVisible": true,
        "skin": "CopyslLabel05bbf26d52d1240",
        "text": "Calendar",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnBack = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknBtnBack",
        "id": "btnBack",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_ba44240f08ff4570b1fd79549a618cd0,
        "skin": "sknBtnBack",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnLogout = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknBtnLogout",
        "id": "btnLogout",
        "isVisible": true,
        "onClick": AS_Button_a0466a118ce3457ba9080b4c2397f8d1,
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
    flxCalender.add(lblCalender, btnBack, btnLogout);
}