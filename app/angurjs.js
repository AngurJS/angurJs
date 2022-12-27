import {
    loadComp,
    loadCss,
    loadJs,
    removejscssfile,
    clearlink,
    loadJquery,
    load
} from './module.js';


const cookies = document.cookie.split(";");

for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

if (window.location.hash.length === 0 || window.location.hash === "#home" || window.location.hash === "" || window.location.hash === "#") {
    clearlink("css");
    loadCss("app")
    clearlink("js");
    loadJs("app")
    load("#root", "components/app/app.html")
} else {
    var route = window.location.hash.replace("#", "");
    clearlink("css");
    loadCss(route)
    clearlink("js");
    loadJs(route)
    load("#root", "components/" + route + "/" + route + ".html")
}


try {
    var elem = document.querySelector('[template]'),
        attrs = elem.attributes;
    Array.prototype.slice.call(attrs).forEach(
        function (cur) {
            var attr = cur.value;
            clearlink("css");
            loadCss(attr)
            clearlink("js");
            loadJs(attr)
            var template_path = "components/" + attr + "/" + attr + ".html";
            load("[template=" + attr + "]", template_path)
        }
    )
} catch (error) {

}
try {
    
document.querySelector("[go]").addEventListener('click', function (e) {
    var attr = e.target.getAttribute('go')
    clearlink("css");
    loadCss(attr)
    clearlink("js");
    loadJs(attr)
    var path = "components/" + attr + "/" + attr + ".html";
    window.location.hash = attr
    load("#root", path)
});
} catch (error) {
    
}