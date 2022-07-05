<template>
    <header class="w-100vw h-[15vh] relative lg:relative top-0 bg-[#12141D] text-white overflow-hidden"  id="home">
        <div class="logo h-[15vh] w-[100vw] flex justify-between items-center">
            <p class="w-5/6 md:w-4/6 pl-8 text-xl font-mono">Mohammed<span class="text-red-500">Khalil</span></p>
        <nav class="text-white text-xl font-mono 
        "><a to="#hpme">
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[15vh]
                        p-[50px]
                        hover:bg-[#171923]
                        cursor-pointer
                        "
                        :class="isactive=='home'?'text-red-500':''"
                        @click="isactiveRoute('home')"
                        >Home</p></a>
                        <a href="#skills">
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[15vh]
                        p-[50px]
                        hover:bg-[#171923]
                        cursor-pointer
                        "
                        :class="isactive=='skills'?'text-red-500':''"
                        @click="isactiveRoute('skills')"
                        >Skills</p></a>
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
                <a href="#home">
            <p   class="
                        hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        "
                        :class="isactive=='home'?'text-red-500':''"
                        @click="isactiveRoute('home')"
                        >Home</p></a>
                        <a href="#skills">
            <p   class="
                        hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        "
                        :class="isactive=='skills'?'text-red-500':''"
                        @click="isactiveRoute('skills')"
                        >Skills</p></a>
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

        <div class="aboutme md:flex md:h-[85vh] items-center justify-between w-full py-4 md:p-0">
            <div class="py-8 md:p-0 w-full md:ml-10">
                <p class="text-xl text-center w-full md:text-3xl text-slate-400 font-light">Hello, my name is <span class="text-red-500">Mohammed Khalil</span> <br> and i am a <span class="text-slate-600">FullStack developer</span>  <br> Wellcome to my <span class="text-red-500">Portfolio</span></p>
            </div>
            <div class=" rounded-full py-8 md:p-0">
                    <img src="../../public/static/images/me.jpg" alt="" srcset="" class="h-[70%] w-[70%] sm:h-[50%] sm:w-[50%] m-auto md:m-0 md:w-[60%] md:h-[70%] lg:w-[50%] lg:h-[70%] md:mr-10 md:float-right rounded-full">
            </div>
        </div>
<div class="bg-[#16181d] w-full" id="skills">
    <p class="flex justify-center text-7xl text-red-700 py-5">SKills</p>

        <div class="pt-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center grid-rows-4">
            <div class="cursor-pointer">
                <i class="fa-brands fa-html5 text-red-700 text-9xl p-1"></i>
                <p class="text-white text-center">HTML</p>
            </div>
            <div class="cursor-pointer">
                <i class="fa-brands fa-css3 text-blue-700 text-9xl p-1"></i>
                <p class="text-white text-center">CSS</p>
            </div>
            <div class="cursor-pointer">
                <i class="fa-brands fa-bootstrap text-purple-700 text-9xl p-1"></i>
                <p class="text-white text-center">Bootstrap</p>
            </div>
            <div class="cursor-pointer">
                <img src="../../public/static/images/Tailwind.png" alt="" srcset="" class="w-28">
                <p class="text-white text-center">Tailwind</p>
            </div>
            <div class="cursor-pointer">
                <i class="fa-brands fa-js text-yellow-500 text-9xl p-1"></i>
                <p class="text-white text-center">JS</p>
            </div>
            <div class="cursor-pointer">
                <i class="fa-brands fa-vuejs text-green-900 text-9xl p-1"></i>
                <p class="text-white text-center">Vue JS</p>
            </div>
            <div class="cursor-pointer">
                <i class="fa-brands fa-react text-cyan-900 text-9xl p-1"></i>
                <p class="text-white text-center">React JS</p>
            </div>
            <div class="cursor-pointer">
                <i class="fa-brands fa-php text-blue-500 text-9xl p-1"></i>
                <p class="text-white text-center">PHP</p>
            </div>
            <div class="cursor-pointer">
                <i class="fa-brands fa-laravel text-red-600 text-9xl p-1"></i>
                <p class="text-white text-center">Laravel</p>
            </div>
            <div class="cursor-pointer">
                <img src="../../public/static/images/MySQL.png" alt="" srcset="" class="w-52">
                <p class="text-white text-center">MySQL</p>
            </div>
            <div class="cursor-pointer">
                <img src="../../public/static/images/jquery.png" alt="" srcset="" class="w-28 mb-4">
                <p class="text-white text-center">Jquery</p>
            </div>
            <div class="cursor-pointer">
                <img src="../../public/static/images/vuetify.png" alt="" srcset="" class="w-28 mb-4">
                <p class="text-white text-center">Vuetify</p>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            show:false,
            isactive:'home'
        }
    },
    methods:{
        isactiveRoute(name){
            this.isactive=name
            this.show=false
        }
    }
}
</script>