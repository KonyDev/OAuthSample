function instagramLogin()
{
  frmLoad.show();
  providerSelected="Box";
  login(instagram.provider_name,displayinstagramProfile,profile);
}//Type your code here
function displayinstagramProfile(profile)
{
  kony.print("profile stringify: "+JSON.stringify(profile));
  kony.print("profile normal: "+profile);
  kony.print("profile stringify: "+JSON.stringify(profile));
  	var raw_res=profile.user_attributes.raw_response;
  	raw_res=JSON.parse(raw_res);
  kony.print("raw_res normal: "+raw_res);
  kony.print("\nraw_res stringify:-"+JSON.stringify(raw_res));
  	var full_name=raw_res.data.full_name;
 	kony.print("\nraw_res"+JSON.stringify(raw_res));
  var Profile_Pic=raw_res.data.profile_picture;
 
  	var email=profile.user_attributes.login;
  
  
  displayProfile(undefined,undefined,full_name,email,Profile_Pic);
  frmProfile.headers[0].lblTitle.text="Instagram Profile";
 // 	frmProfile.footers[0].btnInvokeService.text="Access Files & Folders"; 	
}