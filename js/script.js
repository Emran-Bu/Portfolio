// jquery for nav button

$(document).ready(function() {

    let j = 0;
    $('.navIcon').click(function(){
      if(j%2==0){
        $('.menuBg').slideDown();
        j++;
      }else{
        $('.menuBg').slideUp();
        j++;
      }
    });

})


// script for close nav btn

let i = 0;
document.querySelector('.navIcon').addEventListener('click', function() {
    
    if (i%2==0) {
        document.querySelector('.nav1').classList.add('anim1')
        document.querySelector('.nav2').classList.add('anim2')
        document.querySelector('.nav3').classList.add('anim3')
        i++
    } else{
        document.querySelector('.nav1').classList.remove('anim1')
        document.querySelector('.nav2').classList.remove('anim2')
        document.querySelector('.nav3').classList.remove('anim3')
        i++
    }

})


// script for tooltips

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// script for typewriter

$("#example").typer({
  strings: [
      "I am Emran Hasan",
      "I am a Web Designer",
      "I am a Web Developer"
  ],

      typeSpeed: 60,
      backspaceSpeed: 20,
      backspaceDelay: 800,
      repeatDelay: 1000,
      repeat: true,
      autoStart: true,
      startDelay: 100,
      useCursor:true

  });

  //Script for water Plugin 

  $(document).ready(function() {
    // $('section').ripples();
    $('.mainBgImg').ripples({
        dropRadius: 12,
        perturbance: 0.05,
    });
})

// my image animation

$('body').mousemove(function(e) {
  
  var moveX = (e.pageX * 1 /120) 
  var moveY = (e.pageY * 1 / 120) 
  $('.img1').css('margin', moveX + 'px ' + moveY + 'px')
  $('.myBorder').css('margin', - moveX + 'px ' + - moveY + 'px')

})

// script for typewriter right section

$("#example2").typer({
  strings: [
      "Freelancer",
      "Web Designer",
      "Web Developer"
  ],

      typeSpeed: 60,
      backspaceSpeed: 20,
      backspaceDelay: 800,
      repeatDelay: 1000,
      repeat: true,
      autoStart: true,
      startDelay: 100,
      useCursor:true

  });

  // wow plugin

  new WOW().init();

  // filter option

  $(document).ready(function() {
    $('.filterBtn').click(function() {
        $(this).addClass('active').siblings().removeClass('active')

        let filter = $(this).attr('data-filter')

        if (filter == 'all') {
            $('.image').show(400)
        } else{
            $('.image').not('.'+filter).hide(200)
            $('.image').filter('.'+filter).show(400)
        }
    })

    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
        enabled: true
        }
    })
})


// jquery counter up part


