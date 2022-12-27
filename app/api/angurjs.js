
import {
    loadComp,
    loadCss,
    loadJs,
    removejscssfile,
    clearlink,
    loadJquery,
    load
} from '../module.js';

function init({selector, title, style, script}){
    document.title = title;
}

function setTemplate({selector, template}){
    var attr = template;
    clearlink("css");
    loadCss(attr)
    clearlink("js");
    loadJs(attr)
    var template_path = "components/" + attr + "/" + attr + ".html";
    load(selector, template_path)
}

function getValue(key){
    return window[key];
}

function setValue(key,value){
    window[key] = value;
}
export {init,setTemplate, getValue, setValue}