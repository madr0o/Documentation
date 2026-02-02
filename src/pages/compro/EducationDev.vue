<script setup>
    import AppShellSecond from '@/components/AppShellSecond.vue';
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <AppShellSecond>
        <div class="flex flex-col pb-10 justify-start gap-6">
            <div class="w-full border-b-1 border-gray-200 mb-2 ">
                <h1 class="text-3xl font-medium">Education Development</h1>
            </div>
            <p>
                Menu Education Development berfungsi sebagai pusat pengelolaan konten 
                pengembangan edukasi yang ditampilkan di website. Menu ini terdiri 
                dari dua sub menu utama, yaitu Header Setting dan Items. Sub menu 
                Header Setting digunakan untuk mengatur teks heading atau judul yang 
                ditampilkan pada section Education Development di website, sehingga 
                penyajian konten dapat disesuaikan dengan kebutuhan dan konteks halaman. 
                Sementara itu, sub menu Items digunakan untuk mengelola daftar konten 
                Education Development, di mana pengguna dapat melihat daftar item yang 
                tersedia, menambahkan item baru, melihat detail item, memperbarui data, 
                serta menghapus item. Dengan pembagian menu ini, pengelolaan konten 
                Education Development menjadi lebih terstruktur, rapi, dan konsisten 
                dalam penampilannya di website.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 id="addVoucher" class="text-2xl font-medium">Menambahkan / Memperbarui Education Development</h2>
            </div>
            <p>
                Untuk menambahkan item Education Development, pengguna dapat mengklik tombol 
                <span class="bg-gray-200 text-[#0D6C54] px-2 py-1 rounded-sm text-xs">+ Add Education Item</span> , 
                kemudian melengkapi data yang diperlukan seperti judul program, deskripsi, 
                serta mengunggah gambar pendukung (jika tersedia). Pengguna juga dapat mengatur 
                status tampilan konten (ditampilkan atau tidak ditampilkan di website). 
                Setelah seluruh data diisi, klik tombol Simpan untuk menyimpan item 
                Education Development baru, atau 
                <span class="px-2 py-1 text-xs bg-gray-200 rounded-sm">Batal</span> 
                jika ingin membatalkan proses.
            </p>
            <p>
                Untuk memperbarui item Education Development, pengguna dapat mengklik ikon edit 
                <span class="inline-flex mx-1 bg-gray-100 p-1 rounded-xl">
                    <PencilSquareIcon class="h-4 w-4" />
                </span>
                pada kolom Actions di daftar Education Development. Selanjutnya, pengguna dapat 
                mengubah informasi yang diperlukan, seperti judul program, deskripsi, gambar 
                pendukung, maupun status tampilan konten. Setelah selesai melakukan perubahan, 
                klik tombol Simpan untuk memperbarui data Education Development, atau 
                <span class="px-2 py-1 text-xs bg-gray-200 rounded-sm">Batal</span>
                jika tidak ingin menyimpan perubahan tersebut.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 id="addVoucher" class="text-2xl font-medium">Menghapus Education Development</h2>
            </div>
            <p>
                Selain menambahkan dan memperbarui data, pengguna juga dapat menghapus 
                item Education Development yang sudah tidak digunakan. Untuk menghapus data 
                Education Development, klik ikon hapus 
                <span class="inline-flex mx-1 bg-gray-100 p-1 rounded-xl">
                    <TrashIcon class="h-4 w-4 text-red-500" />
                </span>
                pada kolom Actions di baris item Education Development yang ingin dihapus.
            </p>
            <p>
                Setelah ikon hapus diklik, sistem akan menampilkan pesan konfirmasi untuk 
                memastikan bahwa tindakan penghapusan benar-benar ingin dilakukan. Jika 
                pengguna melanjutkan proses penghapusan, maka data Education Development 
                beserta informasi dan konten terkait akan dihapus dari sistem. Namun, jika 
                pengguna memilih untuk membatalkan, maka tidak akan ada perubahan yang 
                dilakukan pada data Education Development.
            </p>
        </div>
    </AppShellSecond>
</template>