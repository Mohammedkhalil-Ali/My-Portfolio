<template>
    <header class="w-100vw h-[15vh] sticky top-0 bg-[#12141D] text-white overflow-hidden">
        <div class="logo h-[15vh] w-[100vw] flex justify-between items-center">
            <p class="w-5/6   md:w-3/6 pl-8 text-xl font-mono">Mohammed<span class="text-red-500">Khalil</span></p>
        <nav class="text-white text-xl font-mono ml-14
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

        <div class="aboutme md:flex md:h-[85vh] items-center justify-between w-screen py-4 md:p-0">
            <div class="py-8 md:p-0 w-full md:ml-10">
                <p class="text-xl text-center w-full md:text-3xl text-slate-400 font-light">Hello, my name is <span class="text-red-500">Mohammed Khalil</span> <br> and i am a <span class="text-slate-600">FullStack developer</span>  <br> Wellcome to my <span class="text-red-500">Portfolio</span></p>
            </div>
            <div class=" rounded-full py-8 md:p-0">
                    <img src="../../public/static/images/me.jpg" alt="" srcset="" class="h-[70%] w-[70%] sm:h-[50%] sm:w-[50%] m-auto md:m-0 md:w-[60%] md:h-[70%] lg:w-[50%] lg:h-[70%] md:mr-10 md:float-right rounded-full">
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