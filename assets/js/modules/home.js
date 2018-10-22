import Utils from "./utils";
import bxSlider from "bxslider/src/js/jquery.bxslider.js";

var Home = Home || {};
(function( $ ) {
    Home = {
        bootstrap : function(){            
            this.homeSlider();
            // this.ctaEvent();
            console.log('HOme module');
        },
        // ctaEvent: function(){
        //     $('#home-slider .cta-scroll-btn').click(function(e){
        //         e.preventDefault();                
        //         Utils.smoothScrollToElement($(this).attr('href'), 0);
        //     });
        //     // btn-contact-for-price
        //     $('.nav-item-contact .nav-link').click(function(e){
        //         e.preventDefault();
        //         Utils.smoothScrollToElement($(this).attr('href'), 0);
        //     })
        // },        
        // prefillFormContact: function($ele, form_id){
        //     let $form_message = $(form_id).find('[name="your-message"]');
        //     let message = '';
        //     message += 'Tôi muốn tìm hiểu thông tin về sản phẩm "' + $ele.attr('p-name') + '"\n';
        //     message += 'Mã sản phẩm : ' + $ele.attr('p-masanpham') + '\n';
        //     message += 'Link sản phẩm : ' + $ele.attr('p-link') + '\n';
        //     $form_message.val(message);
        //     Utils.smoothScrollToElement( form_id, 0);
        // },
        homeSlider: function(){
            var slider = $('#home-slider .bxslider').bxSlider({                           
                auto: true,
                /*slideMargin: 10,*/
                autoControls: false,
                controls : false,
                pager : false
            });              
        }
    }   
})(jQuery);

export default Home;