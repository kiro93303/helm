
var dig = {
    exit: true,
}

// Back Button 
function bcck(url) {
    history.replaceState(null, document.title, location.pathname+"#!/history");
    history.pushState(null, document.title, location.pathname);
    
    window.addEventListener("popstate", function() {
      if(location.hash === "#!/history") {
        history.replaceState(null, document.title, location.pathname);
        setTimeout(function(){
          location.replace("https://"+url);
        },0);
      }
    }, false);
}

// Multi Clicker
function mlti(main, list) {

    list.forEach(u => {
        window.open("https://"+u, "_blank");
    });

    setTimeout(chnr(main, 0), 2000)
}


function chnr(url, type) {
    alert('')
    if (type == 0) {
        window.onbeforeunload = null;
        document.location.assign("https://"+url);
    } else {
        window.open("https://"+url, "_blank");
    }
}


// Exit Blocker
function exti() {

    
    function ExitPop() {
        if (dig.exit != false) {
            return "TEXT";
        }
    }
    window.onbeforeunload = ExitPop;


}