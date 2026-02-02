<script setup>
    import AppShellSecond from '@/components/AppShellSecond.vue';
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <AppShellSecond>
        <div class="flex-col flex pb-10 justify-start gap-6">
            <div class="w-full border-b-1 border-gray-200 mb-2 ">
                <h1 class="text-3xl font-medium">Team</h1>
            </div>
            <p>
                Menu Teams digunakan untuk mengelola data tim perusahaan yang ditampilkan 
                di website. Menu ini terdiri dari dua sub menu utama, yaitu Header 
                Setting dan Items. Sub menu Header Setting berfungsi untuk mengatur teks 
                atau judul yang ditampilkan pada bagian header halaman tim, sedangkan sub 
                menu Items digunakan untuk mengelola data masing-masing anggota tim 
                perusahaan. Melalui menu ini, pengguna dapat mengatur informasi tim secara 
                terstruktur agar tampilan halaman tim tetap konsisten dan sesuai dengan 
                kebutuhan website.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 id="addVoucher" class="text-2xl font-medium">Menambahkan / Memperbarui Team</h2>
            </div>
            <p>
                Untuk menambahkan item team, pengguna dapat mengklik tombol 
                <span class="bg-gray-200 text-[#0D6C54] px-2 py-1 rounded-sm text-xs">+ Add Teams Item</span> , 
                kemudian melengkapi data yang diperlukan seperti jabatan/posisi, deskripsi 
                singkat, serta mengunggah foto anggota tim. Pengguna juga dapat mengatur 
                status tampilan anggota tim (ditampilkan atau tidak ditampilkan di 
                website). Setelah seluruh data diisi, klik tombol Simpan untuk menyimpan data 
                team baru, atau 
                <span class="px-2 py-1 text-xs bg-gray-200 rounded-sm">Batal</span>  
                jika ingin membatalkan proses.
            </p>
            <p>
                Untuk memperbarui item team, pengguna dapat mengklik ikon edit 
                <span class="inline-flex mx-1 bg-gray-100 p-1 rounded-xl"><PencilSquareIcon class="h-4 w-4" /></span> 
                pada kolom Actions di daftar team. Selanjutnya, pengguna dapat mengubah 
                informasi yang diperlukan, seperti jabatan, deskripsi, foto, maupun 
                status tampilan. Setelah selesai melakukan perubahan, klik tombol Simpan 
                untuk memperbarui data team, atau 
                <span class="px-2 py-1 text-xs bg-gray-200 rounded-sm">Batal</span> 
                jika tidak ingin menyimpan perubahan tersebut.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 id="addVoucher" class="text-2xl font-medium">Menghapus Team</h2>
            </div>
            <p>
                Selain menambahkan dan memperbarui data, pengguna juga dapat menghapus 
                item team yang sudah tidak digunakan. Untuk menghapus data team, klik ikon hapus 
                <span class="inline-flex mx-1 bg-gray-100 p-1 rounded-xl"><TrashIcon class="h-4 w-4 text-red-500"/></span> 
                pada kolom Actions di baris anggota team yang ingin dihapus.
            </p>
            <p>
                Setelah ikon hapus diklik, sistem akan menampilkan pesan konfirmasi untuk 
                memastikan bahwa tindakan penghapusan benar-benar ingin dilakukan. Jika 
                pengguna melanjutkan proses penghapusan, maka data anggota team beserta 
                informasi dan foto yang terkait akan dihapus dari sistem. Namun, jika 
                pengguna memilih untuk membatalkan, maka tidak akan ada perubahan yang 
                dilakukan pada data team.
            </p>
        </div>
    </AppShellSecond>
</template>
