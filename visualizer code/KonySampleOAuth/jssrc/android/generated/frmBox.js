function addWidgetsfrmBox() {
    frmBox.setDefaultUnit(kony.flex.DP);
    var FlexContainer02e4876642c9440 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer02e4876642c9440",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox02ddb40bc6fcb45",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    FlexContainer02e4876642c9440.setDefaultUnit(kony.flex.DP);
    var TextField0aeba227e74db43 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "bottom": "10%",
        "focusSkin": "CopyslTextBox02439036e2d264a",
        "height": "72%",
        "id": "TextField0aeba227e74db43",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "1%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox02439036e2d264a",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "15%",
        "width": "97%"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_SEARCH_VIEW
    });
    FlexContainer02e4876642c9440.add(TextField0aeba227e74db43);
    var segOnedrive = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "Label09c864798052647": "Delete",
            "img123": "attachment_icon.png",
            "lblDate": "24/09/13,",
            "lblId": "Label",
            "lblSize": "- 0 bytes",
            "lblTime": "11:19AM",
            "lblTitle": "Email attachments",
            "lblType": "Label"
        }],
        "groupCells": false,
        "id": "segOnedrive",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_660805acc75341baaa91c6e2bd8e6e99,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxOne,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e5e5e500",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "Label09c864798052647": "Label09c864798052647",
            "flxCInfo": "flxCInfo",
            "flxOne": "flxOne",
            "flxcDelete": "flxcDelete",
            "flxcDriveContainer": "flxcDriveContainer",
            "img123": "img123",
            "lblDate": "lblDate",
            "lblId": "lblId",
            "lblSize": "lblSize",
            "lblTime": "lblTime",
            "lblTitle": "lblTitle",
            "lblType": "lblType"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmBox.add(FlexContainer02e4876642c9440, segOnedrive);
};

function frmBoxGlobals() {
    frmBox = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBox,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "headers": [flxOneDrive],
        "id": "frmBox",
        "init": AS_Form_fab751f1d05642e9980fbba5e4199fb7,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm07be14ab6941041"
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
    frmBox.info = {
        "kuid": "96fdc6a51db24726a59f4a8a0d377750"
    };
};