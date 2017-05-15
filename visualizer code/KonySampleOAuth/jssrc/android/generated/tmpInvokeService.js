function initializetmpInvokeService() {
    FlexContainer03fc83e71359a4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer03fc83e71359a4f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    FlexContainer03fc83e71359a4f.setDefaultUnit(kony.flex.DP);
    var btnInvokeService = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0c68d706096e646",
        "height": "100%",
        "id": "btnInvokeService",
        "isVisible": false,
        "left": "0%",
        "onClick": AS_Button_91545b081c294f62a81fd58231d5ee69,
        "skin": "CopyslButtonGlossBlue0c68d706096e646",
        "text": "Show Details",
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer03fc83e71359a4f.add(btnInvokeService);
}