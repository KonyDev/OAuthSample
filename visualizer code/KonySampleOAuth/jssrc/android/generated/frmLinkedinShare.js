function addWidgetsfrmLinkedinShare() {
    frmLinkedinShare.setDefaultUnit(kony.flex.DP);
    var flxcTitle0da9bf61c612645 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "88dp",
        "id": "flxcTitle0da9bf61c612645",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox095ea9969428649",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {}, {});
    flxcTitle0da9bf61c612645.setDefaultUnit(kony.flex.DP);
    var imgIcon0b9f4454d9fc449 = new kony.ui.Image2({
        "height": "50dp",
        "id": "imgIcon0b9f4454d9fc449",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage0964034f71e364f",
        "src": "konyicon.png",
        "top": "0dp",
        "width": "50dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTitle0fb323f403f314f = new kony.ui.Label({
        "id": "lblTitle0fb323f403f314f",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel02eecf93b06dc4e",
        "text": "What's happening?",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxcTitle0da9bf61c612645.add(imgIcon0b9f4454d9fc449, lblTitle0fb323f403f314f);
    var lblLine065898aa70e2549 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "2dp",
        "id": "lblLine065898aa70e2549",
        "isVisible": false,
        "left": "0dp",
        "skin": "sknLblLine037405d1cdbcf47",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxcLinkediNShare = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "240dp",
        "id": "flxcLinkediNShare",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "3dp",
        "skin": "slFbox",
        "top": "98dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxcLinkediNShare.setDefaultUnit(kony.flex.DP);
    var CopylblLine09a550af73fdc46 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "CopylblLine09a550af73fdc46",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblLine037405d1cdbcf47",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtBxLink = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "24.14%",
        "focusSkin": "CopyskntxtBxLinkPlaceHolder0bd31b8cd3d6746",
        "height": "60dp",
        "id": "txtBxLink",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Link",
        "secureTextEntry": false,
        "skin": "CopyskntxtBxLinkPlaceHolder0bd31b8cd3d6746",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "48.15%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 2],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "skntxtBxLinkPlaceHolder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopylblLine01aa6e9cfd49948 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "CopylblLine01aa6e9cfd49948",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblLine037405d1cdbcf47",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtBxComment = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "sknTxtBxLink",
        "height": "60dp",
        "id": "txtBxComment",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Comment",
        "secureTextEntry": false,
        "skin": "sknTxtBxLink",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "skntxtBxLinkPlaceHolder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopylblLine001c7a9256c0143 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "CopylblLine001c7a9256c0143",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblLine037405d1cdbcf47",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxRadio = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "flxRadio",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "5dp",
        "width": "300dp",
        "zIndex": 1
    }, {}, {});
    flxRadio.setDefaultUnit(kony.flex.DP);
    var flxAnyone = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxAnyone",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "7dp",
        "onClick": AS_FlexContainer_31cb85f3d4f64dbab1c2dff344dc9433,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100dp",
        "zIndex": 1
    }, {}, {});
    flxAnyone.setDefaultUnit(kony.flex.DP);
    var imgIcon1 = new kony.ui.Image2({
        "height": "50dp",
        "id": "imgIcon1",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "radiobtn_normal.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTxt = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTxt",
        "isVisible": true,
        "left": "8dp",
        "skin": "sknLblRbtn",
        "text": "Anyone",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "56dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxAnyone.add(imgIcon1, lblTxt);
    var flxConnection = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxConnection",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "7dp",
        "onClick": AS_FlexContainer_26c904049e9347fd8fff86b55d20c42e,
        "skin": "slFbox",
        "top": "0dp",
        "width": "175dp",
        "zIndex": 1
    }, {}, {});
    flxConnection.setDefaultUnit(kony.flex.DP);
    var imgIcon2 = new kony.ui.Image2({
        "height": "50dp",
        "id": "imgIcon2",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "radiobtn_normal.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTxt2 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTxt2",
        "isVisible": true,
        "left": "8dp",
        "skin": "sknLblRbtn",
        "text": "Connections Only",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "56dp",
        "width": "200dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxConnection.add(imgIcon2, lblTxt2);
    flxRadio.add(flxAnyone, flxConnection);
    var btnShare = new kony.ui.Button({
        "centerX": "48.15%",
        "focusSkin": "CopysknBtnLinkedinShare031005e0ecc5a43",
        "id": "btnShare",
        "isVisible": true,
        "onClick": AS_Button_82cf0d81a9984eb7b22dce01c36ec3a6,
        "skin": "CopysknBtnLinkedinShare031005e0ecc5a43",
        "text": "Share",
        "top": "11dp",
        "width": "300dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {});
    flxcLinkediNShare.add(CopylblLine09a550af73fdc46, txtBxLink, CopylblLine01aa6e9cfd49948, txtBxComment, CopylblLine001c7a9256c0143, flxRadio, btnShare);
    frmLinkedinShare.add(flxcTitle0da9bf61c612645, lblLine065898aa70e2549, flxcLinkediNShare);
};

function frmLinkedinShareGlobals() {
    frmLinkedinShare = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLinkedinShare,
        "enabledForIdleTimeout": false,
        "headers": [CopyflxTwitter0a1a8b1469c1848],
        "id": "frmLinkedinShare",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm09e7b5f14cfc04e"
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
    frmLinkedinShare.info = {
        "kuid": "f433feb19aa645ada5183721cd5f98bc"
    };
};