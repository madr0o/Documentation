<script setup>
    import voucherType from '@/assets/voucher-1.png'
    import distType from '@/assets/voucher-2.png'
    import sno from '@/assets/voucher-3.png'
    import voucherInfo from '@/assets/voucher-4.png'
    import usageLimit from '@/assets/voucher-5.png'
    import validPeriod from '@/assets/voucher-6.png'
    import { EyeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="flex justify-between divide-x divide-gray-200">
        <div class="w-4/5 flex flex-col pb-10 pr-3 justify-start gap-6">
            <p>
                Menu Vouchers digunakan untuk mengelola seluruh voucher promo yang tersedia di website. Melalui menu ini, pengguna dapat melihat ringkasan jumlah voucher secara keseluruhan, termasuk voucher pengiriman (shipping), voucher diskon, dan voucher cashback, sehingga memudahkan pemantauan program promosi yang sedang berjalan.
            </p>
            <p>
                Pada halaman Vouchers Management, pengguna dapat melihat daftar voucher lengkap beserta informasi penting seperti kode voucher, jenis voucher, nilai diskon atau potongan, jumlah penggunaan, masa berlaku, dan status voucher. Selain itu, pengguna juga dapat mencari voucher, melakukan filter berdasarkan tipe dan status, serta mengelola voucher melalui aksi melihat detail, mengubah, atau menghapus voucher. Menu ini membantu pengguna mengatur strategi promosi secara terpusat dan memastikan setiap voucher berjalan sesuai ketentuan yang telah ditetapkan.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 id="addVoucher" class="text-2xl font-medium">Menambahkan Voucher</h2>
            </div>
            <div class="flex justify-center">
                <img :src="voucherType" alt="img" class="w-100">
            </div>
            <p>
                Untuk membuat voucher baru, pengguna dapat mengklik tombol <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">+ Add Voucher</span> yang berada di bagian kanan atas halaman Vouchers Management. Setelah itu, pengguna akan diarahkan ke halaman pembuatan voucher dan diminta menentukan Voucher Type, yaitu memilih apakah voucher tersebut berupa Shipping Voucher, Discount Voucher, atau Cashback Voucher, sesuai dengan kebutuhan promo yang ingin dibuat.
            </p>
            <div class="flex justify-center gap-2">
                <img :src="distType" alt="img" class="h-40">
                <img :src="sno" alt="img" class="h-40">
            </div>
            <p>
                Langkah berikutnya adalah menentukan Distribution Type, yaitu bagaimana voucher akan didistribusikan. Voucher dapat bersifat Global (berlaku untuk semua pelanggan), Specific Customers (hanya untuk pelanggan tertentu), atau Claimable (voucher perlu diklaim terlebih dahulu oleh pelanggan). Pada tahap ini, pengguna juga dapat mengatur Status & Options, seperti mengaktifkan voucher langsung (Active) dan menentukan apakah voucher bisa digunakan bersamaan dengan voucher lain (Stackable).
            </p>
            <div class="flex justify-center gap-2">
                <img :src="voucherInfo" alt="img" class="w-90">
            </div>
            <p>
                Pada bagian Voucher Information, pengguna mengisi detail utama voucher. Voucher Code dapat diisi secara manual atau dibuat otomatis dengan menekan tombol Generate. Selanjutnya, pengguna memilih Icon Voucher, mengatur Priority, serta mengisi Voucher Name dan Description untuk memudahkan identifikasi voucher di sistem maupun oleh pelanggan.
            </p>
            <p>
                Setelah itu, pengguna mengatur Discount Configuration, yang mencakup jenis diskon (persentase atau nominal), nilai diskon, minimum pembelian, serta batas maksimum diskon jika diperlukan. Sistem akan menampilkan preview untuk membantu pengguna memastikan aturan diskon sudah sesuai. 
            </p>
            <div class="flex justify-center gap-2">
                <img :src="usageLimit" alt="img" class="h-40">
                <img :src="validPeriod" alt="img" class="h-40">
            </div>
            <p>
                Pengguna kemudian dapat menentukan Usage Limits, seperti batas total penggunaan voucher dan batas penggunaan per pengguna. Selain itu, pada bagian Validity Period, pengguna dapat mengatur periode berlaku voucher, baik tanggal mulai maupun tanggal berakhir, agar promo hanya aktif dalam rentang waktu tertentu.
            </p>
            <p>
                Seluruh konfigurasi voucher yang telah diisi akan dirangkum secara otomatis 
                pada bagian Voucher Summary di sisi kanan, sehingga pengguna dapat melakukan 
                pengecekan akhir sebelum menyimpan. Jika semua data sudah sesuai, pengguna dapat 
                menekan tombol <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">Create Voucher</span> untuk menyimpan dan mengaktifkan voucher. Apabila 
                ingin membatalkan proses pembuatan, pengguna dapat memilih tombol 
                <span class="px-2 py-1 border-1 rounded-sm text-xs border-gray-600 text-gray-400">
                    Discard</span> untuk keluar tanpa menyimpan perubahan.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 id="updateVoucher" class="text-2xl font-medium">Memperbarui Voucher</h2>
            </div>
            <p>
                Untuk memperbarui voucher, pengguna dapat mengklik ikon mata 
                <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><EyeIcon class="h-4 w-4" /></span> pada kolom Actions di daftar voucher. Setelah itu, sistem akan 
                menampilkan halaman detail voucher beserta seluruh konfigurasi yang telah 
                dibuat sebelumnya. Pengguna dapat melakukan perubahan pada data yang 
                diperlukan, seperti informasi voucher, konfigurasi diskon, periode 
                berlaku, batas penggunaan, maupun status voucher. Setelah selesai 
                melakukan perubahan, klik tombol <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">Update Voucher</span> untuk menyimpan dan 
                menerapkan pembaruan. Jika pengguna ingin membatalkan proses perubahan 
                tanpa menyimpan, cukup klik tombol <span class="px-2 py-1 border-1 rounded-sm text-xs border-gray-600 text-gray-400">Discard</span> .
            </p>
        </div>
        <div class="w-1/5">
            <aside class="hidden xl:block w-64 pl-6 sticky top-24 self-start">
                <ul class="space-y-2 text-sm">
                    <li>
                        <a href="#addVoucher" class="text-gray-600 hover:text-indigo-600">
                            Menambahkan Voucher
                        </a>
                    </li>
                    <li>
                        <a href="#updateVoucher" class="text-gray-600 hover:text-indigo-600">
                            Memperbarui Voucher
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    </div>
</template>
