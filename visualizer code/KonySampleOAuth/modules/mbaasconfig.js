function getKonyMBAASAppKey()
{
  
	return env.appkey;
}

function getKonyMBAASAppSecret()
{
	return env.appsecret;
}

function getKonyMBAASServiceUrl()
{
 	return env.serviceURL; 
}
var env={
"appkey":"f24ee2fe74bc26e470678bee13c11442",
"appsecret":"63ce1cc4c593af2eb4d68e3aafa3c9ef",
"serviceURL":"https://100000347.auth.qa-konycloud.com/appconfig "
};

var google={"provider_name":"GoogleOAuth"};
var facebook={"provider_name":"FacebookOAuth"};
var linkedin={"provider_name":"LinkedInOAuth"};
var microsoft={"provider_name":"MicrosoftOAuth"};
var box={"provider_name":"BoxOAuth"};