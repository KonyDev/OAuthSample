function addWidgetsfrmProfile() {
    frmProfile.setDefaultUnit(kony.flex.DP);
    var flxProfile = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100.00%",
        "id": "flxProfile",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "CopyslFbox0095cbc7299bc40",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    flxProfile.setDefaultUnit(kony.flex.DP);
    var DPName = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "DPName",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.06%",
        "skin": "CopyslFbox06f514a3d7bfe4b",
        "top": "0.00%",
        "width": "100%"
    }, {}, {});
    DPName.setDefaultUnit(kony.flex.DP);
    var profilePicture = new kony.ui.Image2({
        "centerX": "74.07%",
        "centerY": "48.41%",
        "height": "160dp",
        "id": "profilePicture",
        "isVisible": true,
        "skin": "CopyslImage0b887084a09cb42",
        "src": "konyimg.png",
        "width": "160dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0ae4aea8f63a94e = new kony.ui.Label({
        "bottom": "0%",
        "height": "1px",
        "id": "CopyLabel0ae4aea8f63a94e",
        "isVisible": true,
        "left": "2%",
        "right": "2%",
        "skin": "sknLblLine",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    DPName.add(profilePicture, CopyLabel0ae4aea8f63a94e);
    var flxFirstNmae = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxFirstNmae",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox065cb3677d09040",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    flxFirstNmae.setDefaultUnit(kony.flex.DP);
    var Label0b7350f9073fd4c = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label0b7350f9073fd4c",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel09a58561e63f945",
        "text": "First Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "30%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label0b7f4eb03f62c49 = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label0b7f4eb03f62c49",
        "isVisible": true,
        "left": "32%",
        "skin": "sknLblColon",
        "text": ":",
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
    var lblName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblName",
        "isVisible": true,
        "left": "36%",
        "skin": "CopyslLabel0aa08676b523146",
        "text": "Jhon",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "62%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblLine1 = new kony.ui.Label({
        "bottom": "0%",
        "height": "1px",
        "id": "lblLine1",
        "isVisible": true,
        "left": "2%",
        "right": "2%",
        "skin": "sknLblLine",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxFirstNmae.add(Label0b7350f9073fd4c, Label0b7f4eb03f62c49, lblName, lblLine1);
    var flxLastName = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxLastName",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox090b60784c21a4c",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    flxLastName.setDefaultUnit(kony.flex.DP);
    var CopyLabel075a937284d564a = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel075a937284d564a",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel09a58561e63f945",
        "text": "Last Name",
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
    var CopyLabel0e545407f9a3744 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0e545407f9a3744",
        "isVisible": true,
        "left": "32%",
        "skin": "sknLblColon",
        "text": ":",
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
    var lblLastName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLastName",
        "isVisible": true,
        "left": "36%",
        "skin": "CopyslLabel0aa08676b523146",
        "text": "Smith",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "62%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label0caec517b9f3c4e = new kony.ui.Label({
        "bottom": "0%",
        "height": "1px",
        "id": "Label0caec517b9f3c4e",
        "isVisible": true,
        "left": "2%",
        "right": "2%",
        "skin": "sknLblLine",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "96%",
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLastName.add(CopyLabel075a937284d564a, CopyLabel0e545407f9a3744, lblLastName, Label0caec517b9f3c4e);
    var flxEmail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxEmail",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0781189a82f2741",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    flxEmail.setDefaultUnit(kony.flex.DP);
    var CopyLabel056d6ea05430c49 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel056d6ea05430c49",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel09a58561e63f945",
        "text": "Email",
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
    var CopyLabel08208c94f5f4846 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel08208c94f5f4846",
        "isVisible": true,
        "left": "32%",
        "skin": "sknLblColon",
        "text": ":",
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
    var lblEmail = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblEmail",
        "isVisible": true,
        "left": "36%",
        "skin": "CopyslLabel0aa08676b523146",
        "text": "Jhonsmith@gmail.com ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "62%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0f8053472296444 = new kony.ui.Label({
        "bottom": "0%",
        "height": "1px",
        "id": "CopyLabel0f8053472296444",
        "isVisible": true,
        "left": "2%",
        "right": "2%",
        "skin": "sknLblLine",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxEmail.add(CopyLabel056d6ea05430c49, CopyLabel08208c94f5f4846, lblEmail, CopyLabel0f8053472296444);
    var flxFullname = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxFullname",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.06%",
        "skin": "CopyslFbox00955322d09174f",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    flxFullname.setDefaultUnit(kony.flex.DP);
    var CopyLabel03a955029618347 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel03a955029618347",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel09a58561e63f945",
        "text": "Display Name",
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
    var CopyLabel0ce47b6da633245 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0ce47b6da633245",
        "isVisible": true,
        "left": "32%",
        "skin": "sknLblColon",
        "text": ":",
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
    var lblFullname = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblFullname",
        "isVisible": true,
        "left": "36%",
        "skin": "CopyslLabel0aa08676b523146",
        "text": "John Smith",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "62%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label09274f62ad40241 = new kony.ui.Label({
        "bottom": "0%",
        "height": "1px",
        "id": "Label09274f62ad40241",
        "isVisible": true,
        "left": "2%",
        "right": "2%",
        "skin": "sknLblLine",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxFullname.add(CopyLabel03a955029618347, CopyLabel0ce47b6da633245, lblFullname, Label09274f62ad40241);
    var flxZipCode = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxZipCode",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    flxZipCode.setDefaultUnit(kony.flex.DP);
    var CopyLabel03af1f9fa55314f = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel03af1f9fa55314f",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel09a58561e63f945",
        "text": "Zip Code",
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
    var CopyLabel0b997c8b3b56046 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0b997c8b3b56046",
        "isVisible": true,
        "left": "35%",
        "skin": "CopyslLabel0a9b6dabb28da4b",
        "text": ":",
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
    var lblZipCode = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblZipCode",
        "isVisible": true,
        "left": "38%",
        "skin": "CopyslLabel0aa08676b523146",
        "text": "7000987",
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
    var CopyLabel0f803a9f2b6234c = new kony.ui.Label({
        "bottom": "0%",
        "height": "1px",
        "id": "CopyLabel0f803a9f2b6234c",
        "isVisible": true,
        "left": "2%",
        "right": 2,
        "skin": "sknLblLine",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxZipCode.add(CopyLabel03af1f9fa55314f, CopyLabel0b997c8b3b56046, lblZipCode, CopyLabel0f803a9f2b6234c);
    flxProfile.add(DPName, flxFirstNmae, flxLastName, flxEmail, flxFullname, flxZipCode);
    frmProfile.add(flxProfile);
};

function frmProfileGlobals() {
    frmProfile = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmProfile,
        "enabledForIdleTimeout": false,
        "headers": [flxPro],
        "id": "frmProfile",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm03042a2acaa1a4a"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "onDeviceBack": AS_Form_f5dc5c702eec4e7d90f98d9bc424f24f,
        "retainScrollPosition": true,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmProfile.info = {
        "kuid": "85980f94e7004778ab18efdfe8ba9103"
    };
};