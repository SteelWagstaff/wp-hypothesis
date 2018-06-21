window.hypothesisConfig = function () {
    return {
        onLayoutChange: function(layoutParams) {
           // if the width of the browser minus the width of the hypothesis client is greater than 400 pixels, resize the html element.
          if ((document.body.clientWidth - layoutParams.width) > 400) {
            jQuery('html').css('width', '100%').css('width', '-=' + layoutParams.width + 'px');
            // Still need to account for placement of PB nav buttons
        }
    }
	}
}
