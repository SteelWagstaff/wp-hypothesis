window.hypothesisConfig = function () {
    return {
        onLayoutChange: function(layoutParams) {
           // if the width of the browser minus the width of the hypothesis client is greater than 400 pixels, resize the html element.
          if ((document.body.clientWidth - layoutParams.width) > 400) {
            jQuery('#page').css('margin-right', 'calc(100-' + layoutParams.width + 'px');
        }
    }
	}
}
