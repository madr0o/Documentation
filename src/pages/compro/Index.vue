<script setup>
import HeaderSecond from '@/components/HeaderSecond.vue';

</script>

<template>
    <div class="flex flex-col px-21">
        <HeaderSecond />
        <div class="flex justify-center items-center h-screen">
            <div class="flex flex-col md:flex-row justify-between gap-4">
                <div>
                    <router-link
                        to="/compro/guidline-book/dashboard"
                        class="block"
                    >
                        <div
                            class="flex items-center justify-center text-center
                                box-content size-40 md:size-60 rounded-xl
                                bg-[linear-gradient(135deg,#4A8D7C,#19468E)] text-white font-medium
                                md:font-semibold text-xs md:text-sm shadow-md
                                transition-all duration-200
                                hover:bg-[linear-gradient(135deg,#5F9F8E,#2C5BA3)] hover:shadow-lg"
                        >
                            Guideline Book<br>Company Profile
                        </div>
                    </router-link>
                </div>
                <div>
                    <router-link
                        to="/compro/video-tutorial"
                        class="block"
                    >
                        <div
                            class="flex items-center justify-center text-center
                                box-content size-40 md:size-60 rounded-xl
                                bg-[linear-gradient(135deg,#4A8D7C,#19468E)] text-white font-medium
                                md:font-semibold text-xs md:text-sm shadow-md
                                transition-all duration-200
                                hover:bg-[linear-gradient(135deg,#5F9F8E,#2C5BA3)] hover:shadow-lg"
                        >
                            Video Tutorial
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>