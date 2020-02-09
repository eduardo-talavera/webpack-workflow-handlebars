

  const alertaCookies = () => {
    
    $.cookieCuttr({
        // cookieResetButton: true,
        cookieWhatAreLink:false
        // cookieDeclineButton: true,
    });


    if (jQuery.cookie('cc_cookie_accept') == "cc_cookie_accept") {
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
            _gaq.push(['_trackPageview']);
      
            (function() {
              var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
              ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
              var s = document. getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
      }

    if (jQuery.cookie('cc_cookie_decline') == "cc_cookie_decline") {
      // do nothing
        } else {
          var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
          _gaq.push(['_trackPageview']);
        
          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document. getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        }
}

export default alertaCookies;