
var words  = require("./test.js")


export async function onRequestGet(context){


var o = words.length + words[0]
    return new Response(o, { headers : {"content-type": "text/html;charset-UTF=8"} });


}