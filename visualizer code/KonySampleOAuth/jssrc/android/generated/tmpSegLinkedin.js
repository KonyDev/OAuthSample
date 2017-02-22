function initializetmpSegLinkedin() {
    flxcSegLinkedinMainContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxcSegLinkedinMainContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "CopyslFbox0cf1a9d8b16ab43"
    }, {}, {});
    flxcSegLinkedinMainContainer.setDefaultUnit(kony.flex.DP);
    var flxcSubContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxcSubContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "CopyslFbox054133dad3a8147",
        "top": "0px",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxcSubContainer.setDefaultUnit(kony.flex.DP);
    var flxcUserDetails00cb9f313ded842 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "flxcUserDetails00cb9f313ded842",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox04f400efbe68e45",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flxcUserDetails00cb9f313ded842.setDefaultUnit(kony.flex.DP);
    var imgUser04052645a5bd043 = new kony.ui.Image2({
        "height": "80dp",
        "id": "imgUser04052645a5bd043",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknImgIcon052ef934066304f",
        "src": "vinay.png",
        "top": "0dp",
        "width": "20%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxcUserId0150d907b6de34c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxcUserId0150d907b6de34c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20%",
        "skin": "slFbox04f400efbe68e45",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxcUserId0150d907b6de34c.setDefaultUnit(kony.flex.DP);
    var lblUserId0d8cda949d09b4c = new kony.ui.Label({
        "height": "25dp",
        "id": "lblUserId0d8cda949d09b4c",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblId0cf945fdd645f48",
        "text": "User Id",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblStatus059efb16195a74d = new kony.ui.Label({
        "height": "20dp",
        "id": "lblStatus059efb16195a74d",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblTId02586c0fccc4148",
        "text": "Power to users",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "30dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblTime08e9c1b62f62441 = new kony.ui.Label({
        "id": "lblTime08e9c1b62f62441",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblTId02586c0fccc4148",
        "text": "2 days",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "50dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxcUserId0150d907b6de34c.add(lblUserId0d8cda949d09b4c, lblStatus059efb16195a74d, lblTime08e9c1b62f62441);
    flxcUserDetails00cb9f313ded842.add(imgUser04052645a5bd043, flxcUserId0150d907b6de34c);
    var lblMsg00c78cb2a395640 = new kony.ui.Label({
        "id": "lblMsg00c78cb2a395640",
        "isVisible": true,
        "left": "2.72%",
        "skin": "sknLblMsg057f6ab5332dc42",
        "text": "Dummey Text",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "96.60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgUpload0a16702b69eb149 = new kony.ui.Image2({
        "centerX": "50%",
        "id": "imgUpload0a16702b69eb149",
        "isVisible": true,
        "skin": "slImage0af49f9237a0040",
        "src": "imagedrag.png",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblLikes0493adfd31d294b = new kony.ui.Label({
        "id": "lblLikes0493adfd31d294b",
        "isVisible": true,
        "left": "2.72%",
        "skin": "sknLblMsg057f6ab5332dc42",
        "text": "3 Likes",
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
    var flxcActionBx01ece903368ea49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "flxcActionBx01ece903368ea49",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "slFbox04f400efbe68e45",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxcActionBx01ece903368ea49.setDefaultUnit(kony.flex.DP);
    var lblLine0a98c40895e8b44 = new kony.ui.Label({
        "centerX": "50%",
        "height": "2dp",
        "id": "lblLine0a98c40895e8b44",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel070d7d582f5ad4c",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxcActions00588eef3c7c948 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxcActions00588eef3c7c948",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "2.72%",
        "skin": "slFbox04f400efbe68e45",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    flxcActions00588eef3c7c948.setDefaultUnit(kony.flex.DP);
    var flxcLike0cb450b719fe14a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxcLike0cb450b719fe14a",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox04f400efbe68e45",
        "top": "0%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxcLike0cb450b719fe14a.setDefaultUnit(kony.flex.DP);
    var imgLike0ad69ead0b1c24e = new kony.ui.Image2({
        "centerY": "50%",
        "id": "imgLike0ad69ead0b1c24e",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage0af49f9237a0040",
        "src": "like.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblLike055876583cc4244 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLike055876583cc4244",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblAction08f947ad32d6a4a",
        "text": "Like",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxcLike0cb450b719fe14a.add(imgLike0ad69ead0b1c24e, lblLike055876583cc4244);
    var flxcComment04da939b8b1b34a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxcComment04da939b8b1b34a",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "4%",
        "skin": "slFbox04f400efbe68e45",
        "top": "0%",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    flxcComment04da939b8b1b34a.setDefaultUnit(kony.flex.DP);
    var imgCmnt03361aac4acaf48 = new kony.ui.Image2({
        "centerY": "55%",
        "id": "imgCmnt03361aac4acaf48",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage0af49f9237a0040",
        "src": "comment.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblComment04ced89520f5e40 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblComment04ced89520f5e40",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblAction08f947ad32d6a4a",
        "text": "Comment",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxcComment04da939b8b1b34a.add(imgCmnt03361aac4acaf48, lblComment04ced89520f5e40);
    var flxshare = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxshare",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "4%",
        "skin": "slFbox04f400efbe68e45",
        "top": "0%",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxshare.setDefaultUnit(kony.flex.DP);
    var imgShare0e16e15ad62b346 = new kony.ui.Image2({
        "centerY": "50%",
        "id": "imgShare0e16e15ad62b346",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage0af49f9237a0040",
        "src": "share.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblShare03c73a54b0f7b4c = new kony.ui.Label({
        "height": "100%",
        "id": "lblShare03c73a54b0f7b4c",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblAction08f947ad32d6a4a",
        "text": "share",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxshare.add(imgShare0e16e15ad62b346, lblShare03c73a54b0f7b4c);
    flxcActions00588eef3c7c948.add(flxcLike0cb450b719fe14a, flxcComment04da939b8b1b34a, flxshare);
    flxcActionBx01ece903368ea49.add(lblLine0a98c40895e8b44, flxcActions00588eef3c7c948);
    flxcSubContainer.add(flxcUserDetails00cb9f313ded842, lblMsg00c78cb2a395640, imgUpload0a16702b69eb149, lblLikes0493adfd31d294b, flxcActionBx01ece903368ea49);
    flxcSegLinkedinMainContainer.add(flxcSubContainer);
}