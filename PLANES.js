   
   $(document).ready(function()
   {
      $("a[href*='#portfolio']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#about').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#contact').offset().top }, 600, 'easeOutSine');
      });
      $("#SlideShow1").conveyerbelt({speed:3, spacing: 5});
   });
   