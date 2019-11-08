// function to generate a name for image
const generateNameForImage = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

// function to save to S3, return URL, save to db 
const savePostHelper = () => {
    console.log ('hi from savePostHelper');

}
savePostHelper();