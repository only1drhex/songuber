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
var index = path
index = Number(index)
var lastIndex = index*10000;
var firstIndex = lastIndex - 9999;
word = word.slice(firstIndex-1,lastIndex)

for(var i=0;i<word.length;i++){
    var entry = word[i]
map += `<li><a href="https://${webx}/mp3/${entry}">${entry}</li></a>` 

}
 

var html =
`<!doctype html>
<html lang="en"> <head> <title> Music Sitemap</title>
   <head> <meta name="description"
        content="Music Sitemap" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        </div>
        <style>

        </style>
        </head>
    <body>
    <section>
    <ul>${map}</ul>
    </section>
</body></html>`
return new Response(html, { headers : {"content-type": "text/html;charset-UTF=8"} });

    }


    catch(err){


        return new Response(err.message + err.stack, { headers : {"content-type": "text/html;charset-UTF=8"} });

    }



}

