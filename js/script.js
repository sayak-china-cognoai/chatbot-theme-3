// var botImage = document.getElementById("allincall-popup");

// botImage.addEventListener("click", function() {
//     // document.getElementById("allincall-popup").style.display = "none";
//     document.getElementById("easychat-bot-close-button").style.display = "block";
//     $("#allincall-chat-box").addClass("animate__animated animate__slideInUp");




// });

$("#allincall-popup").click(function() {

    fadeIn();
    fadeAway();
    


    document.getElementById("easychat-bot-minimize-button").style.display = "block";
    $("#allincall-chat-box").removeClass("animate__animated animate__slideOutDown");
    $("#allincall-chat-box").addClass("animate__animated animate__slideInUp");
    document.getElementById("allincall-chat-box").style.display = "block";
    document.getElementById("allincall-popup").style.display = "none";
    handleHomePageBanner();
});
$("#easychat-bot-minimize-button").click(function() {

    document.getElementById("easychat-bot-minimize-button").style.display = "none";
    $("#allincall-chat-box").removeClass("animate__animated animate__slideInUp");
    $("#allincall-chat-box").addClass("animate__animated animate__slideOutDown");
    setTimeout(function() {
        document.getElementById("allincall-popup").style.display = "block";
    }, 1000);
});

$("#easychat-bot-close-icon").click(function() {

    document.getElementById("easychat-bot-minimize-button").style.display = "none";
    $("#allincall-chat-box").removeClass("animate__animated animate__slideInUp");
    $("#allincall-chat-box").addClass("animate__animated animate__slideOutDown");
    setTimeout(function() {
        document.getElementById("allincall-popup").style.display = "block";
    }, 1000);
});

$('#user_input').on('input', function() {
    document.getElementById("easychat-query-send-icon").style.display = "block";
    document.getElementById("easychat-mic-icon").style.display = "none";
    document.getElementById("user_input_placeholder_text").style.visibility = "hidden";
    if ($('#user_input').text() == "") {

        document.getElementById("easychat-query-send-icon").style.display = "none";
        document.getElementById("easychat-mic-icon").style.display = "block";
        document.getElementById("user_input_placeholder_text").style.visibility = "visible";
    }

});


$(".easychat-recommendation-item").click(function() {
    $(".easychat-bot-recommendation-wrapper").css("display", "none");
    $(".easychat-bot-welcome-banner-wrapper").css("display", "none");
    $(".easychat-bottheme3-navbar").removeClass("easychat-welcome-home-navbar-div");
    $("#allincall-chat-box").css("backgroundColor", "#ffffff")
    $(".easychat-bot-message-wrapper").css("display", "flex");
    $(".easychat-user-message-wrapper").css("display", "flex");
    $(".easychat-bot-quick-recommendation-wrapper").css("display", "flex");
    $(".easychat-bottheme3-message-section-area-div").css("padding", "16px");



});


