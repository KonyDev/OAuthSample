//Type your code here
function displayKonyProfile(profile){	
  kony.print("profile stringify: "+JSON.stringify(profile));
  var first_name=profile.firstname;
  var last_name=profile.lastname
  var full_name=first_name+" "+last_name;
  email=profile.email;
  displayProfile(first_name,last_name,full_name,email,undefined);
  frmProfile.headers[0].lblTitle.text="Kony Profile";
}
function integSuccessCallback(res){
  if(res["httpStatusCode"]===200 && res["profile"]!=undefined)
  	displayKonyProfile(res["profile"]);
  else if(res["message"]!=undefined){
    alert(res["message"]);
  }
  kony.print(" in integSuccessCallback :"+JSON.stringify(res));
  kony.application.dismissLoadingScreen();
}
function integFailureCallback(error){
  if(error["message"]!=undefined){
    alert(error["message"]);
  }else{
  	alert("unable to process..please try later");
  }
  kony.print(" in integFailureCallback :"+JSON.stringify(error));
  kony.application.dismissLoadingScreen();
}
var oAuth="";
function kOAuth(){
  oAuth="KonyOAuth";
  var userId=frmKonyOAuth.txtBoxUserId.text;
  var password=frmKonyOAuth.txtBoxPassword.text;
  if(userId!==null||userId!==undefined){
    userId=userId.trim();
    if(userId=="")
      alert("please enter valid email id");
  }else{
    alert("please enter valid email id");
  }
  if(password!=null||password!==undefined){
    password=password.trim();
    if(password=="")
      alert("please enter password");
  }else{
    alert("please enter password");
  }
  try{
    var intgService;
    kony.application.showLoadingScreen("sknLoading","Please Wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    intgService = client.getIntegrationService(MBaaSConfig.KonyOAuthService);//Accounts is service name and accountsClient is Accounts integration service instance
    intgService.invokeOperation(MBaaSConfig.KonyOAuthServiceOperation,{},{"userid":userId,"password":password}, integSuccessCallback, integFailureCallback);
  }catch(exp){
    kony.print("error while invoking integration service: "+JSON.stringify(exp));
    kony.application.dismissLoadingScreen();
  }
}