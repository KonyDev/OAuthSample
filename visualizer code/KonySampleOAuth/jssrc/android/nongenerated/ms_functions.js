function msLogin() {
    // frmLoad.show();
    providerSelected = "Microsoft";
    login(MBaaSConfig.microsoftProvider, displayMicrosoftProfile);
}

function displayMicrosoftProfile(profile) {
    kony.print("profile stringify: " + JSON.stringify(profile));
    var full_name = profile.user_attributes.name;
    var u_id = profile.userid;
    var first_name = profile.user_attributes.first_name;
    var last_name = profile.user_attributes.last_name;
    var email = profile.user_attributes.emails.account;
    var profile_picture = "https://apis.live.net/v5.0/" + u_id + "/picture?width:700";
    kony.application.dismissLoadingScreen();
    displayProfile(first_name, last_name, full_name, email, profile_picture);
    frmProfile.headers[0].lblTitle.text = "Microsoft Profile";
    //frmProfile.footers[0].btnInvokeService.text="Acess Files & Folders";
}
/*
function displayOneDriveFolders(folderObj)
{
  var responseDataList=folderObj.entries;
   var dataList=[];
   for(var i=0;i<responseDataList.length;i++){
     kony.print("Count@@@"+folderObj.entries[i].date.substring(0,10));
     var resObj={};
    if(folderObj.entries[i].type==="folder"||folderObj.entries[i].type==="album")
      {
     resObj=fillDetails("folder.png",folderObj.entries[i].link,folderObj.entries[i].name,folderObj.entries[i].id,folderObj.entries[i].type,folderObj.entries[i].date.substring(0,10),folderObj.entries[i].date.substring(11,16),"-"+folderObj.entries[i].size+"B");
      }
  else if(folderObj.entries[i].type==="file"||folderObj.entries[i].type==="photo")
    {
      resObj=fillDetails("file.png",folderObj.entries[i].link,folderObj.entries[i].name,folderObj.entries[i].id,folderObj.entries[i].type,folderObj.entries[i].date.substring(0,10),folderObj.entries[i].date.substring(11,16),"-"+folderObj.entries[i].size+"B");
    }
     
     dataList.push(resObj);
    
   }
     
   frmOneDrive.segOnedrive.removeAll();
   frmOneDrive.segOnedrive.addAll(dataList);
  kony.application.dismissLoadingScreen();
      frmOneDrive.show();
     
      
}

function displayMicrosoftFiles()
{
  
  var id=frmOneDrive.segOnedrive.selectedItems[0].lblId.text;
  kony.application.openURL(frmOneDrive.segOnedrive.selectedItems[0].lblLink.text); 
 
}



function getMicrosoftFolders()
{
  var service_name="MicrosoftDriveFiles";
  var operation_name="getFolders";
  var params={};
  var headers={};
  kony.application.showLoadingScreen("sknLoading","Please Wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
  integration_service(service_name,operation_name,params,headers,displayOneDriveFolders);
}*/