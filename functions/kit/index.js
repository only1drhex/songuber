
var { words } = require("./words.js")


export async function onRequestGet(context){



    return new Response(words.length, { headers : {"content-type": "text/html;charset-UTF=8"} });


}