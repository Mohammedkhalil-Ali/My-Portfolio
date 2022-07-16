<template>
    <header class="w-100vw h-[15vh] relative lg:relative top-0 bg-[#12141D] text-white overflow-hidden"  id="home">
        <div class="logo h-[15vh] w-[100vw] flex justify-between items-center">
            <p class="w-5/6 md:w-4/6 pl-8 text-xl font-mono">Mohammed<span class="text-red-500">Khalil</span></p>
        <nav class="text-white text-xl font-mono 
        ">
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[15vh]
                        p-[50px]
                        hover:bg-[#171923]
                        cursor-pointer
                        "
                        id="home"
                        :class="isactive=='home'?'text-red-500':''"
                        @click="isactiveRoute('home')"
                        >Home</p>
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[15vh]
                        p-[50px]
                        hover:bg-[#171923]
                        cursor-pointer
                        "
                        id="skills"
                        :class="isactive=='skills'?'text-red-500':''"
                        @click="isactiveRoute('skills')"
                        >Skills</p>
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[15vh]
                        p-[50px]
                        hover:bg-[#171923]
                        cursor-pointer
                        "
                        :class="isactive=='project'?'text-red-500':''"
                        @click="isactiveRoute('project')"
                        >Project</p>
                        
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[15vh]
                        p-[50px]
                        hover:bg-[#171923]
                        cursor-pointer
                        "
                        :class="isactive=='about'?'text-red-500':''"
                        @click="isactiveRoute('about')"
                        >About</p>

        </nav>
            <div class="hamburger visible  lg:invisible pr-8" @click="show = !show">
                <div class="hamburger-1" id="hamburger" 
                    :class="{ 'is-active': show }"
                >
                    <span class="line"
                    ></span>
                    <span class="line"
                    ></span>
                    <span class="line"
                    ></span>
                </div>
            </div>
        </div>
    </header>

    <nav class="text-white text-xl fixed top-[15vh] w-full lg:invisible bg-[#12141D] overflow-hidden transition-all duration-500 "
        :class="show?'visible h-[85vh]':'invisible h-0'"
                >
            <p   class="
                        hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        "
                        :class="isactive=='home'?'text-red-500':''"
                        @click="isactiveRoute('home')"
                        >Home</p>
            <p   class="
                        hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        "
                        :class="isactive=='skills'?'text-red-500':''"
                        @click="isactiveRoute('skills')"
                        >Skills</p>
            <p   class="
                        hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        "
                        :class="isactive=='project'?'text-red-500':''"
                        @click="isactiveRoute('project')"
                        >Project</p>
            <p   class="
                        hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        "
                        
                        :class="isactive=='about'?'text-red-500':''"
                        @click="isactiveRoute('about')"
                        >About</p>
        </nav>

        <div class="aboutme md:flex md:h-[85vh] items-center justify-between w-full py-4 md:p-0" >
            <div class="py-8 md:p-0 w-full md:ml-10"
            data-aos="fade-right"
            >
                <p class="text-xl text-center w-full md:text-3xl text-slate-400 font-light">Hello, my name is <span class="text-red-500">Mohammed Khalil</span> <br> and i am a <span class="text-slate-600">FullStack developer</span>  <br> Wellcome to my <span class="text-red-500">Portfolio</span></p>
            </div>
            <div class=" rounded-full py-8 md:p-0"
            >
                    <img src="../../public/static/images/me.jpg" alt="" srcset="" class="h-[70%] w-[70%] sm:h-[50%] sm:w-[50%] m-auto md:m-0 md:w-[60%] md:h-[70%] lg:w-[50%] lg:h-[70%] md:mr-10 md:float-right rounded-full">
            </div>
        </div>
<div class="bg-[#16181d] w-full"

>
    <p class="flex justify-center text-7xl text-red-700 py-5" id="skills">SKills</p>

        <div class="pt-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center grid-rows-4 ">
            <div class="cursor-pointer border border-[#16181d] rounded-md hover:border-red-600 p-5 w-52 flex items-center justify-center"
            data-aos="fade-down"
    >
                <div>
                  <i class="fa-brands fa-html5 text-red-700 text-9xl p-1 "></i>
                <p class="text-white text-center">HTML</p>
                </div>
            </div>
            <div class="cursor-pointer border border-[#16181d] rounded-md hover:border-blue-600 p-5  w-52 flex items-center justify-center"
            data-aos="fade-down"
    >
                <div>
                  <i class="fa-brands fa-css3 text-blue-700 text-9xl p-1"></i>
                <p class="text-white text-center">CSS</p>
                </div>
            </div>
            <div class="cursor-pointer border border-[#16181d] rounded-md hover:border-purple-600 p-5  w-52 flex items-center justify-center"
            data-aos="fade-down"
    >
                <div>
                  <i class="fa-brands fa-bootstrap text-purple-700 text-9xl p-1"></i>
                <p class="text-white text-center">Bootstrap</p>
                </div>
            </div>
            <div class="cursor-pointer border border-[#16181d] rounded-md hover:border-sky-600 p-5  w-52 flex items-center justify-center"
            data-aos="fade-down"
    >
                <div>
                  <img src="../../public/static/images/Tailwind.png" alt="" srcset="" class="w-28">
                <p class="text-white text-center">Tailwind</p>
                </div>
            </div>
            <div class="cursor-pointer border border-[#16181d] rounded-md hover:border-yellow-400 p-5  w-52 flex items-center justify-center"
            data-aos="fade-down">

                <div>
                  <i class="fa-brands fa-js text-yellow-500 text-9xl p-1"></i>
                <p class="text-white text-center">JS</p>
                </div>
            </div>
            <div class="cursor-pointer border border-[#16181d] rounded-md hover:border-green-700 p-5  w-52 flex items-center justify-center"
            data-aos="fade-down"
    >
                <div>
                  <i class="fa-brands fa-vuejs text-green-900 text-9xl p-1"></i>
                <p class="text-white text-center">Vue JS</p>
                </div>
            </div>
            <div class="cursor-pointer border border-[#16181d] rounded-md hover:border-blue-900 p-5  w-52 flex items-center justify-center"
            data-aos="fade-down"
    >
                <div>
                  <i class="fa-brands fa-react text-cyan-900 text-9xl p-1"></i>
                <p class="text-white text-center">React JS</p>
                </div>
            </div>
            <div class="cursor-pointer border border-[#16181d] rounded-md hover:border-blue-500 p-5  w-52 flex items-center justify-center"
            data-aos="fade-down">

                <div>
                  <i class="fa-brands fa-php text-blue-500 text-9xl p-1"></i>
                <p class="text-white text-center">PHP</p>
                </div>
            </div>
            <div class="cursor-pointer border border-[#16181d] rounded-md hover:border-red-600 p-5  w-52 flex items-center justify-center"
            data-aos="fade-down">

                <div>
                  <i class="fa-brands fa-laravel text-red-600 text-9xl p-1"></i>
                <p class="text-white text-center">Laravel</p>
                </div>
            </div>
            <div class="cursor-pointer border border-[#16181d] rounded-md hover:border-orange-600 p-5  w-52 flex items-center justify-center"
            data-aos="fade-down">

                <div>
                  <img src="../../public/static/images/MySQL.png" alt="" srcset="" class="w-52">
                <p class="text-white text-center">MySQL</p>
                </div>
            </div>
            <div class="cursor-pointer border border-[#16181d] rounded-md hover:border-blue-600 p-5  w-52 flex items-center justify-center"
            data-aos="fade-down">

                <div>
                  <img src="../../public/static/images/jquery.png" alt="" srcset="" class="w-28 mb-4">
                <p class="text-white text-center">Jquery</p>
                </div>
            </div>
            <div class="cursor-pointer border border-[#16181d] rounded-md hover:border-blue-200 p-5  w-52 flex items-center justify-center"
            data-aos="fade-down"
    >
                <div>
                  <img src="../../public/static/images/vuetify.png" alt="" srcset="" class="w-28 mb-4">
                <p class="text-white text-center">Vuetify</p>
                </div>
            </div>
        </div>
        </div>


  <div class="relative " >
    <p class="flex justify-center text-7xl text-red-700 py-7" id="skills">Projects</p>
    <br><br>

    <swiper
    data-aos="fade-down"
      :slidesPerView="3"
      :breakpoints="breakpoints"
      :effect="'fade'"
      :spaceBetween="30"
      :navigation="navigation"
      :loop="true"
      :pagination="pagination"
      :modules="modules"
    >

      <swiper-slide>
        <img src="../../public/static/images/slider1.jpg" alt="" srcset="" class="h-80 w-full">
      </swiper-slide>
     <swiper-slide>
        <img src="../../public/static/images/slider2.jpg" alt="" srcset="" class="h-80 w-full">
      </swiper-slide>
      <swiper-slide>
        <img src="../../public/static/images/slider3.png" alt="" srcset="" class="h-80 w-full">
      </swiper-slide>
      <swiper-slide>
        <img src="../../public/static/images/slider4.jpg" alt="" srcset="" class="h-80 w-full">
      </swiper-slide>
      
    </swiper>
    <button class="next md:w-16 md:h-16 w-10 h-10 absolute top-80 z-50 right-2 md:right-6 rounded-full bg-red-700 hover:bg-red-900" data-aos="fade-down"><i class="fa-solid fa-angle-right text-white"></i></button>
    <button class=" prev md:w-16 md:h-16 w-10 h-10 absolute top-80 z-50 left-2 md:left-6 rounded-full bg-red-700 hover:bg-red-900" data-aos="fade-down"><i class="fa-solid fa-angle-left text-white"></i></button>
    <div class="h-24"></div>
  </div>

  <div class="bg-[#16181d] w-full" >
    <p class="flex justify-center text-7xl text-red-700 py-5" id="skills">About</p>
    <div class="flex justify-around  py-10">
      <div class="bashyyak mr-4 text-white text-2xl font-mono">
      <p>My name is mohammed khalil iam a web developer,<br>
      iam student in Sulemany Polytechnic University 4th Stage</p>
    </div>
    <div class="bashydw text-white text-2xl font-mono">
      Me in Social Media <br>
      Facebook
    </div>
    </div>
  </div>



</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

export default {
    components: {
    Swiper,
    SwiperSlide,
  },
    data() {
        return {
           breakpoints: {
            300: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            640: {
            slidesPerView: 2,
            spaceBetween: 40,
            },
            1080: {
            slidesPerView: 3,
            spaceBetween: 40,
            },
            1780: {
            slidesPerView: 4,
            spaceBetween: 50,
            },
      },
            show:false,
            isactive:'home',
            pagination: {
        el: ".swiper-pagination2",
        type: "bullets",
        clickable: true,
        renderBullet: function() {
          return `<div class=" swiper-pagination-bullet   " style="background: #fff !important; width:10px;height:10px;opacity:1;margin-top:8px;" ></div>`;
        },
       

      }, 
       navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },   
      modules: [ Navigation, Pagination], 
        }
    },
    methods:{
        isactiveRoute(name){
            this.isactive=name
            this.show=false
            if (name == "home") {
        let home = document.getElementById("home");
        if (home) {
          window.scrollTo({
            top: home.offsetTop,
            behavior: "smooth",
          });
        }
      }  else if (name == "skills") {
        let skills = document.getElementById("skills");
        if (skills) {
            window.scrollTo({
            top: skills.offsetTop,
            behavior: "smooth",
          });
        }
      }
        },
    },
     
    
}
</script>