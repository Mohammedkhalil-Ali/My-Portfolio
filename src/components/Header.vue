<template>
    <header class="w-100vw h-[15vh] bg-[#12141D] text-white overflow-hidden">
        <div class="logo h-[15vh] w-[100vw] flex justify-between items-center">
            <p class="w-5/6   md:w-3/6 pl-8 text-2xl font-mono">Mohammed <span class="text-red-500">Khalil</span></p>
        <nav class="text-white text-2xl font-mono ml-14
        ">
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[15vh]
                        p-[50px]
                        hover:bg-[#171923]
                        cursor-pointer
                        ">Home</p>
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[15vh]
                        p-[50px]
                        hover:bg-[#171923]
                        cursor-pointer
                        ">Skills</p>
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[15vh]
                        p-[50px]
                        hover:bg-[#171923]
                        cursor-pointer
                        ">Project</p>
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[15vh]
                        p-[50px]
                        hover:bg-[#171923]
                        cursor-pointer
                        ">About</p>
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

    <nav class="text-white text-2xl  lg:invisible bg-[#12141D] overflow-hidden transition-all duration-500"
        :class="show?'visible h-[85vh]':'invisible h-0'"
                >
            <p   class="
                        hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        ">Home</p>
            <p   class="
                        hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        ">Skills</p>
            <p   class="
                        hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        ">Project</p>
            <p   class="
                        hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        ">About</p>
        </nav>
</template>

<script>
export default {
    data() {
        return {
            show:false
        }
    },
}
</script>