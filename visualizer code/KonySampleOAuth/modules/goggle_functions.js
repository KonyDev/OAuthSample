function googleLogin()
{
  //frmLoad.show();
  providerSelected="Google";
  login(MBaaSConfig.googleProvider,displayGoogleProfile);
}
var email;
function displayGoogleProfile(profile)
{	
  kony.print("profile stringify: "+JSON.stringify(profile));
  	var first_name=profile.user_attributes.name.familyName;
   	var last_name=profile.user_attributes.name.givenName;
   	var full_name=profile.user_attributes.displayName;
   	email=profile.user_attributes.emails[0].value;
   	var profile_picture=profile.user_attributes.image.url;
   	var profile_picture_size=profile_picture.replace("?sz=50","?sz=150");
   	displayProfile(first_name,last_name,full_name,email,profile_picture_size);
  	frmProfile.headers[0].lblTitle.text="Google Profile";
  //	frmProfile.footers[0].btnInvokeService.text="Show my Calender";
  	
}


//Google Calendar 

function getCalendarEvents()
{
  var service_name="GoogleCalendar";
  var operation_name="getCalendar";
  var params={"email":email};
  var headers={};
  kony.application.showLoadingScreen("sknLoading","Please Wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
 integration_service(service_name,operation_name,params,headers,displayCalendarEvents); 
 }

function displayCalendarEvents(calendarObj)
{  
  var length=Object.keys(calendarObj.calendar).length;
  var date=frmCalender.flxcCalendar.clndr.date;
  date=date.split('/');
  date=date[2]+'-'+date[1]+'-'+date[0];
  kony.print("DAte :"+date+"length"+length);
  var onlyDate;
  var resObj={};
   var dataList=[];
  var flag=0;
  for(var i=0;i<length;i++)
    {
      resObj={};
      var time=calendarObj.calendar[i].time;
      if(time!==undefined)
        {
          onlyDate=time.substring(0,10);
          var scheduledTime=time.substring(11,16);
         
          if(onlyDate===date)
            {              
     		resObj={
       			"lblDesc":{"text":calendarObj.calendar[i].summary},
              	"lblTime":{"text":scheduledTime},
      			};
     			dataList.push(resObj);
              flag=1;
             
            }
        }
    }
  if(flag!=1)
    {
      resObj={
       			"lblDesc":{"text":"There is no event scheduled today"},
      			};
     			dataList.push(resObj);
    }
  frmCalender.segCalender.removeAll();
   frmCalender.segCalender.addAll(dataList);
  kony.application.dismissLoadingScreen();
  frmCalender.show();
}