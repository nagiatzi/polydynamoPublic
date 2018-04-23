$(document).ready(function(){
     //   smoothscroll---------- code ------------------------------------------

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
     // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
      } // End if
    });

    //navbar  styles
    $(window).scroll(function() {
        var posi = $(window).scrollTop();
        if (posi > 300) {
          $("#mainNav").addClass("mainBack");
          $("#firstLogo").css({
            'width':'40px',
            'height':'40px'})
        } else {
          $("#mainNav").removeClass("mainBack");
          $("#firstLogo").css({
            'width':'60px',
            'height':'60px'});
         }
    });

    //scrollspy---------- code -------------------------------------------------
    $('body').scrollspy({ target: '.navbar' });

    $('#firstLogo').on("mouseover", function(){
        $(this).attr("src", "img/logoG.png");
        $(this).on("mouseout", function(){
          $(this).attr("src", "img/logoW.png");
        });
    });

    //Facilites mouseover---------- code ---------------------------------------
    $("img#toAlter").on("mouseover", function(){
        $(this).attr("src","img/classModern.jpg");
    });
    $("img#toAlter").on("mouseout", function(){
        $(this).attr("src","img/class2.jpg");
    });
    $("img#toAlter2").on("mouseover", function(){
        $(this).attr("src","img/faci2.jpg");
    });
    $("img#toAlter2").on("mouseout", function(){
        $(this).attr("src","img/faci.jpg");
    });
    $("img#toAlter3").on("mouseover", function(){
        $(this).attr("src","img/outdoor2.jpg");
    });
    $("img#toAlter3").on("mouseout", function(){
        $(this).attr("src","img/outdoor.jpg");
    });

    //slide animate---------- code ---------------------------------------------
    $(window).scroll(function() {
        $(".slidedown").each(function(){
          var pos = $(this).offset().top;

          var winTop = $(window).scrollTop();
          if (pos < winTop + 500 ) {
            $(this).addClass("slide");
//            console.log("flag", pos, winTop);
          }
        });
      });

      //change bg image to Form ection effect-----------------------------------
      $("#name").on("focus", function(){
        $("#outerForm").css({
          'background':"url('img/imgForm2.jpg')",
          'background-size':'cover',
          'background-attachment':'fixed',
          'background-repeat':'no-repeat'});
       }); //function change 1
       $("#email").on("focus", function(){
         $("#outerForm").css({
           'background':"url('img/imgForm1.jpg')",
           'background-size':'cover',
           'background-attachment':'fixed',
           'background-repeat':'no-repeat'});
        }); //function change 2
      $("#comments").on("focus", function(){
          $("#outerForm").css({
            'background':"url('img/imgForm3.jpg')",
            'background-size':'cover',
            'background-attachment':'fixed',
            'background-repeat':'no-repeat'});
         }); //function change 2
      var userName = $("#name").val();
      $("#subB").on("click", function(){
        console.log(userName);
        alert("Thank you " + userName + ", we will soon contact you, to answer your question. (or not because its just nagiatzi page ^_^) ");
      }) ;    //submit function

}); //document Ready
