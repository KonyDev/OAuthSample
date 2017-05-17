function linkedinLogin() {
    //frmLoad.show();
    providerSelected = "Linkedin";
    login(MBaaSConfig.linkedinProvider, displayLinkedinProfile);
}

function displayLinkedinProfile(profile) {
    kony.print("profile stringify: " + JSON.stringify(profile));
    kony.print("profile normal " + profile);
    kony.print("profile normal " + JSON.stringify(profile));
    var profile_picture;
    var first_name = profile.user_attributes.firstName;
    var last_name = profile.user_attributes.lastName;
    var full_name = first_name + " " + last_name;
    var email = profile.user_attributes.emailAddress;
    var raw_res = profile.user_attributes.raw_response;
    var p_urls = JSON.parse(raw_res).pictureUrls;
    if (p_urls !== undefined && p_urls._total !== 0) profile_picture = p_urls.values[0];
    else profile_picture = undefined;
    kony.application.dismissLoadingScreen();
    displayProfile(first_name, last_name, full_name, email, profile_picture);
    frmProfile.headers[0].lblTitle.text = "Linkedin Profile";
    //	frmProfile.footers[0].btnInvokeService.text="Share Link";
}
/*
function linkedinShareLink()
{
  frmLinkedinShare.flxcLinkediNShare.btnShare.setVisibility(false);
  kony.application.showLoadingScreen("sknLoading","Please Wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
  var comment=frmLinkedinShare.flxcLinkediNShare.txtBxComment.text;
  if(comment!==null)
    comment=comment.trim();
  else
    {
      	kony.application.dismissLoadingScreen();
    	alert("comment should not be empty");
      frmLinkedinShare.flxcLinkediNShare.btnShare.setVisibility(true);
     	return;
    }
  var link=frmLinkedinShare.flxcLinkediNShare.txtBxLink.text;
  if(link!==null)
    link=link.trim();
  else
    {
      	kony.application.dismissLoadingScreen();
    alert("link should not be empty");
      frmLinkedinShare.flxcLinkediNShare.btnShare.setVisibility(true);
      return;
    }
 
  if(comment===""|| link==="" || selected_value==="" )
    {
      kony.application.dismissLoadingScreen();
      alert("comment/link/radio button value should not be empty ");
      frmLinkedinShare.flxcLinkediNShare.btnShare.setVisibility(true);
      return ;
    }
  var service_name="LinkedInShareURL";
  var operation_name="postURL";
  var headers={"Content-Type":"application/json"};
  var params={"comment":comment+" "+link,"code":selected_value};
   	integration_service(service_name,operation_name,params,headers,function(result){
      alert("successfully shared the link");
      frmLinkedinShare.flxcLinkediNShare.btnShare.setVisibility(true);
      frmLinkedinShare.show();
      kony.application.dismissLoadingScreen();
      
    });
}


*/