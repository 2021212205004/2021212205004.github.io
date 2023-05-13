$(document).ready(function(){

     $(window).resize(function(){				        
      if( $(window).width() >640 ) {		         
          $(".phone>li").css('visibility','visible');
          $(".phone>li").show();
      }else{
          $(".phone>li").hide();
            $(".phone>li").css('visibility','hidden');
        }
    });

    const elements = document.querySelectorAll('.title');
    const lists = document.querySelectorAll('.end-list');
    lists.forEach(function(list) {
        list.classList.remove('active');
        list.classList.add('hidden');
    });

    elements.forEach(function(element, index) {
    element.addEventListener('click', function() {
      const isActive = lists[index].classList.contains('active');
      lists.forEach(function(list) {
            list.classList.remove('active');
            list.classList.add('hidden');
      });
      if (!isActive) {
        lists[index].classList.remove('hidden');
        lists[index].classList.add('active');
      }
    });
  });

});