(function () {
    "use strict";
    var winHeight,
        bodyHeight,
        footerHeight,
        topFooter,
        checkFooter;
    checkFooter = function () {
        winHeight = window.innerHeight;
        bodyHeight = document.getElementsByTagName('html')[0].offsetHeight;
        footerHeight = document.getElementById('footer').offsetHeight;
        if (bodyHeight < winHeight) {
            topFooter = (winHeight - bodyHeight);
            document.getElementById('footer').style.top = topFooter + 'px';
        }
    };
    jQuery(window).ready(function () {
        new WOW().init();
        $('.materialboxed').materialbox();
        checkFooter();
    });

    jQuery(window).resize(function () {
        checkFooter();
    });

})();