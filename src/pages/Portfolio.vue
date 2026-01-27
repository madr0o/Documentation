<script setup>
    import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="flex-col flex pb-10 justify-start gap-6">
        <p>
            Menu Portfolio berfungsi sebagai pusat pengelolaan konten portofolio yang ditampilkan di website. Melalui menu ini, 
            pengguna dapat mengatur data portofolio agar selalu relevan, terstruktur, dan sesuai dengan kebutuhan tampilan. 
            Fitur-fitur yang tersedia memungkinkan pengguna untuk mengelola daftar portofolio secara menyeluruh, baik dari sisi 
            konten maupun pengaturannya, sehingga penyajian portofolio di website dapat berjalan secara konsisten dan profesional.
        </p>
        <div class="w-full border-b-1 border-gray-200">
            <h2 id="addVoucher" class="text-2xl font-medium">Menambahkan / Memperbarui Portfolio</h2>
        </div>
        <p>
            Untuk menambahkan item portfolio, pengguna dapat mengklik tombol <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">+ Tambah Package</span>, 
            kemudian mengisi data yang diperlukan seperti nama portfolio, slug (dapat dikosongkan karena akan dibuat otomatis oleh sistem), 
            pengaturan urutan tampilan, serta mengunggah gambar portfolio. Setelah seluruh data diisi, klik tombol Simpan untuk menyimpan 
            portfolio baru atau <span class="px-2 py-1 text-xs bg-gray-100 rounded-sm">Batal</span> jika ingin membatalkan proses.
        </p>
        <p>
            Untuk memperbarui item portfolio, pengguna dapat mengklik ikon edit <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><PencilSquareIcon class="h-4 w-4" /></span> 
            pada kolom aksi di daftar portfolio. Selanjutnya, pengguna dapat mengubah informasi yang diperlukan, seperti nama, urutan, atau 
            gambar portfolio. Setelah selesai melakukan perubahan, klik tombol Simpan untuk memperbarui data, atau <span class="px-2 py-1 bg-gray-100 rounded-sm text-xs border-1 border-gray-400">Batal</span> jika tidak ingin 
            menyimpan perubahan tersebut.
        </p>
        <div class="w-full border-b-1 border-gray-200">
            <h2 id="addVoucher" class="text-2xl font-medium">Menghapus Portfolio</h2>
        </div>
        <p>
            Selain menambahkan dan memperbarui data, pengguna juga dapat menghapus item portfolio yang sudah tidak digunakan. Untuk 
            menghapus portfolio, klik ikon hapus <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><TrashIcon class="h-4 w-4" /></span> 
            pada kolom Actions di baris portfolio yang ingin dihapus.
        </p>
        <p>
            Setelah ikon hapus diklik, sistem akan menampilkan konfirmasi untuk memastikan bahwa tindakan tersebut benar-benar ingin 
            dilakukan. Jika pengguna melanjutkan proses penghapusan, data portfolio beserta informasi dan gambar yang terkait akan 
            dihapus dari sistem. Jika pengguna membatalkan, maka tidak ada perubahan yang dilakukan pada data portfolio.
        </p>
    </div>
</template>
