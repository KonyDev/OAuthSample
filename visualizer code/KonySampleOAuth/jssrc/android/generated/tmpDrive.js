function initializetmpDrive() {
    flxOne = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "65dp",
        "id": "flxOne",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0f9d923f150b441"
    }, {}, {});
    flxOne.setDefaultUnit(kony.flex.DP);
    var flxcDriveContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxcDriveContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxWhite",
        "top": "0dp",
        "width": "100%",
        "zIndex": 10
    }, {}, {});
    flxcDriveContainer.setDefaultUnit(kony.flex.DP);
    var img123 = new kony.ui.Image2({
        "bottom": "5%",
        "height": "90%",
        "id": "img123",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "5dp",
        "width": "20%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTitle = new kony.ui.Label({
        "height": "52.64%",
        "id": "lblTitle",
        "isVisible": true,
        "left": "23%",
        "skin": "CopyslLabel0bb8023c0a7d348",
        "text": "Email attachments",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "13%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxCInfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "52%",
        "id": "flxCInfo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "23%",
        "skin": "slFbox",
        "top": "48%",
        "width": "70.02%",
        "zIndex": 1
    }, {}, {});
    flxCInfo.setDefaultUnit(kony.flex.DP);
    var lblDate = new kony.ui.Label({
        "height": "100%",
        "id": "lblDate",
        "isVisible": true,
        "left": "0%",
        "skin": "lblInfo",
        "text": "24/09/13,",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblTime = new kony.ui.Label({
        "height": "100%",
        "id": "lblTime",
        "isVisible": true,
        "left": "30%",
        "skin": "lblInfo",
        "text": "11:19AM",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblSize = new kony.ui.Label({
        "height": "100%",
        "id": "lblSize",
        "isVisible": true,
        "left": "60%",
        "skin": "lblInfo",
        "text": "- 0 bytes",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblId = new kony.ui.Label({
        "id": "lblId",
        "isVisible": false,
        "left": "134dp",
        "skin": "CopyslLabel026ef22643f8e45",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "13dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblType = new kony.ui.Label({
        "id": "lblType",
        "isVisible": false,
        "left": "232dp",
        "skin": "CopyslLabel001eec558969544",
        "text": "Label",
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
    flxCInfo.add(lblDate, lblTime, lblSize, lblId, lblType);
    flxcDriveContainer.add(img123, lblTitle, flxCInfo);
    var flxcDelete = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxcDelete",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0%",
        "skin": "CopysknFlxWhite066be4cd523b640",
        "top": "1dp",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxcDelete.setDefaultUnit(kony.flex.DP);
    var Label09c864798052647 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label09c864798052647",
        "isVisible": true,
        "skin": "CopyslLabel0210efc19e5db47",
        "text": "Delete",
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
    flxcDelete.add(Label09c864798052647);
    flxOne.add(flxcDriveContainer, flxcDelete);
}