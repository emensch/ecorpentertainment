(function() {
    'use strict';

    $(document).ready(function() {
        $('#fullpage').fullpage({
            menu: '#menu',
            onLeave: onLeave,
            afterLoad: afterLoad,
            fitToSectionDelay: 100,
            normalScrollElements: '#messagetext'
        });

        $('#messagetext').focus(function() {
            console.log('hasfocus');
        });
    });

    function onLeave(index, nextIndex, direction) {
        var nav = $('#nav');
        var className = 'scrolled';

        if(nextIndex !== 1) {
            nav.addClass(className);
        } else {
            nav.removeClass(className);
        }
    }

    function afterLoad(anchorLink, index) {

    }
})();