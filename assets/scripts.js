jQuery( document ).ready(function($){
  // Smoooooth scrolling
  $('.smooth-scroll').click(function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 80
    }, 500);
    return false;
  });
});
