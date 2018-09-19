window.hypothesisConfig = function () {
    return {
        onLayoutChange: function(layoutParams) {
            var Hwidth = layoutParams.width();
            // only triggers resizing actions if the main content has 400px of space after annotation pane is expanded
          if (body.width() - Hwidth > 400) {
            jQuery('#page').css('margin-right', Hwidth + 'px'); // sets margin-right to equal the width of the annotation pane
            jQuery('.nav-reading'.css('width', 'calc(100vw - ' + Hwidth + 'px'); // sets width of .nav-reading to viewport minus width of the annotation pane
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
