/**
 * Created by JetBrains PhpStorm.
 * User: anke
 * Date: 12/03/13
 * Time: 22:38
 * Tracking url parameters
 */




try {
    if (window.location.search != null) {
        var cookie = '';
        var params = ['source','campaign'];
        for (var i = 0; i < params.length; i++){
            var srcPos = window.location.search.indexOf(params[i]);
            if (srcPos != -1) {
                var srcStr = window.location.search.substr(srcPos + params[i].length + 1);
                var srcAmpPos = srcStr.indexOf('&');
                var srcVal = srcAmpPos != -1 ? srcStr.substring(0, srcAmpPos) : srcStr;
                var now = new Date(); now.setDate(now.getDate() + 1);
                document.cookie = params[i] + '=' + escape(srcVal) + ';' + 'expires=' + now.toGMTString() + '; path=/;';
                
            }
        }
    }

    if (document.cookie != null){
        var cookiearray = document.cookie.split(';');
        var append = '';
        for(var i=0; i<cookiearray.length; i++){
            var name = cookiearray[i].split('=')[0]; while (name.charAt(0)==' ') name = name.substring(1,name.length);
            var value = unescape(cookiearray[i].split('=')[1]);
            if (name == 'source' || name == 'campaign') append = append + (append.length > 0 ? '&' : '') + name + '=' + value;
        }
        
        if (append.length > 0){
            var links = document.getElementsByTagName("a");
            for (var i = 0; i < links.length; i++){
                var dom = links[i];
                if (dom.href.indexOf('quitalacaquita.es') != -1) {
                    var ch = dom.href.indexOf('?') != -1 ? '&' : '?';
                    dom.href = dom.href + ch + append;
                }
            }
            var forms = document.getElementsByTagName("form");
            for (var i = 0; i < forms.length; i++){
                var dom = forms[i];
                if (dom.action.indexOf('quitalacaquita.es') != -1) {
                    var ch = dom.action.indexOf('?') != -1 ? '&' : '?';
                    dom.action = dom.action + ch + append;
                }
            }
        }
    }

} catch (e){}


