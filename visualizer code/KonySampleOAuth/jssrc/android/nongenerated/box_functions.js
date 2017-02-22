function boxLogin() {
    //frmLoad.show();
    providerSelected = "Box";
    login(MBaaSConfig.boxProvider, displayBoxProfile);
}

function displayBoxProfile(profile) {
    kony.print("profile stringify: " + JSON.stringify(profile));
    var raw_res = profile.user_attributes.raw_response;
    var full_name = JSON.parse(raw_res).name;
    var Profile_Pic = profile.user_attributes.avatar_url;
    var email = profile.user_attributes.login;
    displayProfile(undefined, undefined, full_name, email, Profile_Pic);
    frmProfile.headers[0].lblTitle.text = "Box Profile";
    //	frmProfile.footers[0].btnInvokeService.text="Access Files & Folders";
}

function displayRootFoldersAndFiles(folderObj) {
    var dataList = [];
    for (var i = 0; i < folderObj.count; i++) {
        var resObj = {};
        if (folderObj.entries[i].type === "folder") {
            resObj = fillDetails("folder.png", "", folderObj.entries[i].name, folderObj.entries[i].id, folderObj.entries[i].type, "", "", "");
        } else if (folderObj.entries[i].type === "file") {
            resObj = fillDetails("file.png", "", folderObj.entries[i].name, folderObj.entries[i].id, folderObj.entries[i].type, "", "", "");
        }
        dataList.push(resObj);
    }
    frmBox.segOnedrive.removeAll();
    frmBox.segOnedrive.addAll(dataList);
    kony.application.dismissLoadingScreen();
    frmBox.show();
}

function displayBoxDetails(dataObj) {
    if (dataObj.folderId === "0") {
        displayRootFoldersAndFiles(dataObj);
    } else {
        openFoldersOrFiles(dataObj, dataObj.link, "createSharedLinkForFolder", displayBoxDetails);
    }
}

function openFoldersOrFiles(dataObj, link, operation_name, callback) {
    if (dataObj.link !== "") {
        kony.application.dismissLoadingScreen();
        kony.application.openURL(link);
    } else {
        var service_name = "BoxFiles";
        var params = {
            "folderId": dataObj.folderId
        };
        var headers = {};
        integration_service(service_name, operation_name, params, headers, displayBoxDetails);
    }
}

function getBoxEvents() {
    var service_name = "BoxFiles";
    var operation_name = "getFilesAndFolders";
    var params = {
        "folderId": "0"
    };
    var headers = {};
    kony.application.showLoadingScreen("sknLoading", "Please Wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    integration_service(service_name, operation_name, params, headers, displayBoxDetails);
}

function openFile(dataObj) {
    openFoldersOrFiles(dataObj, dataObj.url, "createSharedLinkForFile", openFile);
}

function openBoxDetails() {
    var service_name;
    var operation_name;
    var params;
    var headers;
    var id = frmBox.segOnedrive.selectedItems[0].lblId.text;
    var type = frmBox.segOnedrive.selectedItems[0].lblType.text;
    if (type == "folder") {
        service_name = "BoxFiles";
        operation_name = "getFilesAndFolders";
        params = {
            "folderId": id
        };
        headers = {};
        kony.application.showLoadingScreen("sknLoading", "Please Wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        integration_service(service_name, operation_name, params, headers, displayBoxDetails);
    } else if (type == "file") {
        service_name = "BoxFiles";
        operation_name = "openFile";
        params = {
            "fileId": id
        };
        headers = {};
        kony.application.showLoadingScreen("sknLoading", "Please Wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        integration_service(service_name, operation_name, params, headers, openFile);
    }
}