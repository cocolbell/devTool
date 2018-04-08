function jsonp (opt) {

    typeof opt.url == 'undefined' || 
    typeof opt.callback == 'undefined' &&
    console.warn('param url and callback is required');

    var cbname = new Date().getTime();
    
    var script = document.createElement('script');
    script.src = opt.url + "?callback=" + cbname;
    script.type = 'text/javascript';
    
    window[cbname] = function (data) {
        typeof opt.callback == 'function' && 
        opt.callback(data);
        document.body.removeChild(script);
    };

    document.body.appendChild(script);
}