function openMediaGallery() {
    function onselectioncallback(rawbytes) {
        //alert("in selection callback");
        if (rawbytes === null) {
            alert("nothing selected");
            return;
        }
        //alert("return status is "+returnStatus);
        //(convert the rawbytes to base64 and can be assigned 			to a image widget or use base64 to upload)
        var base64 = kony.convertToBase64(rawbytes);
        frmPhotos.imgTest.base64 = base64;
        frmPhotos.show();
        //Assigning rawbytes directly to a image widget
        /*formid.imageid.rawdata = rawbytes;*/
    }
    try {
        var querycontext = {
            mimetype: "image/*"
        };
        //  var querycontext = {};
        returnStatus = kony.phone.openMediaGallery(onselectioncallback, querycontext);
    } catch (err) {
        alert("error in openMediaGallery:: " + err);
    }
}