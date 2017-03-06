
//Display Profile for all providers
function displayProfile(first_name,last_name,full_name,email,Profile_Pic)
{
  	kony.print("In Commaon functions");
  	clear();
  
  if(Profile_Pic!==undefined)
    frmProfile.flxProfile.profilePicture.src=Profile_Pic;
  if(first_name!==undefined)
  	frmProfile.flxProfile.flxFirstNmae.lblName.text=first_name;
  else
    frmProfile.flxProfile.flxFirstNmae.setVisibility(false);
  if(last_name!==undefined)
  	frmProfile.flxProfile.flxLastName.lblLastName.text=last_name;
  else
    frmProfile.flxProfile.flxLastName.setVisibility(false);
  if(email!==undefined)
  	frmProfile.flxProfile.flxEmail.lblEmail.text=email;
  else
    frmProfile.flxProfile.flxEmail.setVisibility(false);
  kony.print("tst@@@");
  if(full_name!==undefined)
  	frmProfile.flxProfile.flxFullname.lblFullname.text=full_name;
  else
    frmProfile.flxProfile.flxFullname.setVisibility(false);
  frmProfile.show();
  	
  kony.print("@@@@@@@@@@@@@@@@@@@@@@ destroy");
}

/*
//Fill the folder & file details
function fillDetails(image_name,link,name,id,type,date,time,size)
{
  var resObj={
       	"img123":{"src":image_name},
       "lblTitle":{"text":name},
        "lblId":{"text":id},
        "lblType":{"text":type},
    	"lblLink":{"text":link},
         "lblDate":{"text":date},
       "lblTime":{"text":time},
       "lblSize":{"text":size},
      };
  return resObj;
}
*/

//Clear the profile form
function clear()
{
  	
  	frmProfile.flxProfile.flxFirstNmae.lblName.text="";
  	frmProfile.flxProfile.flxLastName.lblLastName.text="";
  	frmProfile.flxProfile.flxEmail.lblEmail.text="";
  	frmProfile.flxProfile.flxFullname.lblFullname.text="";
  	frmProfile.headers[0].lblTitle.text="";
  	frmProfile.flxProfile.flxFirstNmae.setVisibility(true);
  	frmProfile.flxProfile.flxLastName.setVisibility(true);
  //	frmProfile.footers[0].btnInvokeService.setVisibility(true);
  
}

/*
//Navigate to different providers
function redirectFeaturesPage()
{
  if(providerSelected=="Google")
    {
      frmCalender.segCalender.removeAll();
      frmCalender.show();
    }
  else if(providerSelected=="Microsoft")
    {
      getMFolders();
    }
  else if(providerSelected=="Linkedin")
    {
      frmLinkedinShare.show();
    }
  else if(providerSelected=="Box")
    {
      getFolders();
    }
  else
    {
      alert("invalid provider");
    }
  
}
*/