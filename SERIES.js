   
   $(document).ready(function()
   {
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#about').offset().top }, 600, 'easeOutSine');
      });
   });
   