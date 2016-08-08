function getKonyMBAASAppKey()
{
  
	return env.appKey;
}

function getKonyMBAASAppSecret()
{
	return env.appSecret;
}

function getKonyMBAASServiceUrl()
{
 	return env.serviceURL; 
}
var env={
"appKey":"37d59386fa89713a7e9e9636db89f5b0",
"appSecret":"ef763b66fdce4d9b8106cc3f6fc587db",
"serviceURL":"https://100000032.auth.konycloud.com/appconfig"
};

var google={"provider_name":"GoogleOAuth"};
var facebook={"provider_name":"FacebookOAuth"};
var linkedin={"provider_name":"LinkedInOAuth"};
var microsoft={"provider_name":"MicrosoftOAuth"};
var box={"provider_name":"BoxOAuth"};