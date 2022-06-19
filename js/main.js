const header2 = document.querySelector('.header-2');
const btnShow = document.querySelector('#search-btn');
const searchBox = document.querySelector('.search-btn');


this.onscroll = () =>{
    if(this.scrollY > 20){
        
        // console.log(header2);
        header2.classList.add('active');
    }else{
        header2.classList.remove('active');
    }
}
this.onload = () =>{
    if(this.scrollY > 20){
        
        // console.log(header2);
        header2.classList.add('active');
    }else{
        header2.classList.remove('active');
    }
}

btnShow.addEventListener('click',() =>{
    searchBox.classList.toggle('btn-show');
})



const loginFrom = document.querySelector('.login-form');
const closeBtn = document.querySelector('.close-icon');
const userBtn = document.querySelector('.fa-user');


userBtn.addEventListener('click',()=>{
    // alert();
    loginFrom.classList.add('login-show');
});
closeBtn.addEventListener('click',()=>{
    // alert();
    loginFrom.classList.remove('login-show');
});


// home swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
// 

// feature swiper

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

// arrrival swipper
var swiper = new Swiper(".arrival-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
  });
// 

// reviews

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });



//   
// loader
function loader(){
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut(){
    setTimeout(loader, 4000);
  }



  this.onload = ()=>{
    fadeOut();
  }

//   subscribe
const subscribe = document.querySelector('#subscribe');
subscribe.addEventListener('click',()=>{
    fadeOut();
})