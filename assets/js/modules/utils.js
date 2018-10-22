var Utils = Utils || {};
(function( $ ) {
    Utils = {
        smoothScrollToElement: function (selector, pos_buffer) {
            let $el = $(selector);
            let scroll = $el.offset().top - $('#topnav').outerHeight() + 10; // topbar sticky
            let scroll_buffer = 0;
            if($('#wpadminbar').length > 0 ){
                scroll_buffer = - $('#wpadminbar').outerHeight();
            }
            scroll += scroll_buffer;
            if(typeof pos_buffer != "undefined"){
                scroll += parseInt(pos_buffer);
            }
            if ($el.length > 0) {
                $('html, body').stop()
                    .animate({scrollTop: scroll}, 500, function () {
                        //$(this).find($el).focus();
                    });
            }
        },
        translateY: function($ele, y){
            $ele.css('-moz-transform',"translateY(" +  y + ")");
            $ele.css('-ms-transform',"translateY(" +  y + ")");
            $ele.css('-webkit-transform',"translateY(" +  y + ")");
            $ele.css('transform',"translateY(" +  y + ")");
        },
        getScreenSize: function() {
            return window.screen.availWidth;
        }
    }   
})(jQuery);

export default Utils;