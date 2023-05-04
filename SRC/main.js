
$(document).ready(function(){

    jQuery('.work-img').hover(
        function(){
            $(this).find('.work-img-hover').fadeIn();
        },
        function(){
            $(this).find('.work-img-hover').fadeOut();
        }
    );

    jQuery('.gallery-elem').hover(
        function(){
            $(this).find('.cover-item').fadeIn();
        },
        function(){
            $(this).find('.cover-item').fadeOut();
        }
    );

    jQuery('.client-foto-small').click(function() {
        let id = $(this).attr('data-img');
        content = $('.js-content[data-img="'+ id +'"]');
        $('.client-foto-small.active-feedback-tab').removeClass('active-feedback-tab');
        $(this).addClass('active-feedback-tab');
        $('.js-content').removeClass('active-feedback-block');
        content.addClass('active-feedback-block');
   });

   let sizer = '.sizer1';
   let container = $('.gallery-images');
   container.imagesLoaded(function(){
       container.masonry({
           itemSelector: '.gallery-image',
           columnWidth: sizer,
           gutter: 12,
           gridRowGap: 12,
       });
   });

});

