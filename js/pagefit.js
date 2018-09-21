window.hypothesisConfig = function () {
    return {
        onLayoutChange: function (layoutParams) {
            var Hwidth = layoutParams.width;
            var browserWidth = document.body.clientWidth;
            // resize only if browser width minus annotation pane is greater than 400 pixels
            if (browserWidth - Hwidth > 400) {
                jQuery('#page').css('margin-right', Hwidth + 'px'); // sets right margin of page element to width of the annotation pane
                jQuery('.nav-reading').css('width', 'calc(100vw - ' + Hwidth + 'px'); // sets width of .nav-reading to viewport minus width of the annotation pane
            }
        }
    };
};
