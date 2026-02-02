<script setup>
    import monitor from '@/assets/dashboard-11.png'
</script>

<template>
    <div class="flex justify-between pb-10">
        <div class="flex flex-col justify-start gap-6">
            <div class="w-full border-b-1 border-gray-200 mb-2 ">
                <h1 class="text-3xl font-medium">Dashboard</h1>
            </div>
            <div class="flex justify-center">
                <img :src="monitor" alt="img" class="w-250">
            </div>
            <p>
                Menu Dashboard merupakan halaman utama pada CMS yang berfungsi sebagai 
                ringkasan kondisi sistem secara keseluruhan. Pada menu ini, pengguna 
                dapat memantau jumlah data atau item yang tersedia di setiap modul, 
                seperti portfolio, sub-portfolio, pengembangan edukasi, tim, hingga pesan 
                masuk (inbox). Informasi ditampilkan dalam bentuk kartu ringkasan sehingga 
                memudahkan pengguna untuk melihat gambaran umum aktivitas dan konten yang 
                ada tanpa harus membuka masing-masing menu secara detail. Dashboard 
                membantu pengguna memahami status dan perkembangan data secara cepat dan 
                efisien.
            </p>
        </div>
    </div>
</template>