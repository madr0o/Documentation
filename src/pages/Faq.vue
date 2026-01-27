<script setup>
    import headerContent from '@/assets/faq-1.png'
    import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="flex flex-col pb-10 justify-start gap-6">
        <div class="w-full border-b-1 border-gray-200">
            <h2 class="text-2xl font-medium">Header Setting</h2>
        </div>
        <div class="flex justify-center gap-2">
                <img :src="headerContent" alt="img" class="w-90">
            </div>
        <p>
            Header Setting digunakan untuk mengatur judul atau teks header yang 
            ditampilkan pada section FAQ (atau bundle/FAQ section) di website. Pada 
            bagian ini, user dapat menyesuaikan label dan judul sesuai kebutuhan 
            tampilan. Setelah melakukan perubahan, user dapat menekan tombol 
            <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">Save Changes</span> 
            untuk menyimpan pembaruan, atau tombol <span class="px-2 py-1 bg-gray-200 rounded-sm text-xs">Reset</span> 
            untuk mengembalikan data ke kondisi sebelumnya.
        </p>
        <div class="w-full border-b-1 border-gray-200">
            <h2 class="text-2xl font-medium">FAQ Items</h2>
        </div>
        <p>
            FAQ Items berfungsi untuk mengelola daftar pertanyaan yang sering diajukan 
            oleh pengguna website. Di sub menu ini, user dapat melihat seluruh item FAQ, 
            menambahkan FAQ baru <span class="px-2 py-1 bg-gray-200 rounded-sm text-xs">+ Add FAQ Items</span>, 
            melihat detail <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><EyeIcon class="h-4 w-4" /></span>, 
            memperbarui <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><PencilSquareIcon class="h-4 w-4" /></span>, 
            maupun menghapus <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><TrashIcon class="h-4 w-4" /></span> 
            item FAQ yang sudah ada. Saat menambahkan atau mengedit FAQ, user dapat mengisi 
            nama item sebagai teks pertanyaan, deskripsi sebagai jawaban, serta menambahkan 
            gambar jika diperlukan (opsional). Setelah data diisi, user dapat menyimpan 
            perubahan dengan menekan tombol <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">Save</span>
            / <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">Update</span> , 
            atau membatalkan proses dengan tombol <span class="px-2 py-1 bg-gray-100 rounded-sm text-xs border-1 border-gray-400">Cancel</span>.
        </p>
    </div>
</template>