<script setup>
    import { EyeIcon, TrashIcon } from '@heroicons/vue/24/outline'
    import refreshIcon from '@/assets/refresh-icon.png'
import AppShellSecond from '@/components/AppShellSecond.vue';
</script>

<template>
    <AppShellSecond>
        <div class="flex justify-between pb-10 divide-x divide-gray-200">
            <div class="flex flex-col pr-3 justify-start gap-6">
                <div class="w-full border-b-1 border-gray-200 mb-2 ">
                    <h1 class="text-3xl font-medium">Inbox</h1>
                </div>
                <p>
                    Menu Inbox berfungsi sebagai pusat pengelolaan pesan yang masuk dari 
                    pengguna website. Melalui menu ini, pengguna CMS dapat memantau, 
                    membaca, dan mengelola seluruh komunikasi yang diterima dengan lebih 
                    terstruktur. Inbox dibagi menjadi dua sub menu utama, yaitu Messages 
                    untuk menampilkan dan mengelola daftar pesan yang masuk, serta Trash 
                    untuk menampilkan pesan yang telah dihapus. Pada sub menu Trash, 
                    pengguna masih dapat meninjau kembali pesan yang terhapus dan 
                    melakukan pemulihan (restore) apabila diperlukan. Menu ini membantu 
                    memastikan tidak ada pesan penting yang terlewat dan proses pengelolaan 
                    komunikasi berjalan lebih rapi dan efisien.
                </p>
                <div class="border-b-1 border-gray-200 mb-2">
                    <h2 id="productList" class="text-2xl font-medium">Melihat Detail Inbox</h2>
                </div>
                <p>
                    Untuk melihat detail pesan, user dapat mengklik icon mata <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><EyeIcon class="h-4 w-4" /></span> 
                    pada kolom Action di daftar inbox. Setelah diklik, sistem akan menampilkan 
                    halaman detail inbox seperti pada gambar, yang berisi informasi lengkap pesan, 
                    antara lain nama pengirim, tanggal dan sumber pesan, nomor telepon, email, 
                    subjek/perusahaan, ringkasan pesan, serta isi pesan lengkap. Dengan fitur ini, 
                    user dapat membaca dan meninjau pesan secara detail tanpa harus membuka pesan 
                    dari luar sistem.
                </p>
                <div class="border-b-1 border-gray-200 mb-2">
                    <h2 id="addProduct" class="text-2xl font-medium">Menghapus Item Message</h2>
                </div>
                <p>
                    Untuk menghapus item pesan, user dapat mengklik icon tong sampah 
                    <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl">
                        <EyeIcon class="h-4 w-4" />
                    </span> 
                    pada kolom Actions di daftar inbox, atau menggunakan tombol 
                    <span class="px-2 py-1 text-xs border-1 rounded-sm text-red-600">
                        <span class="inline-flex items-center align-middle" aria-hidden="true">
                            <TrashIcon class="h-4 w-4" />
                        </span>
                        Hapus Pesan</span> 
                    yang tersedia di bagian paling bawah saat melihat detail message. Pesan 
                    yang dihapus tidak langsung terhapus permanen, melainkan akan dipindahkan 
                    ke menu Trash, sehingga masih dapat dikelola atau dipulihkan kembali jika 
                    diperlukan.
                </p>
                <div class="border-b-1 border-gray-200 mb-2">
                    <h2 id="addProduct" class="text-2xl font-medium">Memulihkan Item Message</h2>
                </div>
                <p>
                    Untuk memulihkan item pesan yang telah dihapus, user dapat mengklik icon restore 
                    <span class="inline-flex px-1">
                        <img :src="refreshIcon" alt="img" class="w-4">
                    </span> pada kolom Actions di menu Trash. Setelah icon diklik, 
                    sistem akan menampilkan pesan konfirmasi pemulihan. Klik tombol 
                    <span class="px-2 py-1 text-xs rounded-sm bg-[#28C76f] text-white">Restore</span> 
                    untuk mengembalikan item message ke menu Inbox, atau klik tombol 
                    <span class="px-2 py-1 text-xs rounded-sm bg-gray-100 text-gray-500">Batal</span> 
                    untuk membatalkan proses pemulihan.
                </p>
            </div>
        </div>
    </AppShellSecond>
</template>
