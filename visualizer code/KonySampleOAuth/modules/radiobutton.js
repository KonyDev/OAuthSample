var selected_value="";
function radioButtonCallback(item){
  if(item===1){
    frmLinkedinShare.imgIcon1.src="radiobtn_active.png";
    frmLinkedinShare.imgIcon2.src="radiobtn_normal.png";
    selected_value="anyone";
  }else{
    frmLinkedinShare.imgIcon1.src="radiobtn_normal.png";
    frmLinkedinShare.imgIcon2.src="radiobtn_active.png";
    selected_value="connections-only";
  }
  
}
function deviceBackCallBack(){
 frmHome.show();
  return;
}