// WELCOME BANNER CAROUSEL JAVASCRIPT
function handleHomePageBanner() {
    var track=document.querySelector('.easychat-carousel-track');
    var slides=Array.from(track.children);

    if (!slides) {
        slides = (function () {
          var toStr = Object.prototype.toString;
          var isCallable = function (fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
          };
          var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) { return 0; }
            if (number === 0 || !isFinite(number)) { return number; }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
          };
          var maxSafeInteger = Math.pow(2, 53) - 1;
          var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
          };
      
          // The length property of the from method is 1.
          return function from(arrayLike/*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;
      
            // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike);
      
            // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) {
              throw new TypeError("slides requires an array-like object - not null or undefined");
            }
      
            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
              // 5. else
              // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
              if (!isCallable(mapFn)) {
                throw new TypeError('slides: when provided, the second argument must be a function');
              }
      
              // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
              if (arguments.length > 2) {
                T = arguments[2];
              }
            }
      
            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);
      
            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);
      
            // 16. Let k be 0.
            var k = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while (k < len) {
              kValue = items[k];
              if (mapFn) {
                A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
              } else {
                A[k] = kValue;
              }
              k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
          };
        }());
      }
 
    var dotsNav=document.querySelector(".easychat-carousel-nav");
    var dots=Array.from(dotsNav.children);
    if (!dots) {
        dots = (function () {
          var toStr = Object.prototype.toString;
          var isCallable = function (fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
          };
          var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) { return 0; }
            if (number === 0 || !isFinite(number)) { return number; }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
          };
          var maxSafeInteger = Math.pow(2, 53) - 1;
          var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
          };
      
          // The length property of the from method is 1.
          return function from(arrayLike/*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;
      
            // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike);
      
            // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) {
              throw new TypeError("dots requires an array-like object - not null or undefined");
            }
      
            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
              // 5. else
              // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
              if (!isCallable(mapFn)) {
                throw new TypeError('dots: when provided, the second argument must be a function');
              }
      
              // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
              if (arguments.length > 2) {
                T = arguments[2];
              }
            }
      
            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);
      
            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);
      
            // 16. Let k be 0.
            var k = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while (k < len) {
              kValue = items[k];
              if (mapFn) {
                A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
              } else {
                A[k] = kValue;
              }
              k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
          };
        }());
      }
    var slideWidth=slides[0].getBoundingClientRect().width;

    // arranging slides next to one another

    slides.forEach(function(slide,index){
        slide.style.left=(slideWidth+24)*index+'px';
    })

    // Handling indicator click
    dotsNav.addEventListener('click',function(e){
        var targetDot=e.target.closest('button');
        
        if(!targetDot)return;

        var currentSlide=track.querySelector('.easychat-current-slide');
        var currentDot=dotsNav.querySelector('.active-slide-indicator');

        var targetIndex=dots.findIndex(function(dot){
            return dot===targetDot;
        })
        var targetSlide=slides[targetIndex];

        moveToSlide(track,currentSlide,targetSlide);

        updateDots(currentDot,targetDot);
    })
    //automatic carousel movement 
    setInterval(function(){
        var currentSlide=track.querySelector('.easychat-current-slide');
        var currentDot=dotsNav.querySelector('.active-slide-indicator');
        var nextSlide;
        var nextDot;
        if(currentSlide.nextElementSibling)
        {
            nextSlide=currentSlide.nextElementSibling;
            nextDot=currentDot.nextElementSibling;
        }
        else
        {
            nextSlide=currentSlide.parentElement.firstElementChild;
            nextDot=currentDot.parentElement.firstElementChild;
        }
        
        
        updateDots(currentDot,nextDot);
        moveToSlide(track,currentSlide,nextSlide);
    }, 3000);

    function moveToSlide(track,currentSlide,targetSlide){
        track.style.transform="translateX(-"+targetSlide.style.left +")";
        currentSlide.classList.remove("easychat-current-slide");
        targetSlide.classList.add("easychat-current-slide");
    }
    function updateDots(currentDot,targetDot){
        currentDot.classList.remove('active-slide-indicator');
        targetDot.classList.add('active-slide-indicator');
    }


    track.addEventListener('touchstart', handleTouchStart, false);        
    track.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;                                                        
    var yDown = null;

    function getTouches(evt) {
    return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }                                                     
                                                                            
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                
                                                                            
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
                                                                            
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* right swipe */
                var currentSlide=track.querySelector('.easychat-current-slide');
                var currentDot=dotsNav.querySelector('.active-slide-indicator');
                var nextSlide;
                var nextDot;
                if(currentSlide.nextElementSibling)
                {
                    nextSlide=currentSlide.nextElementSibling;
                    nextDot=currentDot.nextElementSibling;

                    updateDots(currentDot,nextDot);
                    moveToSlide(track,currentSlide,nextSlide);
                } 
            } 
            else {
                /* left swipe */
                var currentSlide=track.querySelector('.easychat-current-slide');
                var currentDot=dotsNav.querySelector('.active-slide-indicator');
                var previousSlide;
                var previousDot;
                if(currentSlide.previousElementSibling)
                {
                    previousSlide=currentSlide.previousElementSibling;
                    previousDot=currentDot.previousElementSibling;

                    updateDots(currentDot,previousDot);
                    moveToSlide(track,currentSlide,previousSlide);
                }
            }                       
        } 
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };
}


// LANGUAGE JAVASCRIPT


const language_dropdownTrigger = $('.easychat-bot-language-div');
const language_dropdown = $('#language_dropdown_content');
const language_dropdownItem = $('.dropdown-item');
function isDropdownActive(){
    if($('#language_dropdown_content').hasClass('is-active')){
        $('.bot-selected-language-animation-text').css({ color: "#0254D7" });
        $('.minimize-icon-language svg').css({transform: "rotate(180deg)"});
        $('.bot-language-icon svg').css({fill: "#0254D7"});
        $('.minimize-icon-language').css({display: "block"});//CHANGES
    }
    else
    {
        $('.bot-selected-language-animation-text').css({ color: "#000" });
        $('.minimize-icon-language svg').css({transform: "rotate(0deg)"});
        $('.bot-language-icon svg').css({fill: "#2D2D2D"});
    }
}
language_dropdownTrigger.on('click', function(event) {
    event.stopPropagation();
    $(this).addClass('easychat-bot-language-div-active');
    $(".bot-selected-language-animation-text").show('slow');
    $(this).closest('.easychat-bot-language-div').find('#language_dropdown_content').toggleClass('is-active');

    isDropdownActive();
  
});
$('.language-dropdown-items').on('click',function(event){
    event.stopPropagation();
    $(this).find('.active-language').removeClass('active-language');
    $(event.target).addClass('active-language');
    $('#language_dropdown_content').toggleClass('is-active');
    $('.bot-selected-language-animation-text').text($(event.target).text());
    isDropdownActive();

   fadeAway();
})
$('#allincall-chat-box').on('click',function(){
    $('#language_dropdown_content').removeClass('is-active');
    isDropdownActive();

   fadeAway();
})
// $('#user_input').on('click',function(){
//     $(language_dropdownTrigger).removeClass('easychat-bot-language-div-active');
//     $(".bot-selected-language-animation-text").hide('slow');
//     $('.minimize-icon-language').css({display: "none"});//CHANGES
// })



function fadeIn(){
    setTimeout(function() {
         
        $('.easychat-bot-language-div').addClass('easychat-bot-language-div-active');
        $(".bot-selected-language-animation-text").show('slow');
        $('.minimize-icon-language').css({display: "block"});
        }, 1000);
}

function fadeAway(){
   setTimeout(function() {

        $('.easychat-bot-language-div').removeClass('easychat-bot-language-div-active');
        $('.minimize-icon-language').css({display: "none"});
        $(".bot-selected-language-animation-text").hide('slow');

    }, 2000);
}