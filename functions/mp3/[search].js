
const { template }  = require("../kit/template");
const ytsearch = require("../kit/dosearch");

export async function onRequestGet(context){
  
var query = context.functionPath.split("/")[2].replace(/-/g," ");
   
try {
      
      
      var dsp = [];
      var thmb = [];
    
    
      var query_ = decodeURIComponent(query).replace(/ +/g,"-")
      var e = await ytsearch(query_)
   
    function hex2ascii(hex) {
         if (!(typeof hex === 'number' || typeof hex == 'string')) { return '' }
          hex = hex.toString().replace(/\s+/gi, '')
          const stack = [] 
          for (var i = 0; i < hex.length; i += 2) { const code = parseInt(hex.substr(i, 2), 16) 
          if (!isNaN(code) && code !== 0) { stack.push(String.fromCharCode(code)) } }
           return stack.join('')
            }
     
    var content="";
    for(var i=0; i<e.length; i++)
        {
               var id = e[i].id;
               var fIdd = e[0].id;
               var nId = e[i].nId;
               var firstId = e[0].nId;       
               var title = e[i].title;
               var firstTitle= e[0].title;
               var thumb = `https://i.ytimg.com/vi/${nId}/mqdefault.jpg`;
               var value = e[i].views;
               var count = value + " Streams.";
               var fP = e[0].views + " Streams."; 
              
         thmb.push(thumb)
         dsp.push(title)
      
                
content += 
`
<div class="music-file" data-media="${id}">

                        <div class="mf-image">
                             <div class="mf-ibg mcover"></div>
                            <div class="lazy-thumbs" data-image="${thumb}"
                                data-title="${title}"></div>
                        </div>
                        <div class="mf-details">
                            <div class="mf-content">
                                <h3>${title}</h3>
                                <ul class="mf-info">
                                    <li><span class="fas fa-user-crown"></span>...</li>
                                    <li><span class="far fa-calendar-star"></span>..</li>
                                    <li><span class="fas fa-play"></span>${count}</li>
                                </ul>
                                <div class="mf-desc">... </div>
                                <div class="music-player"></div>
                            </div>
                            <ul class="mf-actions">
                                <li data-mact="pm"><span class="icon"><span class="fas fa-play fa-fw"></span><span
                                            class="fas fa-spinner-third fa-spin fa-fw"></span></span><span
                                        class="text"><span class="large">Play Music</span><span
                                            class="short">Play</span></span></li>
                                <li data-mact="sm"><span class="icon"><span
                                            class="fas fa-circle fa-fw"></span></span><span class="text"><span
                                            class="large">Stop Music</span><span class="short">Stop</span></span></li>
                                <li data-mact="dl" class="mp3dl"><span class="icon"><span
                                            class="fas fa-download fa-fw"></span></span><span class="text"><span
                                            class="large">Download MP3</span><span class="short">Download</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>

`



 
}

   var title = query +" MP3 "
   var thumbnail = thmb[0];
   var description =  dsp[0].replace(/[(")-\/•~=¥€¢{|}[\]]/gi,"").replace(/ +/g," ");
   var keyword = query + ", MP3, Download, " + dsp[0];
   var titleRI = decodeURI(query).replace(/ +/g,"-");
   var randy = Math.random()
   var webx = context.request.url.split("/")[2]
   var obj = {webx: webx, "randy": randy, "fId":firstId,fIdd: fIdd, fTitle: firstTitle, fP:fP, "query": decodeURIComponent(query),"title": decodeURIComponent(title), "ogTitle": decodeURIComponent(title), "thumbnail": thumbnail, "description": decodeURIComponent(description),"keywords": decodeURIComponent(keyword),"titleRI": decodeURIComponent(titleRI), "content": content}
   var html = template(obj)
  
  
  return new Response(html, { headers : {"content-type": "text/html;charset-UTF=8"} });
   }

  catch(err){
    
  
  return new Response(err.message + err.stack, { headers : {"content-type": "text/html;charset-UTF=8"} });
}
}
