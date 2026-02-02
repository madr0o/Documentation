<script setup>
    import sidebarImg from '@/assets/sidebar.png'
    import topbarImg from '@/assets/topbar.png'
    import icons from '@/assets/icons.png'

    import ScrollToTop from '@/components/ScrollToTop.vue';
    import AppShell from '@/components/AppShell.vue';
</script>

<template>
    <AppShell>
        <div class="flex-col flex pb-10 justify-start gap-6">
            <div class="w-full border-b-1 border-gray-200">
                <h1 class="text-3xl font-medium">Introduction</h1>
            </div>
            <p class="text-base font-normal">Dokumen ini merupakan buku panduan (manual book) yang disusun untuk 
                membantu pengguna dalam memahami dan menggunakan Content Management System (CMS) secara efektif. 
                Manual ini menjelaskan fungsi, fitur, serta alur penggunaan sistem yang tersedia, sehingga pengguna 
                dapat mengelola data, memantau aktivitas, dan menjalankan operasional secara terstruktur. Dengan panduan 
                ini, diharapkan pengguna dapat memanfaatkan CMS secara optimal sesuai dengan kebutuhan pengelolaan konten, 
                transaksi, dan manajemen sistem tanpa memerlukan pemahaman teknis yang mendalam.
            </p>
            <p>
                Pertama-tama, setelah pengguna berhasil masuk ke dalam sistem, pengguna akan diarahkan ke tampilan utama CMS. 
                Pada tampilan ini, pengguna dapat langsung mengakses berbagai fitur utama yang mendukung aktivitas pengelolaan 
                data dan operasional sistem secara keseluruhan.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 class="text-2xl font-medium">Sidebar</h2>
            </div>
            <div class="flex justify-center">
                <img :src="sidebarImg" alt="Menu-Img" class="h-70 flex items-center">
            </div>
            <p>
                Di sisi kiri layar, terdapat menu navigasi yang berfungsi sebagai pusat akses untuk mengelola berbagai kebutuhan, 
                seperti data produk, pesanan, pelanggan, voucher, pengaturan sistem, serta manajemen pengguna. Menu ini dirancang 
                agar pengguna dapat berpindah antar fitur dengan mudah dan terstruktur.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 class="text-2xl font-medium">Topbar</h2>
            </div>
            <div class="flex justify-center">
                <img :src="topbarImg" alt="Menu-Img" class="w-300 flex items-center">
            </div>
            <p>
                Pada bagian atas halaman, tersedia fitur pencarian (search) yang memungkinkan pengguna menemukan data atau 
                halaman tertentu dengan cepat. Fitur ini membantu mempercepat proses pengelolaan tanpa harus menelusuri menu 
                secara manual, terutama ketika jumlah data sudah banyak.
            </p>
            <p>
                Selain itu, pada area kanan atas, pengguna dapat melakukan beberapa pengaturan tambahan, seperti mengubah tampilan 
                sistem ke mode cerah (light) atau gelap (dark), melihat notifikasi, serta mengakses pengaturan akun. Melalui menu akun, 
                pengguna dapat mengelola informasi profil, seperti mengubah nama, mengatur atau mengganti kata sandi, mengecek informasi 
                paket atau billing plan, hingga melakukan logout dari sistem.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 class="text-2xl font-medium">Icons</h2>
            </div>
            <div class="flex justify-center">
                <img :src="icons" alt="Menu-Img" class="w-50 flex items-center">
            </div>
            <p>
                Berikut penjelasan fungsi dari masing-masing ikon aksi yang tersedia di dalam CMS:
            </p>
            <div class="grid md:grid-cols-3 gap-4 md:divide-x divide-gray-200">
                <div class="flex flex-col justify-start gap-2 pr-2">
                    <p class="font-medium border-b-1 border-gray-200 pb-1">Ikon Mata (View/Detail)</p>
                    <p>
                        Digunakan untuk melihat detail lengkap dari suatu item tanpa 
                        mengubah data. Melalui ikon ini, pengguna dapat meninjau informasi 
                        seperti deskripsi, status, konfigurasi, atau detail lain yang berkaitan 
                        dengan item tersebut.
                    </p>
                </div>
                <div class="flex flex-col justify-start gap-2 pr-2">
                    <p class="font-medium border-b-1 border-gray-200 pb-1">Ikon Pensil (Edit)</p>
                    <p>
                        Berfungsi untuk memperbarui atau mengubah informasi pada item 
                        yang dipilih. Setelah diklik, pengguna akan diarahkan ke halaman 
                        atau form edit untuk melakukan perubahan data, seperti nama, 
                        kategori, harga, status, dan pengaturan lainnya.
                    </p>
                </div>
                <div class="flex flex-col justify-start gap-2 pr-2">
                    <p class="font-medium border-b-1 border-gray-200 pb-1">Ikon Tong Sampah (Delete)</p>
                    <p>
                        Digunakan untuk menghapus item dari sistem. Biasanya, sistem akan 
                        menampilkan konfirmasi terlebih dahulu untuk memastikan bahwa 
                        pengguna benar-benar ingin menghapus data tersebut agar terhindar 
                        dari penghapusan yang tidak disengaja.
                    </p>
                </div>
            </div>
        </div>
        <ScrollToTop />
    </AppShell>
</template>
