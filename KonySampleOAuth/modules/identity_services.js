var providerSelected="";

function profile(provider_name,callback){
	var user_store_client = client.getIdentityService(provider_name);
    user_store_client.getProfile(false, function(profile) {
         callback(profile);
      }, function(error) {
      kony.application.dismissLoadingScreen();
        alert("Error occured while fetching the profile.");
    });
} 



function login(provider_name,display_profile,callback)
{
  
  if(res.code==1)
    {
		try { 
			auth_client = client.getIdentityService(provider_name);
		} catch (exception) {
			alert("Exception" + exception.message);
		}
		auth_client.login({},
			function(response) {
  kony.application.showLoadingScreen("sknLoading","Please Wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
          		  callback(provider_name,display_profile);
			}, function(error) {
				  alert("login failure"+error.message);
        	}
		);
    }
  else
    {
      alert("issues with init");
    }
}





