<template>
    <header class="w-100vw md:h-[15vh] bg-[#12141D] text-white overflow-hidden">
        <div class="logo h-[15vh] w-[100vw] flex justify-between items-center">
            <p class="w-3/5 md:w-1/5 pl-8">Mohammed Khalil</p>
        <nav class="text-white 
        ">
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-24
                        h-[15vh]
                        p-[35px]
                        hover:bg-[#171923]
                        cursor-pointer
                        ">Home</p>
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-24
                        h-[15vh]
                        p-[35px]
                        hover:bg-[#171923]
                        cursor-pointer
                        ">Skills</p>
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-24
                        h-[15vh]
                        p-[35px]
                        hover:bg-[#171923]
                        cursor-pointer
                        ">Project</p>
            <p   class="hidden
                        lg:inline
                        lg:px-10
                        xl:px-24
                        h-[15vh]
                        p-[35px]
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

    <nav class="text-white  lg:invisible bg-[#12141D] overflow-hidden transition-all duration-500"
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