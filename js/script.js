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

// shuttle part

$('.toTop').hide()

        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('.toTop').fadeIn()
            } else{
                $('.toTop').fadeOut()
            }
        })

        $('.toTop').click(function() {
            $("html, body").animate({scrollTop: 0}, 1000)
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

    // $('.gallery').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     gallery:{
    //     enabled: true
    //     }
    // })
})



// news modal part

// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })




// form validation part

$(document).ready(function() {
  $('.subBtn').click(function(e) {
    e.preventDefault()
    var name = $('#name')
    var email = $('#email')
    var message = $('#message')
    
    if ((name.val() == '') || (email.val() == '') || (message.val() == '')) {

      $('.empty_notice').show(1000)

      setInterval(() => {
        $('.empty_notice').hide(3000)
      }, 2000);

    }

    else{
        alert("Thank You I will contact soon")
    }

    $('#name').val('')
    $('#email').val('')
    $('#message').val('')
    
  })
  
})


// Color Switcher

document.querySelector('.switcher-btn').onclick = () => {
  document.querySelector('.color-switcher').classList.toggle('active')
}

let themeButtons = document.querySelectorAll('.theme-buttons')

themeButtons.forEach(colors => {
  colors.addEventListener('click', function() {
      let dataColor = colors.getAttribute('data-color')

      document.querySelector(':root').style.setProperty('--main-color', dataColor)

      var change = document.querySelectorAll('.changeColor')

      for (const changes of change) {
        changes.style.color = dataColor
      }
      // 

      // document.querySelector('h2').style.color = dataColor
  })
});

// magic mouse section


$(document).ready(function(){
  $(document).mousemove(function(e){
     setTimeout(() => {
      $('.pointerOutside').offset({left:e.pageX-17, top: e.pageY-17})
     }, 100);
     setTimeout(() => {
      $('.pointerCenter').offset({left:e.pageX-5, top: e.pageY-5})
     }, 70);
  })

  // $('html').mouseleave(function() {
  //     $('.pointerOutside').hide()
  //     $('.pointerCenter').hide()
  // })
  //
  // $('html').mouseenter(function() {
  //     $('.pointerOutside').show()
  //     $('.pointerCenter').show()
  // })

  $('.magic-cursor').hover(function(e) {
      // $('.pointerOutside').hide()
      // $('.pointerOutside').css({'display':'none'})
      $('.pointerOutside').css({'opacity':'0'})
      // $('.pointerCenter').css({'background':'transparent'})
      // $('.pointerCenter').css({'display':'none'})
      $('.pointerCenter').css({'opacity':'0.3'})
      $('.overlay').addClass('on');
  })

  $('.magic-cursor').mouseleave(function() {
    $('.pointerOutside').css({'opacity':'1'})
      // $('.pointerCenter').css({'background':'#A13838'})
      $('.pointerCenter').css({'opacity':'1'})
      // $('.pointerCenter').css({'display':'block'})
      $('.pointerOutside').show()
      $('.overlay').removeClass('on');
  })





  // hide show

  $('.circleMouse').click(function() {
    $('.pointerOutside').show()
    $('.pointerCenter').show()
    $('.overlay').show();

          $('.magic-cursor').hover(function(e) {
              // $('.pointerOutside').hide()
              $('.pointerOutside').css({'opacity':'0'})
              // $('.pointerCenter').css({'background':'transparent'})
              $('.pointerCenter').css({'opacity':'0.3'})
              $('.overlay').addClass('on');
          })

        $('.magic-cursor').mouseleave(function() {
          $('.pointerOutside').css({'opacity':'1'})
            // $('.pointerCenter').css({'background':'#A13838'})
            // $('.pointerCenter').css({'display':'block'})
            $('.pointerCenter').css({'opacity':'1'})
            $('.pointerOutside').show()
            $('.overlay').removeClass('on');
        })

        // $('html').mouseleave(function() {
        //     $('.pointerOutside').hide()
        //     $('.pointerCenter').hide()
        // })

        // $('html').mouseenter(function() {
        //     $('.pointerOutside').show()
        //     $('.pointerCenter').show()
        // })

  })

//

  $('.defaultMouse').click(function() {
    $('.pointerOutside').hide();
    $('.pointerCenter').hide();
    $('.overlay').hide();
    // $('.pointerOutside').css({'display':'none'})
    $('.pointerCenter').css({'display':'none'})
    // $('.overlay').css({'display':'none'})

      $('.magic-cursor').mouseleave(function() {
          $('.pointerCenter').css({'background':'transparen'})
          $('.pointerOutside').hide()
          $('.overlay').removeClass('on');
      })

      // $('html').mouseleave(function() {
      //     $('.pointerOutside').hide()
      //     $('.pointerCenter').hide()
      // })

})
})


// loader part
setTimeout(() => {
  $('.loader_bg').fadeToggle()
}, 1500);

// End