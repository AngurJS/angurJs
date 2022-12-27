import {components_list} from '../components/components.js';

function loadJquery(view){
    var script = document.createElement("script");
    script.src = "app/api/jquery-3.6.1.js"; 
    document.head.appendChild(script);
}

function loadJs(view){
    var script = document.createElement("script");
    script.type = "module"; 
    script.src = "components/"+view+"/"+view+".js"; 
    document.body.appendChild(script);
}

function loadCss(view){
    var style = document.createElement("link");
    style.href = "components/"+view+"/"+view+".css"; 
    style.rel = "stylesheet"; 
    document.head.appendChild(style);
}

function loadComp(){
    var script = document.createElement("script");
    script.src = "components/loadComp.js"; 
    document.body.appendChild(script);
}

function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}

function clearlink(type){
    components_list.forEach(function(data){
        removejscssfile("components/"+data.name+"/"+data.name+"."+type+"",type);
     });
}

function load(selector,template){
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.querySelector(selector).innerHTML = this.response;
    };
    xhr.open('GET', template, true);
    xhr.send();
}
export {loadComp,loadCss,loadJs, removejscssfile, clearlink,loadJquery,load};