import $ from 'jquery';
import 'bootstrap';
import Navbar from "./modules/navbar";
import Home from "./modules/home";
// // import Product from "./modules/product";


let Site = Site || {};

(function ($) {

    Site = {
        //properites
        init: function(){
            this.scrollEvent();
            this.resizeEvent();
        },
        bootstrap: function () {
            this.init();                                
            // others
            Navbar.bootstrap();
            Home.bootstrap();
            // Product.bootstrap();
        },            
        scrollEvent: function () {
            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();       
            })
        },
        resizeEvent: function (){
            $(window).resize(() => {
                
            });
        },
    };
})(jQuery);

$(document).ready(() => {
   Site.bootstrap();
});
