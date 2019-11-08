// transforms dataURI into blob
global.atob = require("atob");
const Blob = require('node-blob');
let myDataUri = {this.props.history.location.state.uri}
function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}
console.log(dataURItoBlob(myDataUri));

