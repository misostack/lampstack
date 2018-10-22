var Navbar = Navbar || {};
(function( $ ) {
    Navbar = {
        bootstrap : function(){            
           this.toggleNav();
        },
        toggleNav: function(){
            $('.navbar-toggle').click(function(e){
                e.preventDefault();
                $(this).toggleClass('clicked');
            })
        }
    }   
})(jQuery);

export default Navbar;