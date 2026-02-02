<script setup>
    import sidebarImg from '@/assets/sidebar.png'
    import topbarImg from '@/assets/topbar.png'
    import icons from '@/assets/icons.png'

    import ScrollToTop from '@/components/ScrollToTop.vue';
    import Header from '@/components/Header.vue';
import HeaderSecond from '@/components/HeaderSecond.vue';
</script>

<template>
    <div class="flex flex-col px-21">
        <header
            class="
            fixed top-0 left-0 right-0 z-50
            h-16 flex items-center justify-start px-6
            md:px-21 border-b border-gray-200 bg-white
            "
        >
            <h3 class="text-lg lg:text-xl font-bold text-gray-800">
                Documentation
            </h3>
        </header>
        <div class="flex justify-center items-center h-screen">
            <div class="flex flex-col md:flex-row justify-between gap-4">
                <div>
                    <router-link
                        to="/commerce"
                        class="block"
                    >
                        <div
                            class="flex items-center justify-center
                                box-content size-40 md:size-60 rounded-xl
                                bg-[linear-gradient(135deg,#4A8D7C,#19468E)] text-white font-medium
                                md:font-semibold text-xs md:text-sm shadow-md
                                transition-all duration-200
                                hover:bg-[linear-gradient(135deg,#5F9F8E,#2C5BA3)] hover:shadow-lg"
                        >
                            Commerce
                        </div>
                    </router-link>
                </div>
                <div>
                    <router-link
                        to="/compro"
                        class="block"
                    >
                        <div
                            class="flex items-center justify-center
                                box-content size-40 md:size-60 rounded-xl
                                bg-[linear-gradient(135deg,#4A8D7C,#19468E)] text-white font-medium
                                md:font-semibold text-xs md:text-sm shadow-md
                                transition-all duration-200
                                hover:bg-[linear-gradient(135deg,#5F9F8E,#2C5BA3)] hover:shadow-lg"
                        >
                            Company Profile
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
