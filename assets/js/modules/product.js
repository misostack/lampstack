import Utils from "./utils";
import Cart from "./cart";

var Product = Product || {};
(function( $ ) {
    Product = {
        bootstrap : function(){
            this.ctaEvent();
            Cart.bootstrap();
        },
        ctaEvent: function(){
            $('.btn-contact-for-price').click(function(e){
                e.preventDefault();
                Product.prefillFormContact($(this), $(this).attr('href'));                
            });
            $('.btn-add-to-cart').click(function(e){
                e.preventDefault();
                let pid = $(this).attr('pid');
                let quantity = 1;
                if($(this).siblings('[name="quantity"]').length > 0){
                    quantity = $(this).siblings('[name="quantity"]').val();
                    quantity = parseInt(quantity);
                }
                if(quantity > 0){
                    let response = Cart.insertItem(parseInt(pid), quantity);
                }
            });      
        },        
        prefillFormContact: function($ele, form_id){
            let $form_message = $(form_id).find('[name="your-message"]');
            let message = '';
            message += 'Tôi muốn tìm hiểu thông tin về sản phẩm "' + $ele.attr('p-name') + '"\n';
            message += 'Mã sản phẩm : ' + $ele.attr('p-masanpham') + '\n';
            message += 'Link sản phẩm : ' + $ele.attr('p-link') + '\n';
            $form_message.val(message);
            Utils.smoothScrollToElement( form_id, 0);
        },        
    }   
})(jQuery);

export default Product;