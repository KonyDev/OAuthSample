function setGestureRecogniserToFrmDrive() {
    var segTemp = frmOneDrive.segOnedrive.rowTemplate;
    try {
        //segTemp.addGestureRecognizer(constants.GESTURE_TYPE_PAN, {fingers: 1, continuousEvents:false}, panGestureHandlerFavFrm); // pan with 2 fingers 
        segTemp.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
            fingers: 1,
            swipedistance: 50,
            swipevelocity: 75
        }, swipeGestureHandler); // swipe with default parameters
        kony.print("\nSwipe Gesture recognizer added successfully\n");
    } catch (err) {
        alert("error while regestering the gestures" + err);
    }
}

function swipeGestureHandler(commonWidget, gestureInfo, context) {
    kony.print("\n swipe performed\n");
    try {
        var direction = "";
        var GesType = "" + gestureInfo.gestureType;
        var tapParams = gestureInfo.gesturesetUpParams.taps;
        var animObj;
        var rowList = [{
            sectionIndex: context["sectionIndex"],
            rowIndex: context["rowIndex"]
        }];
        var hasgesture = false;
        if (GesType == constants.GESTURE_TYPE_SWIPE) //Swipe gesture
        {
            var swipeDirection = "" + gestureInfo.swipeDirection; //Read swipe direction
            //alert(swipeDirection);
            if (swipeDirection == "1") {
                animObj = swipeRowLeftSide();
                hasgesture = true;
            } else if (swipeDirection == "2") {
                animObj = swipeRowRightSide();
                hasgesture = true;
            }
        }
        //var gmailAnimDefObject1 = kony.ui.createAnimation(animConf);
        //	var animConf = getAnimationConfig();
        var animConf = {
            duration: 1,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        };
        var swipeAnimtion1 = {
            definition: animObj,
            config: animConf,
            callbacks: null
        };
        var jsonObj = {
            rows: rowList,
            widgets: ["flxcDriveContainer"],
            animation: swipeAnimtion1
        };
        kony.print("\nJSONObj:- " + JSON.stringify(jsonObj));
        //context.widgetInfo.animateRows(jsonObj);
        if (hasgesture) frmOneDrive.segOnedrive.animateRows(jsonObj);
        //  frmFavorite.segFavRestaurents.animateRows(jsonObj);
    } catch (err) {
        alert("error in gesture call back" + err);
    }
}

function swipeRowLeftSide() {
    var animConf1 = {
        "50": {
            "left": "-70%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "left": "-40%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    };
    var animObj1 = kony.ui.createAnimation(animConf1);
    return animObj1;
}

function swipeRowRightSide() {
    var animConf1 = {
        "50": {
            "left": "50%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    };
    var animObj1 = kony.ui.createAnimation(animConf1);
    return animObj1;
}

function setDeleteButtonCallBack() {
    //FlexContainerFavorite.FlexContainerDeleteBtn.onClick = flx_onclick;
    flxOne.flxcDelete.onClick = flx_onclick;
}

function flx_onclick(widget, context) {
    var sectionIndex = context["sectionIndex"];
    var rowIndex = parseInt(context["rowIndex"]);
    var seg = context["widgetInfo"];
    //alert(rowIndex);
    var transformProp1 = kony.ui.makeAffineTransform();
    transformProp1.scale(1, 0);
    var transformProp3 = kony.ui.makeAffineTransform();
    transformProp3.scale(1, 1);
    var animDefinitionOne = {
        0: {
            "transform": transformProp3
        },
        100: {
            "transform": transformProp1
        }
    };
    var animDefinition = kony.ui.createAnimation(animDefinitionOne);
    var animConfig = {
        "duration": 0.3,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    };
    var finalAnimation = {
        definition: animDefinition,
        config: animConfig
    };
    kony.print("\nrow index:-" + parseInt(rowIndex));
    frmOneDrive.segOnedrive.removeAt(rowIndex, 0, finalAnimation);
    // frmFavorite.segFavRestaurents.removeAt(rowIndex, 0, finalAnimation);
}

function postAppInitCallback() {
    setGestureRecogniserToFrmDrive();
    setDeleteButtonCallBack();
}