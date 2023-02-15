
const  template  = require("../kit/template");
const ytsearch = require("../kit/dosearch");

export async function onRequestGet(context){
  
var query = context.functionPath.split("/")[2].replace(/-/g," ");
   
try {
      
      
      var dsp = [];
      var thmb = [];
    
    
      var query_ = decodeURIComponent(query).replace(/ +/g,"-")
      var e = await ytsearch(query_)
   
    
     
    var content="";
    for(var i=0; i<e.length; i++)
        {
               var id = e[i].id;
               var firstId = e[0].id        
               var title = e[i].title;
               var thumb = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
               var value = e[i].views;
               var count = value + " Streams.";
               var time = e[i].time;
               var seconds = Number(e[i].seconds);
               var titleRI= title.replace(/[(")-\/•~=¥€¢{|}[\]]/g,' ').replace(/official/gi," ").replace(/video/gi," ").replace(/audio/g," ").trim().replace(/ +/g,"-");
            
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
   var obj = {webx: webx, "randy": randy, "fId":firstId, "query": decodeURIComponent(query),"title": decodeURIComponent(title), "ogTitle": decodeURIComponent(title), "thumbnail": thumbnail, "description": decodeURIComponent(description),"keywords": decodeURIComponent(keyword),"titleRI": decodeURIComponent(titleRI), "content": content}
   var html = template(obj)
  
  
  return new Response(html, { headers : {"content-type": "text/html;charset-UTF=8"} });
   }

  catch(err){
    var base = context.env.URL1 + "songs/search?source=perlxt&q="+ query;
      var get = await fetch(base)
      var e = await get.json()
    var content="";
    for(var i=0; i<e.length; i++)
        {
               var id = e[i].id;        
          var title = e[i].title;
              var thumb = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
                var value = e[i].views;
           var count = value + " Streams"
                                  
          var time = e[i].time;
          var seconds = Number(e[i].seconds);
        
          var titleRI= title.replace(/[(")-\/•~=¥€¢{|}[\]]/g,' ').replace(/official/gi," ").replace(/video/gi," ").replace(/audio/g," ").trim().replace(/ +/g,"-");
            
         thmb.push(thumb)
         dsp.push(title)
      
 var share_quote = encodeURI("Download MP3 - " +title).replace(/"/g,"");
var share_url = encodeURI("https://perlxt.com");

var share_text = encodeURI("*Download MP3- "+title+ "*\n\n"+ share_url+"/"+titleRI);
var share_title = encodeURI("Download MP3 - "+title );
var text = "Download MP3- "+title+"               "
text = text.replace(/"/g,"'")
var rto = "https://perlxt.com/"+titleRI
var size2 = ((128*seconds)/8)-(4*(seconds/10))
size2  =  size2 >= 1024 ? (Number(size2/1024)).toFixed(2) + "   MB": size2=    size2+ " KB";
content += 
`<div class="text-center"><div class="col-md-12"><div class="first${i} hero"><img class="hero-profile-img images${i}" data-src="${thumb}" style="width:100%" alt=""><div class="hero-description-bk"></div><div class="hero-description"><p id="item">${title}</p></div><div style="margin: 0px 0 0 0;" class="hero-date">${count}</div><div class="hero-date" style="margin:0 40px 48px 0"><i style="font-size:15px; padding-right: 3px;" class="fa fa-download"></i> ${size2}</div><div class="hero-date" style="margin:0 40px 19px 9px; background: #fff; align-items: center; color: #000; border-radius: 20px; height: auto; padding: 3px; padding-top: 5px ! important; padding-right: 5px ! important; padding-left:5px ! important; font-size: 11px;"> ${time}</div><div class="hero-date" id="playr${i}" style=""><i class="fa fa-play playpause${i} playy"></i></div><div class="hero-btn quality${i} stop" style="border: none ! important; background: #fff; padding: 15px; color: #000; margin-bottom: 40px; box-sizing: border-box;"></div><div class="shre${i} hero-btn" style="position:relative;width:75px;top:41px;align-items:center;left:100px" id="share"><center>Share</center></div><a href="https://ytmp3x.com/${id}"><div style="font-family: Arial, Verdana, Helvetica, Sans-Serif ! important;" class="hero-btn">Download MP3</div></a></div><ul class="links sosial${i} toggler"><a href="https://www.facebook.com/sharer/sharer.php?u=${share_url}/${titleRI}"e=${title}""><i class="fa fa-facebook fa-lg"></i></a> <a href="whatsapp://send?text=${share_text}"><i class="fab fa-whatsapp fa-lg"></i></a> <a href="http://twitter.com/share?text=${title}&url=https://perlxt.com/${titleRI}"><i class="fa fa-twitter fa-lg"></i></a> <a href="https://plus.google.com/share?url=https://perlxt.com/${titleRI}&text=${share_title}"><i class="fa fa-google-plus fa-lg"></i></a></ul><div class="dot-elastic ready${i} stop" style="margin: 0 0 5px 45%"></div><div id="audio${i}" > <audio id="player${i}" preload="none" controls> <source class="source${i}" src="https://www.youtube.com/watch?v=${id}" type="video/x-youtube"> </audio> </div><form> <div class="row"> <div class="col"><button type="button" class="btn btn-outline-success pull-right trimButton${i} stop" style="width: auto; height: 35px; font-weight: bold; font-size: 18px; margin: 0 70px 0 0;">TRIM</button> </div></div><div data-text="${text.trim()}" data-link="${rto}" class="trimmer${i} air"> <div class="row"> <div class="col"><span style="display: inline-block; margin:0 0 3px 68%; ">START</span><input type="text" class="form-control start${i}" style="width:34%; height:50px; margin-left: 65%;font-size: 20px;" placeholder="00:00"> </div><div class="col"> <span style="display: inline-block; margin:0 14em 3px 3%; ">END</span> <input type="text" style="width:34%;font-size: 20px; height: 50px" class="form-control end${i}" value="${time}" placeholder="00:00"> </div></div><select class="theme-pink" class="form-select form-select-sm" name="bitrates" id="bitrates${i}"> <option selected>Quality</option>    <option value="64">64kbps</option> <option value="128">128kbps</option> <option value="192">192kbps</option> <option value="256">256kbps</option> <option value="320">320kbps</option> </select><button type="button" style="width: auto; height: 35px; font-weight: bold; font-size: 18px; margin: 12px 0 3%" data-id="${id}" class="btn btn-outline-primary downloadButton${i}">DOWNLOAD<font class="trim_size"></font></button> </div></form> </div>`




}

   var title = query +" MP3 Free Download"
   var thumbnail = thmb[0];
   var description = title + ". Download "+  dsp[0].replace(/[(")-\/•~=¥€¢{|}[\]]/gi," ").replace(/ +/g," ") + " Free MP3 at 320kbps highest quality!";
   var keyword = query + ", MP3, Download, " + dsp[0];
   var titleRI = decodeURI(query).replace(/ +/g,"-");
   var randy = Math.random()
   var webx = context.request.url.split("/")[2]
    var obj = {webx: webx, "randy": randy, "query": decodeURIComponent(query),"title": decodeURIComponent(title), "ogTitle": decodeURIComponent(title), "thumbnail": thumbnail, "description": decodeURIComponent(description),"keywords": decodeURIComponent(keyword),"titleRI": decodeURIComponent(titleRI), "content": content}
  var html = temp(obj)
  
  
  return new Response(html, { headers : {"content-type": "text/html;charset-UTF=8"} });
}
}
