  async function ytsearch(query){

    try{
         var headers = {
             headers: 
               {
    
    "User-Agent":"Googlebot-Video"
    
    }         
     } 
          var base = "http://mp3paw.app/mp3-download/" + 1000000 + Math.floor(Math.random() * 900000) + "/"+ query;
          var f = await fetch(base, headers)
          var str = await f.text()
                
    var allTitle = str
                     .match(/<h3 title(.*?)<\/h3>/g)
                     .map(item => item.split('">')[1].split('</h3>')[0]);            
                    
     var scriptToJson =  str
                              .match(/<script src=(.*?)<\/script>/g)
                              .pop(-1)
                              .split('src="')[1]
                              .split('"')[0];
       var allIds =  str
                         .match(/data-media="(.*?)"/g)  
                         .map(item => item.split('data-media="')[1].split('"')[0])
                       
                        //  console.log(allIds.length)
                        //  console.log(allTitle.length)
                              
                              
         var d = await fetch(scriptToJson) 
         var testObj = await d.text()
                              
         testObj = JSON.parse(testObj   
                                      .split("('")
                                      .pop(1)
                                      .split("')")[0])
                                
      
        var keys = Object.keys(testObj); 
        var i=0;
        var items = []
        
    while(i<keys.length){
    
          var views = testObj[keys[i]].v
          var time = testObj[keys[i]].t
          var seconds = testObj[keys[i]].d
          items.push(
                  {
                    title: allTitle[i],
                    views: views.replace(/[^.\d\w]/g,""),
                    seconds: seconds,
                    time: time,
                    id: allIds[i]
                        
                  }
                  );
            i++    
    }
    
    return items
           
    
    
    
    }
    
    
    catch(err)
    
    {
    
     return err
    }
    
    
    
    
    
    
    }
    module.exports = ytsearch
    