<script setup>
    import ScrollToTop from '@/components/ScrollToTop.vue';
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="flex flex-col pb-10 justify-start gap-6">
        <p>
            Menu Settings digunakan sebagai pusat pengaturan utama untuk mengelola berbagai konfigurasi penting pada sistem dan tampilan website. Melalui menu ini, pengguna dapat mengatur lokasi penyimpanan data (storage) sesuai kebutuhan server, mengelola metode pembayaran dan pengiriman, serta mengatur elemen pendukung tampilan seperti logo partner, banner promosi, running text, dan daftar fitur atau layanan yang ditawarkan. Seluruh pengaturan di menu ini bertujuan untuk memastikan operasional sistem berjalan optimal sekaligus menjaga konsistensi dan fleksibilitas tampilan website sesuai kebutuhan bisnis.
        </p>
        <div class="w-full border-b-1 border-gray-200">
            <h2 class="text-2xl font-medium">Our Partners</h2>
        </div>
        <p>
            Sub menu Our Partner digunakan untuk mengelola daftar partner yang akan 
            ditampilkan di website. Pada halaman ini, user dapat melihat dan mengatur 
            informasi setiap partner, seperti nama partner, logo, URL website, deskripsi, 
            status aktif/nonaktif, serta urutan tampilannya. Selain itu, user juga dapat 
            melakukan pembaruan <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><PencilSquareIcon class="h-4 w-4" /></span> 
            atau menghapus <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><TrashIcon class="h-4 w-4" /></span> 
            data partner yang sudah ada melalui menu aksi. Untuk menambahkan partner 
            baru, user cukup mengklik tombol <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">+ Add Partner</span> 
            di kanan atas, kemudian mengisi data partner yang diperlukan agar logo dan 
            informasi partner dapat ditampilkan sesuai kebutuhan pada website.
        </p>
        <div class="w-full border-b-1 border-gray-200">
            <h2 class="text-2xl font-medium">Banners</h2>
        </div>
        <p>
            Sub Menu Banner digunakan untuk mengelola banner yang ditampilkan di 
            halaman website. Pada halaman ini, user dapat melihat daftar banner 
            beserta informasi seperti preview banner, judul, subtitle, status, dan 
            urutan tampil. User juga dapat menambahkan banner baru dengan menekan 
            tombol <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">+ Add Banner</span> , 
            serta memperbarui <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><PencilSquareIcon class="h-4 w-4" /></span>
             atau menghapus <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><TrashIcon class="h-4 w-4" /></span> 
             banner yang sudah ada melalui tombol aksi yang tersedia.
        </p>
        <p>
            Saat menambahkan atau mengedit banner, user perlu mengisi data banner seperti title, subtitle, description, tipe banner 
            (gambar atau video), serta mengunggah media banner melalui URL atau upload file. Selain itu, user dapat mengatur button 
            text sebagai teks tombol pada banner dan button link untuk menentukan halaman tujuan saat banner diklik. Setelah seluruh 
            data diisi, user dapat menyimpan perubahan dengan menekan tombol Create/Update, atau membatalkan proses dengan menekan 
            tombol <span class="px-2 py-1 bg-gray-100 rounded-sm text-xs border-1 border-gray-400">Cancel</span>.
        </p>
        <div class="w-full border-b-1 border-gray-200">
            <h2 class="text-2xl font-medium">Running Text</h2>
        </div>
        <p>
            Sub menu Running Text digunakan untuk mengatur teks berjalan yang ditampilkan pada halaman homepage website. Pada menu 
            ini, user dapat melihat daftar running text yang aktif maupun tidak aktif, serta melakukan manajemen data seperti 
            menambahkan item baru <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">+ Add Running Text</span> , 
            memperbarui item yang sudah ada <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><PencilSquareIcon class="h-4 w-4" /></span>, 
            atau menghapus item <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><TrashIcon class="h-4 w-4" /></span>.
        </p>
        <p>
            Saat menambahkan atau memperbarui running text, user perlu mengisi isi teks, menentukan tanggal mulai dan tanggal berakhir 
            penayangan, serta dapat menambahkan link (opsional) yang akan diarahkan ketika teks diklik. Setelah seluruh data diisi, 
            user dapat menekan tombol Create/Update untuk menyimpan perubahan, atau tombol <span class="px-2 py-1 bg-gray-100 rounded-sm text-xs border-1 border-gray-400">Cancel</span> untuk membatalkan proses.
        </p>
        <div class="w-full border-b-1 border-gray-200">
            <h2 class="text-2xl font-medium">Features</h2>
        </div>
        <p>
            Sub Menu Features digunakan untuk mengelola konten “Why Us” atau daftar layanan/jasa yang ditawarkan di website. Pada halaman ini, user dapat melihat seluruh feature yang ditampilkan, lengkap dengan gambar, judul, deskripsi, status, dan urutan tampil.
        </p>
        <p>
            User dapat menambahkan feature baru dengan menekan tombol <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">+ Add Feature</span> , 
            serta memperbarui <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><PencilSquareIcon class="h-4 w-4" /></span> 
            atau menghapus <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><TrashIcon class="h-4 w-4" /></span> 
            feature yang sudah ada melalui tombol aksi. Saat menambahkan atau memperbarui 
            feature, user perlu mengisi data seperti title feature, description, dan 
            gambar feature. Setelah selesai mengisi atau mengubah data, user dapat 
            menyimpan perubahan dengan menekan tombol Create/Update, atau membatalkan 
            proses dengan menekan tombol <span class="px-2 py-1 bg-gray-100 rounded-sm text-xs border-1 border-gray-400">Cancel</span>.
        </p>
    </div>
    <ScrollToTop />
</template>