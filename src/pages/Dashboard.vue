<template>
    <div class="flex justify-between pb-10">
        <div class="w-4/5 flex flex-col justify-start gap-6">
            <div class="w-full border-b-1 border-gray-200 mb-2 ">
                <h1 class="text-3xl font-medium">Dashboard</h1>
            </div>
            <p>Menu Dashboard berfungsi sebagai pusat pemantauan utama yang menampilkan ringkasan seluruh aktivitas dan performa 
                sistem secara menyeluruh. Melalui dashboard ini, pengguna dapat memonitor kondisi bisnis, transaksi, produk, pelanggan, 
                serta aktivitas operasional lainnya secara real-time dalam satu tampilan terintegrasi.
            </p>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="dataFilter" class="text-2xl font-medium">Data Filter</h2>
            </div>
            <div class="w-full flex justify-center">
                <img :src="dateFilter" alt="img" class="w-100">
            </div>
            <p>Pada bagian atas dashboard terdapat filter periode waktu yang digunakan untuk menentukan rentang data yang 
                ditampilkan. Pengguna dapat memilih periode seperti 7 Minggu Terakhir, 30 Hari Terakhir, atau 12 Bulan Terakhir. 
                Seluruh data dan grafik pada dashboard akan menyesuaikan secara otomatis berdasarkan periode yang dipilih, sehingga 
                memudahkan analisis dalam jangka waktu tertentu.
            </p>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="summaryCards" class="text-2xl font-medium">Summary Cards</h2>
            </div>
            <div class="w-full flex justify-center">
                <img :src="summaryCards" alt="img" class="w-200 ">
            </div>
            <div class="flex flex-col justify-start gap-3">
                <p>Dashboard menampilkan beberapa kartu ringkasan yang berfungsi untuk memberikan gambaran cepat mengenai kondisi sistem, antara lain:</p>
                <ul class="list-disc pl-8">
                    <li>Unit: jumlah unit atau cabang yang terdaftar</li>
                    <li>Produk: total produk yang tersedia</li>
                    <li>Member: jumlah member atau pelanggan terdaftar</li>
                    <li>Transaksi Tertunda: jumlah transaksi yang belum diselesaikan</li>
                </ul>
                <p>Ringkasan ini membantu pengguna memahami kondisi umum sistem secara sekilas tanpa perlu membuka menu lain.</p>
            </div>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="earningReports" class="text-2xl font-medium">Earning Reports</h2>
            </div>
            <div class="w-full flex justify-center">
                <img :src="earningReports" alt="img" class="w-160">
            </div>
            <div class="flex flex-col justify-start gap-3">
                <p>Bagian Earning Reports menyajikan laporan performa bisnis dalam bentuk grafik batang. Pengguna dapat berpindah antar kategori data seperti:</p>
                <ul class="list-disc pl-8">
                    <li>Order</li>
                    <li>Sales</li>
                    <li>Profit</li>
                    <li>Income</li>
                </ul>
                <p>Grafik ini digunakan untuk memantau performa berdasarkan waktu dan membandingkan aktivitas bisnis dari periode ke periode.</p>
            </div>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="revenueGrowth" class="text-2xl font-medium">Revenue Growth</h2>
            </div>
            <div class="w-full flex justify-center">
                <img :src="revenueGrowth" alt="img" class="w-80">
            </div>
            <div class="flex flex-col justify-start gap-3">
                <p>Panel Revenue Growth menampilkan informasi pertumbuhan pendapatan 
                    dalam periode tertentu. Data disajikan dalam bentuk nilai total 
                    pendapatan dan persentase perubahan. Bagian ini membantu pengguna 
                    memantau apakah pendapatan mengalami peningkatan, penurunan, 
                    atau stagnan.</p>
            </div>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="popularProduct" class="text-2xl font-medium">Popular Product</h2>
            </div>
            <div class="w-full flex justify-center">
                <img :src="popularProduct" alt="img" class="w-140">
            </div>
            <div class="flex flex-col justify-start gap-3">
                <p>Bagian Produk Terpopuler menampilkan daftar produk yang paling banyak terjual berdasarkan aktivitas pengguna. Informasi yang ditampilkan meliputi:</p>
                <ul class="list-disc pl-8">
                    <li>Nama produk</li>
                    <li>Harga produk</li>
                    <li>Jumlah produk terjual</li>
                    <li>Peringkat produk berdasarkan jumlah item yang terjual</li>
                </ul>
                <p>Fitur ini membantu pengguna mengidentifikasi produk dengan performa terbaik untuk mendukung strategi penjualan atau promosi.</p>
            </div>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="paymentMethod" class="text-2xl font-medium">Payment Method</h2>
            </div>
            <div class="w-full flex justify-center">
                <img :src="paymentMethod" alt="img" class="w-100">
            </div>
            <div class="flex flex-col justify-start gap-3">
                <p>Panel Pembelian menampilkan visualisasi metode pembayaran
                     yang digunakan oleh pelanggan dalam bentuk grafik donat.
                      Informasi ini menunjukkan distribusi transaksi berdasarkan
                       metode pembayaran, serta total jumlah transaksi, sehingga
                        pengguna dapat memahami preferensi pembayaran pelanggan.</p>
            </div>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="voucherUsage" class="text-2xl font-medium">Voucher Usage</h2>
            </div>
            <div class="w-full flex justify-center">
                <img :src="voucherUsage" alt="img" class="w-140">
            </div>
            <div class="flex flex-col justify-start gap-3">
                <p>Bagian Voucher Usage menampilkan data penggunaan voucher oleh pelanggan. Grafik dan daftar voucher menunjukkan:</p>
                <ul class="list-disc pl-8">
                    <li>Total voucher yang digunakan</li>
                    <li>Voucher yang paling sering digunakan</li>
                    <li>Persentase penggunaan masing-masing voucher</li>
                </ul>
                <p>Informasi ini berguna untuk mengevaluasi efektivitas promo atau kampanye yang sedang berjalan.</p>
            </div>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="lowestProduct" class="text-2xl font-medium">Lowest Product</h2>
            </div>
            <div class="w-full flex justify-center">
                <img :src="lowestProduct" alt="img" class="w-100">
            </div>
            <div class="flex flex-col justify-start gap-3">
                <p>Panel Produk Terendah menampilkan daftar produk dengan performa 
                    terendah atau yang paling banyak mendapatkan keluhan. Informasi 
                    yang ditampilkan mencakup nama produk, harga, dan stok. Bagian 
                    ini membantu pengguna dalam mengidentifikasi produk yang perlu 
                    dievaluasi lebih lanjut.</p>
            </div>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="totalCustomerSpent" class="text-2xl font-medium">Total Customer Spent</h2>
            </div>
            <div class="w-full flex justify-center">
                <img :src="totalSpent" alt="img" class="w-180">
            </div>
            <div class="flex flex-col justify-start gap-3">
                <p>Bagian Total Customer Spent menampilkan statistik total pengeluaran seluruh pelanggan. Selain total pengeluaran, ditampilkan juga:</p>
                <ul class="list-disc pl-8">
                    <li>Rata-rata pengeluaran per pelanggan</li>
                    <li>Daftar pelanggan dengan nilai transaksi tertinggi</li>
                </ul>
                <p>Grafik ini membantu pengguna mengenali pelanggan dengan kontribusi terbesar terhadap pendapatan.</p>
            </div>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="newActivity" class="text-2xl font-medium">New Activity</h2>
            </div>
            <div class="w-full flex justify-center">
                <img :src="newActivity" alt="img" class="w-200">
            </div>
            <div class="flex flex-col justify-start gap-3">
                <p>Bagian Aktivitas Terbaru menampilkan ringkasan aktivitas operasional terkini dalam bentuk kartu, seperti:</p>
                <ul class="list-disc pl-8">
                    <li>Transaksi pending</li>
                    <li>Promo aktif</li>
                    <li>Chat aktif</li>
                    <li>Order hari ini</li>
                    <li>Revenue hari ini</li>
                    <li>Customer baru</li>
                    <li>Status order (diproses, dikirim, selesai, dibatalkan)</li>
                    <li>Informasi stok rendah</li>
                </ul>
                <p>Bagian ini berfungsi sebagai monitoring cepat terhadap aktivitas harian dan kondisi operasional sistem.</p>
            </div>
        </div>
        <div class="w-1/5">
            <aside class="hidden xl:block w-64 pl-6 sticky top-24 self-start">
                <ul class="space-y-2 text-sm">
                    <li>
                        <a href="#dataFilter" class="text-gray-600 hover:text-indigo-600">
                            Data Filter
                        </a>
                    </li>
                    <li>
                        <a href="#summaryCard" class="text-gray-600 hover:text-indigo-600">
                            Summary Cards
                        </a>
                    </li>
                    <li>
                        <a href="#earningReports" class="text-gray-600 hover:text-indigo-600">
                            Earning Reports
                        </a>
                    </li>
                    <li>
                        <a href="#revenueGrowth" class="text-gray-600 hover:text-indigo-600">
                            Revenue Growth
                        </a>
                    </li>
                    <li>
                        <a href="#popularProduct" class="text-gray-600 hover:text-indigo-600">
                            Popular Product
                        </a>
                    </li>
                    <li>
                        <a href="#paymentMethod" class="text-gray-600 hover:text-indigo-600">
                            Payment Method
                        </a>
                    </li>
                    <li>
                        <a href="#lowestProduct" class="text-gray-600 hover:text-indigo-600">
                            Lowest Product
                        </a>
                    </li>
                    <li>
                        <a href="#totalCustomerSpent" class="text-gray-600 hover:text-indigo-600">
                            Total Customer Spent
                        </a>
                    </li>
                    <li>
                        <a href="#newActivity" class="text-gray-600 hover:text-indigo-600">
                            New Activty
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    </div>
</template>

<script setup>
    import dateFilter from '@/assets/dashboard-1.png'
    import summaryCards from '@/assets/dashboard-2.png'
    import earningReports from '@/assets/dashboard-3.png'
    import revenueGrowth from '@/assets/dashboard-4.png'
    import popularProduct from '@/assets/dashboard-5.png'
    import paymentMethod from '@/assets/dashboard-6.png'
    import voucherUsage from '@/assets/dashboard-7.png'
    import lowestProduct from '@/assets/dashboard-8.png'
    import totalSpent from '@/assets/dashboard-9.png'
    import newActivity from '@/assets/dashboard-10.png'
</script>