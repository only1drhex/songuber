var words = require("../kit/lib")


export async function onRequestGet(context){
    try{
        
        var word = words()
    var map = ""
    var lastmod = '<lastmod>' + new Date().toISOString() + '</lastmod>'
    var sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`
   word = word.slice(20)
for(var i=0;i<word.length;i++){
    var entry = word[i]
map += `
    <url>
    <loc>https://songuber.com/${entry}</loc>
    ${lastmod}
    </url>
`

}


var final = `
${sitemap}
${map}
</urlset>
`
return new Response(final, { headers : {"content-type": "application/xml"} });

    }


    catch(err){


        return new Response(err.message + err.stack, { headers : {"content-type": "text/html;charset-UTF=8"} });

    }



}

