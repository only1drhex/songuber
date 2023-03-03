var words = require("../kit/lib")


export async function onRequestGet(context){
    try{
        
        var word = words()
    var map = ""
    var lastmod = '<lastmod>' + new Date().toISOString() + '</lastmod>'
    var sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`
   
var path = context.functionPath.split("/")[2].match(/\d/g).join("");
var webx = context.request.url.split("/")[2]
if(path == 1){
    word = word.slice(0,10000)
}

else if(path == 2){
    word = word.slice(10000,20000)
}

else if(path == 3){
    word = word.slice(20000,30000) 
}

else if (path == 4){
    word = word.slice(150000)
}

for(var i=0;i<word.length;i++){
    var entry = word[i]
map += `<li><a href="https://${webx}/mp3/${entry}">${entry}</li></a>` 

}


var html =
`<!doctype html>
<html lang="en"> <head> <title> Music Sitemap</title>
    <meta name="description"
        content="Music Sitemap" />
        </div>
    <body>
    <ul>${map}</ul>
</body></html>`
return new Response(html, { headers : {"content-type": "text/html;charset-UTF=8"} });

    }


    catch(err){


        return new Response(err.message + err.stack, { headers : {"content-type": "text/html;charset-UTF=8"} });

    }



}

