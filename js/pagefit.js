window.hypothesisConfig = function () {
    return {
        onLayoutChange: function(layoutParams) {
            var Hwidth = layoutParams.width();
          if (body.width() - Hwidth > 400) {
            jQuery("#page").css("margin-right", "calc(100%-' + Hwidth + 'px)");
            }
          }
        }
}
/* Jon Udell's method for resizing pages
    function adjust(e) {
      var eWidth = parseInt(window.getComputedStyle(e)['width'].replace('px',''));
      var bodyWidth = window.innerWidth;
      var diff = bodyWidth - eWidth;
      var marginLeft = window.getComputedStyle(e)['margin-left'];
      var adjustment = 400;
      if ( diff < adjustment ) {
        var adjusted = (eWidth-(adjustment-diff)) + 'px';
    	  e.style.width = adjusted;
    	  e.style.marginLeft = marginLeft;
      }
    }

    function adjustAll() {
      document.querySelectorAll('*').forEach(e => adjust(e) );
    }
    adjustAll();
