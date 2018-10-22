var Menu = Menu || {};
(function( $ ) {
    Menu = {
        bootstrap : function(){   
            this.menuHandle();            
        },
        menuHandle: function(){            
            this.windowScroll();
        },
        windowScroll: function(){
            $(window).scroll(function () {
                let scrollTop = $(window).scrollTop();
                if(scrollTop > 0){                    
                    $('#topnav').addClass('sticky');            
                }else{
                    $('#topnav').removeClass('sticky');
                }
            });
        }        
    }   
})(jQuery);

export default Menu;
    