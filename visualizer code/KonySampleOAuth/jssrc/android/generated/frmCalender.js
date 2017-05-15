function addWidgetsfrmCalender() {
    frmCalender.setDefaultUnit(kony.flex.DP);
    var flxcCalendar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxcCalendar",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox024c66659657d4a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxcCalendar.setDefaultUnit(kony.flex.DP);
    var clndr = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "centerX": "50%",
        "dateFormat": "dd/MM/yyyy",
        "focusSkin": "CopyslCalendar09c10e50614e244",
        "hour": 0,
        "id": "clndr",
        "isVisible": true,
        "left": "0%",
        "minutes": 0,
        "onSelection": AS_Calendar_fbc2c5e25e0e4f2da2ec43747992c935,
        "seconds": 0,
        "skin": "CopyslCalendar060cdc1ed211549",
        "top": "0%",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true,
                "gridCellFocusSkin": "CopyslCalendar0bde13178d8dc4c",
                "gridCellInactiveDaysSkin": "CopyslCalendar0a710aee02f1f46",
                "gridCellSelectedSkin": "CopyslCalendar04cb02b723a9d4c",
                "gridCellSkin": "CopyslCalendar021d1f0b0da2245",
                "gridCellTodaySkin": "CopyslCalendar0c3e2e6137fd842",
                "gridCellWeekendSkin": "CopyslCalendar0c2d928c352a54d",
                "gridSkin": "CopyslCalendar016f25c90bd124f",
                "leftNavigationImage": "date_arrow_left.png",
                "rightNavigationImage": "date_arrow_right.png"
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_GRID_ONSCREEN,
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "dayTextAlignmentInCell": constants.CONTENT_ALIGN_CENTER
    });
    var segCalender = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "lblDesc": "",
            "lblTime": ""
        }],
        "groupCells": false,
        "id": "segCalender",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg071fc4f0b160048",
        "rowTemplate": flxSegCalendar,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "eff1d500",
        "separatorRequired": true,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxSegCalendar": "flxSegCalendar",
            "lblDesc": "lblDesc",
            "lblTime": "lblTime"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var data = new kony.ui.Label({
        "id": "data",
        "isVisible": false,
        "left": "134dp",
        "skin": "slLabel",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "28dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxcCalendar.add(clndr, segCalender, data);
    frmCalender.add(flxcCalendar);
};

function frmCalenderGlobals() {
    frmCalender = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCalender,
        "enabledForIdleTimeout": false,
        "headers": [flxCalender],
        "id": "frmCalender",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm00ef9fa76e9c64b"
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
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmCalender.info = {
        "kuid": "278cb7695161448088b475089def7e57"
    };
};