function initializetmpLinkedinShare() {
    CopyflxTwitter0a1a8b1469c1848 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "CopyflxTwitter0a1a8b1469c1848",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox02f26ae2e162843"
    }, {}, {});
    CopyflxTwitter0a1a8b1469c1848.setDefaultUnit(kony.flex.DP);
    var flxAdd = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxAdd",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "88%",
        "right": 2,
        "skin": "slFbox",
        "width": "10%"
    }, {}, {});
    flxAdd.setDefaultUnit(kony.flex.DP);
    var CopyImage0801ef95d381048 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage0801ef95d381048",
        "isVisible": true,
        "left": "0%",
        "right": "0%",
        "skin": "slImage",
        "src": "new_tweet.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxAdd.add(CopyImage0801ef95d381048);
    var CopylblCalender0fd397d23481a4c = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopylblCalender0fd397d23481a4c",
        "isVisible": true,
        "skin": "CopyslLabel05bbf26d52d1240",
        "text": "Share",
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
    var flxBack = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "65%",
        "id": "flxBack",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "20%",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    flxBack.setDefaultUnit(kony.flex.DP);
    var CopyImage09ac7aaefa1a04e = new kony.ui.Image2({
        "centerY": "50%",
        "height": "100%",
        "id": "CopyImage09ac7aaefa1a04e",
        "isVisible": true,
        "left": "0%",
        "onTouchEnd": AS_Image_63c3f8255d8f474fb5814b8cf0e0df4b,
        "skin": "slImage",
        "src": "back.png",
        "width": "100%",
        "zIndex": 10
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBack.add(CopyImage09ac7aaefa1a04e);
    var btnLogout = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknBtnLogout",
        "id": "btnLogout",
        "isVisible": true,
        "onClick": AS_Button_f0cc22fe005c421da2c9b3af020a8b95,
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
    CopyflxTwitter0a1a8b1469c1848.add(flxAdd, CopylblCalender0fd397d23481a4c, flxBack, btnLogout);
}