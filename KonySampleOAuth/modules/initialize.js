//Type your code here
var client=null;
var auth_client=null;
var res={"code":0,"message":""};
var flag=0;
function initializeClient()
{
  if(flag===0)
    {
      flag=1;
  kony.application.showLoadingScreen("sknLoading","Please Wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
  var app_key=getKonyMBAASAppKey();
  var app_secret=getKonyMBAASAppSecret();
  var service_url=getKonyMBAASServiceUrl();
  client=new kony.sdk();
  client.init(app_key, app_secret, service_url, function(response) {
    res.code=1;
    res.message=JSON.stringify(response);
    frmHome.flxLogos.setVisibility(true);
    kony.application.dismissLoadingScreen();
	}, function(error) {
    kony.application.dismissLoadingScreen();
	res.code=0;
    res.message=JSON.stringify(error);
    alert("Internet connection issue check your network");
  });
    }
}