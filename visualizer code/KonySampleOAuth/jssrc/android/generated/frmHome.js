function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flxcMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxcMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxcMain.setDefaultUnit(kony.flex.DP);
    var flxcTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxcTitle",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "6%",
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
        "text": "OAuth Sample App",
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
    var flxLogos = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "53%",
        "id": "flxLogos",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLogos.setDefaultUnit(kony.flex.DP);
    var flx1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "25%",
        "clipBounds": true,
        "height": "38%",
        "id": "flx1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0c3df64b6c9f840",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    flx1.setDefaultUnit(kony.flex.DP);
    var flxGoogle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "26%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxGoogle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0a21169cb4f424e",
        "top": "0.10%",
        "width": "28%"
    }, {}, {});
    flxGoogle.setDefaultUnit(kony.flex.DP);
    var btnG = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "39%",
        "focusSkin": "CopysknFbBtn022ebaeb4a4884e",
        "height": "75dp",
        "id": "btnG",
        "isVisible": true,
        "onClick": AS_Button_9e384b85addc4fa3806d676fa2f7bac6,
        "skin": "CopysknFbBtn07789a14f780641",
        "width": "75dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0f0c5a9ce0bad46 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0f0c5a9ce0bad46",
        "isVisible": true,
        "skin": "CopyslLabel095dd06176f1448",
        "text": "Google",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxGoogle.add(btnG, Label0f0c5a9ce0bad46);
    var flxMicrosoft = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "74%",
        "clipBounds": true,
        "focusSkin": "CopyslFbox098c4c5007c2345",
        "height": "100%",
        "id": "flxMicrosoft",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0c3df64b6c9f840",
        "top": "0%",
        "width": "33.00%",
        "zIndex": 1
    }, {}, {});
    flxMicrosoft.setDefaultUnit(kony.flex.DP);
    var btnMS = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "39%",
        "focusSkin": "CopysknFbBtn0a79d7bb3acec46",
        "height": "75dp",
        "id": "btnMS",
        "isVisible": true,
        "onClick": AS_Button_02ffdc821afb48fea1634f728a3003c0,
        "skin": "CopysknFbBtn09f1ede87fcf248",
        "width": "75dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0b1c5e0befad349 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0b1c5e0befad349",
        "isVisible": true,
        "skin": "CopyslLabel0ea89fc4860e846",
        "text": "Microsoft",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMicrosoft.add(btnMS, Label0b1c5e0befad349);
    flx1.add(flxGoogle, flxMicrosoft);
    var flx2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "33.30%",
        "id": "flx2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "right": "0%",
        "skin": "CopyslFbox0c3df64b6c9f840",
        "width": "33%",
        "zIndex": 10
    }, {}, {});
    flx2.setDefaultUnit(kony.flex.DP);
    var flxFacebook = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxFacebook",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox04deff0aa7c8440",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    flxFacebook.setDefaultUnit(kony.flex.DP);
    var btnFB = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "39%",
        "focusSkin": "sknFbBtnActive",
        "height": "75dp",
        "id": "btnFB",
        "isVisible": true,
        "onClick": AS_Button_b4308a8c721b4be9b755b53eeb4c2ef4,
        "skin": "sknFbBtn",
        "width": "75dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel04c01177ec5834c = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel04c01177ec5834c",
        "isVisible": true,
        "skin": "CopyslLabel095dd06176f1448",
        "text": "Facebook",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxFacebook.add(btnFB, CopyLabel04c01177ec5834c);
    flx2.add(flxFacebook);
    var flx3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "75%",
        "clipBounds": true,
        "height": "37.83%",
        "id": "flx3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0%",
        "skin": "CopyslFbox0c3df64b6c9f840",
        "top": "62.34%",
        "width": "100%"
    }, {}, {});
    flx3.setDefaultUnit(kony.flex.DP);
    var flxcLinkedIn = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "26%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxcLinkedIn",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox065c23036d54545",
        "top": "0%",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    flxcLinkedIn.setDefaultUnit(kony.flex.DP);
    var CopyButton091968743bc8e4f = new kony.ui.Button({
        "centerX": "49.67%",
        "centerY": "34.26%",
        "focusSkin": "CopysknFbBtn074b94d09677c4c",
        "height": "75dp",
        "id": "CopyButton091968743bc8e4f",
        "isVisible": true,
        "onClick": AS_Button_37c4ac191a704fedbf6acdf8e02c8ee0,
        "skin": "CopysknFbBtn0ee281bc32f324f",
        "width": "75dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel01d9b69bf67874c = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel01d9b69bf67874c",
        "isVisible": true,
        "skin": "CopyslLabel0ea89fc4860e846",
        "text": "Linkedin",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxcLinkedIn.add(CopyButton091968743bc8e4f, CopyLabel01d9b69bf67874c);
    var flxcBox = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "74%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxcBox",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0217788093bc045",
        "top": "0%",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    flxcBox.setDefaultUnit(kony.flex.DP);
    var CopyButton0d7ed97880d2041 = new kony.ui.Button({
        "centerX": "50.00%",
        "centerY": "39%",
        "focusSkin": "sknBtnBoxActive",
        "height": "75dp",
        "id": "CopyButton0d7ed97880d2041",
        "isVisible": true,
        "onClick": AS_Button_165ba6984ccb42b1a1ff83ee1151c2df,
        "skin": "sknBtnBox",
        "width": "75dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0620314f9513444 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0620314f9513444",
        "isVisible": true,
        "skin": "CopyslLabel06c0cf63d6a1d49",
        "text": "Box",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80.00%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxcBox.add(CopyButton0d7ed97880d2041, CopyLabel0620314f9513444);
    flx3.add(flxcLinkedIn, flxcBox);
    var Label07c31b99711cf4e = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label07c31b99711cf4e",
        "isVisible": true,
        "skin": "CopyslLabel0481b101ded124c",
        "text": "Connect With",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLogos.add(flx1, flx2, flx3, Label07c31b99711cf4e);
    var btnKonyCloudOAuth = new kony.ui.Button({
        "bottom": "0dp",
        "centerX": "50%",
        "focusSkin": "sknBtnTrnsFocus",
        "height": "50dp",
        "id": "btnKonyCloudOAuth",
        "isVisible": true,
        "onClick": AS_Button_c4d6508369394684958cffcb927bd9b1,
        "skin": "sknBtnTrans",
        "text": "Kony OAuth",
        "width": "260dp",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxcMain.add(flxcTitle, flxLogos, btnKonyCloudOAuth);
    frmHome.add(flxcMain);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_801aab63c9e94507aa0e72d2817e5dd0,
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
        "onDeviceBack": AS_Form_206e345a0434422f8d7fcd6a4afd199f,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmHome.info = {
        "kuid": "a1f4c52e6be342b0a6a34efc6a40d25e"
    };
};