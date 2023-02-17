
var words  = require("./lib.js")


export async function onRequestGet(context){


var o = words.length
    return new Response(o, { headers : {"content-type": "text/html;charset-UTF=8"} });


}