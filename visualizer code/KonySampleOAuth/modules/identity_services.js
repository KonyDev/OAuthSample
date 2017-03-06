var providerSelected="";
function login(provider_name,displayProfileFn)
{
  function successCallBack(response){
    kony.application.showLoadingScreen("sknLoading","Please Wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    auth_client.getProfile(false, function(result) {
         displayProfileFn(result);
      }, function(error) {
      	kony.application.dismissLoadingScreen();
        alert("Error occured while fetching the profile details");
    });
    
  }
  function failureCallBack(error){
    kony.application.dismissLoadingScreen();
     alert("Identity service login failed :"+error.message);
  }
	try { 
      	//kony.application.showLoadingScreen("sknLoading","Please Wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
		auth_client = client.getIdentityService(provider_name);
      	auth_client.login({},successCallBack,failureCallBack);
	} catch (exception) {
		alert("Exception" + exception.message);
      kony.application.dismissLoadingScreen();
	}
}
function mLogout(){
  if(oAuth==="KonyOAuth"){
    frmHome.show();
  }
  try{
  auth_client.logout(function(success){
     frmHome.show();
  },function(error){
    
  });
  }catch(exp){
    kony.print("exception occured while trying to logout:"+JSON.stringify(exp));
  }
  
}