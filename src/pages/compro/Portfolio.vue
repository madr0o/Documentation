<script setup>
    import AppShellSecond from '@/components/AppShellSecond.vue';
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <AppShellSecond>
        <div class="flex-col flex pb-10 justify-start gap-6">
            <div class="w-full border-b-1 border-gray-200 mb-2 ">
                <h1 class="text-3xl font-medium">Portfolio</h1>
            </div>
            <p>
                Menu Portfolio berfungsi sebagai pusat pengelolaan konten portofolio yang 
                ditampilkan di website. Menu ini terdiri dari dua sub menu utama, yaitu 
                Header Setting dan Items. Sub menu Header Setting digunakan untuk mengatur 
                teks heading atau judul yang ditampilkan pada section portfolio di website, 
                sehingga tampilan konten dapat disesuaikan dengan kebutuhan. Sementara itu, 
                sub menu Items digunakan untuk mengelola daftar item portfolio, di mana 
                pengguna dapat melihat list portfolio yang tersedia, menambahkan item baru, 
                melihat detail item, memperbarui data, serta menghapus item portfolio. 
                Dengan struktur ini, pengelolaan portofolio menjadi lebih terorganisir dan 
                konsisten dalam penyajiannya di website.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 id="addVoucher" class="text-2xl font-medium">Menambahkan / Memperbarui Portfolio</h2>
            </div>
            <p>
                Untuk menambahkan item portfolio, pengguna dapat mengklik tombol <span class="bg-gray-200 text-[#0D6C54] px-2 py-1 rounded-sm text-xs">+ Add Portfolio Item</span> , 
                kemudian melengkapi data yang diperlukan seperti nama portfolio, unggah gambar, 
                status portfolio (ditampilkan atau tidak ditampilkan di website), serta 
                menentukan apakah portfolio memiliki sub item atau tidak. Setelah seluruh data 
                diisi, klik tombol Simpan untuk menyimpan portfolio baru atau 
                <span class="px-2 py-1 text-xs bg-gray-200 rounded-sm">Batal</span> 
                jika ingin membatalkan proses.
            </p>
            <p>
                Untuk memperbarui item portfolio, pengguna dapat mengklik ikon edit <span class="inline-flex mx-1 bg-gray-100 p-1 rounded-xl"><PencilSquareIcon class="h-4 w-4" /></span> 
                pada kolom Actions di daftar portfolio. Selanjutnya, pengguna dapat mengubah informasi yang diperlukan, nama portfolio, gambar, status tampilan,  
                maupun pengaturan sub item. Setelah selesai melakukan perubahan, klik tombol Simpan untuk memperbarui data, atau <span class="px-2 py-1 bg-gray-200 rounded-sm text-xs">Batal</span> jika tidak ingin 
                menyimpan perubahan tersebut.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 id="addVoucher" class="text-2xl font-medium">Menghapus Portfolio</h2>
            </div>
            <p>
                Selain menambahkan dan memperbarui data, pengguna juga dapat menghapus item portfolio yang sudah tidak digunakan. Untuk 
                menghapus portfolio, klik ikon hapus <span class="inline-flex mx-1 bg-gray-100 p-1 rounded-xl"><TrashIcon class="h-4 w-4 text-red-500"/></span> 
                pada kolom Actions di baris portfolio yang ingin dihapus.
            </p>
            <p>
                Setelah ikon hapus diklik, sistem akan menampilkan konfirmasi untuk memastikan bahwa tindakan tersebut benar-benar ingin 
                dilakukan. Jika pengguna melanjutkan proses penghapusan, data portfolio beserta informasi dan gambar yang terkait akan 
                dihapus dari sistem. Jika pengguna membatalkan, maka tidak ada perubahan yang dilakukan pada data portfolio.
            </p>
        </div>
    </AppShellSecond>
</template>
