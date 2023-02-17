
var words  = require("./lib.js")


export async function onRequestGet(context){



    return new Response(words[0], { headers : {"content-type": "text/html;charset-UTF=8"} });


}