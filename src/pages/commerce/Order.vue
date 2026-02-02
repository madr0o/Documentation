<script setup>
    import { EyeIcon } from '@heroicons/vue/24/outline'
    import order1 from '@/assets/order-1.png'
    import order2 from '@/assets/order-2.png'
    import ScrollToTop from '@/components/ScrollToTop.vue';
    import AppShell from '@/components/AppShell.vue';
</script>

<template>
    <AppShell>
        <div class="flex-col flex pb-10 justify-start gap-6">
            <div class="w-full border-b-1 border-gray-200 lg:mb-2 ">
                <h1 class="text-3xl font-medium">Orders</h1>
            </div>
            <p>
                Menu Order digunakan untuk memantau dan mengelola seluruh aktivitas pesanan yang terjadi di website. Melalui menu ini, 
                user dapat melihat ringkasan status order secara umum, seperti pesanan dengan pending payment, order selesai (completed), 
                permintaan refund, hingga order yang gagal. Selain itu, user juga dapat mengakses detail setiap order untuk melihat 
                informasi transaksi secara lengkap, mencari order berdasarkan Order ID, serta menerapkan berbagai filter untuk mempermudah 
                pengelompokan dan pencarian data order sesuai kebutuhan.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 id="addVoucher" class="text-2xl font-medium">Menerapkan Filter</h2>
            </div>
            <div class="flex justify-center">
                <img :src="order1" alt="img" class="w-180"> 
            </div>
            <p>
                Pada menu Order, pengguna dapat mengatur tampilan daftar pesanan sesuai kebutuhan dengan memanfaatkan fitur filter yang 
                tersedia di bagian atas daftar order. Melalui dropdown Status, pengguna dapat menyaring pesanan berdasarkan status order 
                seperti Pending Payment, Paid, Processing, Shipped, hingga Delivered. Selain itu, dropdown Payment memungkinkan penyaringan 
                berdasarkan status pembayaran, misalnya Pending, Paid, Failed, atau Refunded. Pengguna juga dapat memfilter pesanan berdasarkan 
                metode pembayaran melalui dropdown Methods, seperti Credit Card, Bank Transfer, Cash on Delivery, E-Wallet, dan metode lainnya. 
                Dengan kombinasi filter ini, pengguna dapat dengan mudah menampilkan daftar order yang paling relevan dan memantau proses 
                pesanan secara lebih efisien.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 id="addVoucher" class="text-2xl font-medium">Mencari Order</h2>
            </div>
            <div class="flex justify-center">
                <img :src="order2" alt="img" class="w-120"> 
            </div>
            <p>
                Selain menggunakan filter, pengguna juga dapat mencari order secara spesifik melalui fitur Search. Untuk melakukan 
                pencarian, masukkan Order ID pada kolom input pencarian yang berada di bagian kiri atas halaman Order. Setelah Order ID 
                dimasukkan, klik tombol Search di sebelah kanan untuk menampilkan data pesanan yang sesuai. Fitur ini memudahkan pengguna 
                dalam menemukan order tertentu dengan cepat tanpa perlu menelusuri seluruh daftar order.
            </p>
            <div class="w-full border-b-1 border-gray-200">
                <h2 id="addVoucher" class="text-2xl font-medium">Melihat Detail Order</h2>
            </div>
            <p>
                Pada menu Order, pengguna dapat melihat detail setiap transaksi dengan mengklik ikon mata <span class="inline-flex mx-1 bg-gray-200 p-1 rounded-xl"><EyeIcon class="h-4 w-4" /></span> 
                pada kolom Actions. Halaman detail order akan menampilkan informasi lengkap terkait pesanan tersebut, mulai dari 
                ringkasan order dan status pembayaran, daftar item yang dipesan beserta jumlah dan total harga, hingga informasi 
                pelanggan yang melakukan pemesanan. Selain itu, pengguna juga dapat melihat alamat pengiriman, alamat penagihan (billing), 
                serta metode pembayaran yang digunakan. Di bagian bawah, tersedia riwayat aktivitas pengiriman yang menunjukkan proses order 
                sejak dibuat hingga pembayaran diterima, sehingga pengguna dapat memantau alur dan status pesanan secara menyeluruh dalam 
                satu tampilan.
            </p>
        </div>
        <ScrollToTop />
    </AppShell>
</template>
