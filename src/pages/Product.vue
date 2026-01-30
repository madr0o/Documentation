<script setup>
    import { Cog6ToothIcon, Cog8ToothIcon } from '@heroicons/vue/24/outline'
    import productInfo from '@/assets/product-1.png'
    import productList from '@/assets/product-2.png'
    import addProduct1 from '@/assets/product-3.png'
    import addProduct2 from '@/assets/product-4.png'
    import addProduct3 from '@/assets/product-5.png'
    import cns1 from '@/assets/product-6.png'
    import cns2 from '@/assets/product-7.png'
    import cns3 from '@/assets/product-8.png'
    import cns4 from '@/assets/product-9.png'
    import cns5 from '@/assets/product-10.png'
    import cns6 from '@/assets/product-11.png'
    import cns7 from '@/assets/product-12.png'
    import cns8 from '@/assets/product-13.png'
    import vob1 from '@/assets/product-14.png'
    import vob2 from '@/assets/product-15.png'
    import vob3 from '@/assets/product-16.png'
    import vob4 from '@/assets/product-17.png'
    import vob5 from '@/assets/product-18.png'
    import vob6 from '@/assets/product-19.png'
    import pricing1 from '@/assets/product-20.png'
    import pricing2 from '@/assets/product-21.png'
    import media1 from '@/assets/product-22.png'
    import media2 from '@/assets/product-23.png'
    import ao1 from '@/assets/product-24.png'
import ScrollToTop from '@/components/ScrollToTop.vue'
</script>

<template>
    <div class="flex justify-between pb-10 divide-x divide-gray-200">
        <div class="w-4/5 flex flex-col pr-3 justify-start gap-6">
            <div class="w-full border-b-1 border-gray-200 mb-2 ">
                <h1 class="text-3xl font-medium">Products</h1>
            </div>
            <p>Menu Product digunakan untuk mengelola seluruh data produk yang 
                tersedia dalam sistem. Melalui menu ini, pengguna dapat melihat 
                daftar produk, menambahkan produk baru, serta mengatur kategori, 
                varian, dan tag produk agar pengelolaan katalog menjadi lebih 
                terstruktur. Menu Product membantu memastikan informasi produk 
                tersusun rapi, mudah dikelola, dan siap digunakan untuk mendukung 
                proses penjualan maupun operasional bisnis.
            </p>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="productList" class="text-2xl font-medium">Product List</h2>
            </div>
            <p>Pada halaman Product List, pengguna dapat melihat daftar seluruh 
                produk yang tersedia dalam sistem secara terperinci. Informasi yang 
                ditampilkan mencakup data utama produk seperti nama produk, kategori, 
                SKU, harga, jumlah stok, status ketersediaan, serta varian produk 
                apabila tersedia. Melalui tampilan ini, pengguna dapat dengan mudah 
                memantau kondisi stok, memastikan status produk aktif atau tidak, 
                serta mengelola daftar produk secara menyeluruh dalam satu tampilan 
                terpusat. Halaman ini membantu pengguna dalam melakukan pengecekan 
                dan pengelolaan produk secara efisien tanpa perlu membuka detail 
                produk satu per satu.
            </p>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="addProduct" class="text-2xl font-medium">Add Product</h2>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img :src="addProduct2" alt="img" class="w-40 ">
            </div>
            <div class="flex flex-col justify-start gap-3">
                <p>Untuk menambahkan produk baru ke dalam sistem, pengguna dapat 
                    melakukannya melalui dua cara. Pertama, dengan menekan tombol 
                    <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">+ Add Product</span> yang tersedia pada halaman Product Management / 
                    Product List. Kedua, melalui menu sidebar di sisi kiri dengan 
                    memilih Products → Add Product. Kedua cara tersebut akan 
                    mengarahkan pengguna ke halaman formulir penambahan produk, 
                    di mana pengguna dapat mengisi informasi produk seperti detail 
                    produk, kategori, harga, stok, serta pengaturan lainnya sebelum 
                    menyimpan produk ke dalam sistem.</p>
            </div>
            <div class="border-b-1 border-gray-200 mb-2">
                <h2 id="stepByStep" class="text-xl font-medium">Add Product - Step by Step</h2>
            </div>
            <div class="flex flex-col justify-start gap-3">
                <div class="flex justify-center">
                    <img :src="addProduct3" alt="img" class="w-200">
                </div>
                <h3 id="productInfo" class="font-medium border-b-1 border-gray-100">1. Product Info</h3>
                <p>
                    Bagian Product Information digunakan untuk mengisi informasi dasar 
                    mengenai produk yang akan ditambahkan ke dalam sistem. Pada tahap ini, 
                    pengguna diminta untuk memasukkan data utama produk agar produk dapat 
                    dikenali dengan jelas oleh sistem maupun pengguna lain. Informasi yang 
                    diisikan meliputi nama produk, kode SKU (jika tersedia), deskripsi 
                    singkat, serta deskripsi lengkap produk. Data ini berperan penting 
                    sebagai identitas produk, membantu pelanggan memahami produk dengan 
                    cepat, serta mendukung pengelolaan dan pencarian produk di dalam sistem.
                </p>
            </div>
            <div class="flex flex-col justify-start gap-4">
                <div class="flex justify-center">
                    <img :src="cns1" alt="img" class="w-80">
                </div>
                <h3 class="font-medium border-b-1 border-gray-100">1.1 Category & Status</h3>
                <p>
                    Pada bagian Category & Status, pengguna dapat mengelompokkan 
                    produk ke dalam kategori yang sesuai agar pengelolaan produk 
                    menjadi lebih terstruktur dan mudah dikelola. Kategori dalam 
                    sistem terdiri dari Main Category dan Sub Category, di mana 
                    setiap produk akan ditempatkan pada Sub Category yang berada 
                    di bawah satu Main Category tertentu.
                </p>
                <div class="flex justify-center">
                    <img :src="cns2" alt="img" class="w-80">
                </div>
                <h3 class="font-medium border-b-1 border-gray-100">Menentukan Sub Category Produk</h3>
                <p>
                    Pengguna dapat menentukan sub category produk dengan dua cara. 
                    Pertama, dengan memilih sub category yang sudah tersedia melalui 
                    dropdown Category. Kedua, pengguna dapat menambahkan sub category 
                    baru secara langsung dengan menekan ikon ( + ) yang berada di sisi 
                    kanan field Category pada halaman Product Info. Cara ini memudahkan 
                    pengguna apabila sub category yang dibutuhkan belum tersedia saat 
                    proses penambahan produk.
                </p>
                <div class="flex justify-center">
                    <img :src="cns3" alt="img" class="w-50">
                </div>
                <h3 class="font-medium border-b-1 border-gray-100">Pembuatan Main Category</h3>
                <p>
                    Apabila produk termasuk dalam kategori utama yang benar-benar 
                    baru, pengguna dapat membuat Main Category terlebih dahulu 
                    melalui menu sidebar kiri dengan memilih Products → Category → 
                    Main Category. Pada halaman Main Category, pengguna dapat melihat 
                    daftar main category yang telah dibuat, lengkap dengan informasi 
                    jumlah sub category, jumlah produk, status, serta urutan tampilan 
                    kategori.
                </p>
                <p>
                    Untuk menambahkan main category baru, pengguna dapat menekan tombol 
                    <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">+ Add Main Category</span> yang tersedia di sisi kanan halaman. Main category 
                    yang berhasil dibuat akan otomatis tersedia dan dapat dipilih sebagai 
                    parent category pada saat pembuatan sub category.
                </p>
                <div class="flex justify-center">
                    <img :src="cns5" alt="img" class="w-190">
                </div>
                <h3 class="font-medium border-b-1 border-gray-100">Informasi Sub Category</h3>
                <p>
                    Di dalam menu Sub Category, sistem menampilkan daftar seluruh sub 
                    category yang telah dibuat beserta informasi main category induknya 
                    dan jumlah produk yang berada di dalam masing-masing sub category. 
                    Informasi ini membantu pengguna memahami struktur kategori produk 
                    dan distribusi produk secara keseluruhan.
                </p>
                <div class="flex justify-center">
                    <img :src="cns6" alt="img" class="w-40">
                </div>
                <h3 class="font-medium border-b-1 border-gray-100">Pembuatan Sub Category</h3>
                <p>
                    Pembuatan sub category dapat dilakukan melalui dua jalur. Pertama, saat 
                    proses penambahan produk pada <span class="font-bold">Step 1: Product Info</span>, pengguna dapat menekan 
                    tombol <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">+ Add Sub Category</span> di sebelah kanan field Category. Kedua, 
                    melalui menu sidebar kiri dengan memilih Products → Category → Sub Category, 
                    kemudian menekan tombol Add Sub Category.
                </p>
                <div class="flex justify-center">
                    <img :src="cns7" alt="img" class="w-80">
                </div>
                <p>
                    Saat membuat sub category, pengguna diwajibkan untuk menentukan Main Category 
                    sebagai induk dari sub category tersebut, lalu mengisi data yang dibutuhkan 
                    seperti nama sub category, deskripsi (opsional), gambar kategori (opsional), 
                    urutan tampilan, dan status aktif. Setelah disimpan, sub category tersebut 
                    akan langsung tersedia untuk digunakan pada proses penambahan produk.
                </p>
                <h3 class="font-medium border-b-1 border-gray-100">Tags Produk</h3>
                <p>
                    Tags digunakan untuk memberikan penanda tambahan pada produk agar 
                    lebih mudah dikelompokkan, dicari, dan difilter. Pada saat 
                    menambahkan atau mengedit produk, user dapat memilih Tags melalui 
                    dropdown yang tersedia di bagian Category & Status. Jika tag yang 
                    dibutuhkan sudah ada, user cukup memilihnya dari daftar tanpa perlu 
                    membuat ulang.
                </p>
                <div class="flex justify-center">
                    <img :src="cns8" alt="img" class="w-220">
                </div>
                <p>
                    Apabila tag belum tersedia, user dapat membuat tag baru melalui 
                    menu Tags yang berada di sidebar kiri pada menu Products. Di 
                    halaman Tags, user dapat melihat daftar tag yang sudah ada 
                    beserta informasi penggunaan, status, dan urutan tampil. Untuk 
                    menambahkan tag baru, klik tombol <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">+ Add Tag</span> di bagian kanan atas, 
                    lalu isi data yang diperlukan. Setelah tag berhasil dibuat, tag 
                    tersebut akan otomatis tersedia dan dapat dipilih pada dropdown 
                    Tags saat proses penambahan atau pengeditan produk.
                </p>
                <h3 id="vob" class="font-medium border-b-1 border-gray-100">2. Variants or Bundle</h3>
                <p>
                    Pada tahap ini, pengguna diarahkan ke menu Variants or Bundle 
                    setelah menyelesaikan Product Info. Halaman ini digunakan untuk 
                    menentukan apakah produk akan dibuat sebagai bundle (paket) atau 
                    sebagai produk dengan varian. Secara default, fitur bundle dalam 
                    kondisi nonaktif.
                </p>
                <div class="flex justify-center">
                    <img :src="vob1" alt="img" class="w-180">
                </div>
                <h3 class="font-medium border-b-1 border-gray-100">Mengaktifkan Product Bundle</h3>
                <p>
                    Pengguna dapat mengaktifkan fitur Enable Bundle yang berada di sisi 
                    kanan atas. Ketika diaktifkan, produk akan diperlakukan sebagai 
                    gabungan dari beberapa produk lain yang sudah ada di sistem. Sistem 
                    akan menampilkan informasi bahwa stok bundle dihitung otomatis 
                    berdasarkan ketersediaan stok komponen penyusunnya.
                </p>
                <div class="flex justify-center">
                    <img :src="vob2" alt="img" class="w-120">
                </div>
                <h3 class="font-medium border-b-1 border-gray-100">Daftar Bundle Components</h3>
                <p>
                    Setelah bundle diaktifkan, muncul bagian Bundle Components. Di sini 
                    pengguna dapat melihat daftar produk yang menjadi bagian dari bundle. 
                    Untuk menambahkan produk baru ke dalam bundle, pengguna dapat menekan 
                    tombol <span class="bg-white text-[#0D6C54] px-2 py-1 rounded-sm text-xs border-1 border-[#0D6C54]">+ Add Component</span> .
                </p>
                <div class="flex justify-center">
                    <img :src="vob3" alt="img" class="w-180">
                </div>
                <h3 class="font-medium border-b-1 border-gray-100">Detail Komponen Bundle</h3>
                <p>
                    Setiap komponen bundle menampilkan informasi seperti:
                </p>
                <ul class="list-disc pl-8">
                    <li>Nama produk</li>
                    <li>Varian yang dipilih</li>
                    <li>Jumlah produk per bundle</li>
                    <li>Stok produk</li>
                    <li>Jumlah bundle yang dapat dibuat</li>
                    <li>Status komponen</li>
                </ul>
                <p>
                    Pengguna juga dapat menghapus komponen dari bundle melalui ikon hapus.
                </p>
                <h3 class="font-medium border-b-1 border-gray-100">Variants</h3>
                <p>
                    Jika produk bukan bundle, pengguna dapat mengatur variasi produk 
                    pada bagian Variants & Combinations. Pada kondisi awal, sistem akan 
                    menampilkan informasi bahwa belum ada kombinasi varian yang dibuat, 
                    serta tombol <span class="bg-[#0D6C54] text-white px-2 py-1 rounded-sm text-xs">Setup Vairants</span> untuk memulai.
                </p>
                <div class="flex justify-center">
                    <img :src="vob4" alt="img" class="w-120">
                </div>
                <h3 class="font-medium border-b-1 border-gray-100">Memilih Variant Group</h3>
                <p>
                    Saat menekan Setup Variants, pengguna dapat memilih variant group yang sudah 
                    tersedia, seperti ukuran, warna, berat, atau atribut lainnya. Variant group 
                    ini sebelumnya dikelola melalui menu Variant Groups di sidebar.
                </p>
                <h3 class="font-medium border-b-1 border-gray-100">Panduan Setup Varian Combination</h3>
                <p>
                    Sistem menampilkan panduan singkat mengenai cara kerja varian, yaitu:
                </p>
                <ul class="list-decimal pl-8">
                    <li>Memilih satu atau lebih variant group</li>
                    <li>Menambahkan nilai pada setiap variant</li>
                    <li>
                        Sistem akan menggabungkan seluruh kemungkinan kombinasi secara otomatis setiap
                        kombinasi akan memiliki stok, SKU, dan harga masing-masing.
                    </li>
                </ul>
                <div class="flex justify-center">
                    <img :src="vob5" alt="img" class="w-180">
                </div>
                <h3 class="font-medium border-b-1 border-gray-100">Setup</h3>
                <p>
                    Pengguna memilih variant group yang akan digunakan (misalnya Pack (gr) dan Color). Variant group yang aktif akan ditampilkan sebagai penanda di bagian atas.
                </p>
                <p>
                    Setelah variant group dipilih, sistem secara otomatis membuat kombinasi varian. Setiap kombinasi ditampilkan sebagai satu item yang dapat diatur:
                </p>
                <ul class="list-disc pl-8">
                    <li>Stok per kombinasi</li>
                    <li>SKU (opsional)</li>
                    <li>Penyesuaian harga</li>
                    <li>Harga diskon khusus (opsional)</li>
                </ul>
                <p>Di bagian bawah, sistem menampilkan Total Stock yang dihitung otomatis dari seluruh kombinasi varian yang ada. Informasi ini membantu pengguna memastikan ketersediaan produk secara keseluruhan sebelum melanjutkan ke tahap berikutnya.</p>
                <div class="flex justify-center">
                    <img :src="vob6" alt="img" class="w-200">
                </div>
                <h3 class="font-medium border-b-1 border-gray-100">Mengatur Variant</h3>
                <p>
                    Menu Variant Groups pada sidebar menampilkan daftar seluruh variant group yang tersedia beserta jumlah variannya. Dari menu ini, pengguna juga dapat menambahkan atau mengelola variant group baru jika diperlukan.
                </p>
                <div class="flex justify-center">
                    <img :src="pricing1" alt="img" class="w-200">
                </div>
                <h3 id="pricing" class="font-medium border-b-1 border-gray-100">3. Pricing</h3>
                <p>
                    Pada tahap Pricing, pengguna mengatur harga jual dan aturan inventori untuk produk yang dibuat.
                </p>
                <p>
                   Pada bagian Pricing, pengguna mengisi Base Price sebagai harga dasar produk yang akan ditampilkan ke pelanggan. Jika produk memiliki potongan harga, pengguna dapat mengisi Discounted Price (opsional) untuk menampilkan harga setelah diskon. Tersedia juga opsi Charge tax on this product apabila produk dikenakan pajak. Sistem akan menampilkan ringkasan Base Price dan Final Price secara otomatis berdasarkan pengaturan yang dimasukkan. 
                </p>
                <p>
                    Selanjutnya pada bagian Inventory, pengguna menentukan Stock Quantity untuk produk. Apabila produk menggunakan varian, stok dapat dihitung otomatis dari total stok setiap kombinasi varian. Pengguna juga dapat mengatur Minimum Order sebagai jumlah pembelian minimum per transaksi, serta Maximum Order (opsional) untuk membatasi jumlah pembelian maksimal.
                </p>
                <div class="flex justify-center">
                    <img :src="pricing2" alt="img" class="w-200">
                </div>
                <p>
                    Di bagian bawah terdapat fitur Harga Grosir Produk (opsional) yang digunakan untuk menetapkan harga khusus berdasarkan jumlah pembelian. Pengguna dapat menentukan jumlah beli minimum, harga normal, serta nominal diskon, sehingga sistem akan menghitung harga grosir per barang secara otomatis. Pengguna dapat menambahkan beberapa skema harga grosir dengan menekan tombol Tambah Harga Grosir, atau menghapusnya jika tidak diperlukan.
                </p>
                <div class="flex justify-center">
                    <img :src="media1" alt="img" class="w-200">
                </div>
                <h3 id="media" class="font-medium border-b-1 border-gray-100">4. Media</h3>
                <p>
                    Pada tahap Images & Media, pengguna mengatur tampilan visual produk yang akan ditampilkan sebagai preview item di website. Media ini berperan penting untuk membantu pelanggan memahami bentuk, detail, dan kualitas produk sebelum melakukan pembelian.
                </p>
                <p>
                    Pada bagian Product Images, pengguna dapat mengunggah satu atau beberapa foto produk dengan cara drag and drop ke area yang tersedia atau melalui tombol Browse Image. Sistem merekomendasikan ukuran gambar 1200 × 1200 px (rasio 1:1) dengan ukuran file maksimal 5 MB agar tampilan produk optimal dan konsisten di halaman website.
                </p>
                <div class="flex justify-center">
                    <img :src="media2" alt="img" class="w-200">
                </div>
                <p>
                    Pada bagian Product Video, pengguna dapat menambahkan video produk sebagai media pendukung. Video dapat diunggah langsung melalui tombol Upload Video / Browse Video, atau dengan menyematkan YouTube URL. Video ini dapat digunakan untuk menampilkan detail produk secara lebih jelas, seperti cara penggunaan, fitur unggulan, atau tampilan produk dari berbagai sudut. Ukuran file video dibatasi hingga 20 MB dengan format yang didukung seperti MP4, AVI, MOV, WMV, FLV, dan WEBM.
                </p>
                <div class="flex justify-center">
                    <img :src="ao1" alt="img" class="w-100">
                </div>
                <h3 id="ao" class="font-medium border-b-1 border-gray-100">5. Add-Ons</h3>
                <p>
                    Pada tahap Add-ons & Extras, pengguna dapat menambahkan opsi tambahan berbayar yang bersifat opsional dan dapat dipilih oleh pelanggan saat membeli produk. Add-ons digunakan untuk memberikan layanan atau fitur tambahan di luar produk utama, seperti gift wrap, custom request, atau layanan ekstra lainnya.
                </p>
                <p>
                    Untuk menambahkan add-on, pengguna dapat menekan tombol Add Extra, yang akan menampilkan form Add Product Extra / Add-on. Pada form ini, pengguna perlu mengisi:
                </p>
                <ul class="list-disc pl-8">
                    <li>Add-on Name: Nama add-on yang akan ditampilkan kepada pelanggan.</li>
                    <li>Description: Deskripsi singkat mengenai add-on untuk menjelaskan fungsi atau manfaatnya.</li>
                    <li>Price: Harga tambahan yang akan dikenakan jika pelanggan memilih add-on tersebut.</li>
                </ul>
                <p>
                    Setelah seluruh data diisi, pengguna dapat menekan tombol Add Extra untuk menyimpan add-on, atau Cancel untuk membatalkan proses. Add-on yang berhasil ditambahkan akan tersedia sebagai opsi tambahan pada produk dan dapat dipilih oleh pelanggan saat melakukan pembelian.
                </p>
                <h3 id="ps" class="font-medium border-b-1 border-gray-100">6. Product Specifications</h3>
                <p>
                    Pada tahap Product Specifications, pengguna mengisi detail teknis produk yang berkaitan dengan satuan, berat, dimensi, serta pengaturan ketersediaan khusus. Informasi ini digunakan untuk mendukung perhitungan pengiriman, tampilan spesifikasi produk di website, serta fitur pre-order.
                </p>
                <p>
                    Pada bagian Specifications, pengguna dapat mengisi:
                </p>
                <ul class="list-disc pl-8">
                    <li>Unit untuk menentukan satuan penjualan produk.</li>
                    <li>Weight (grams) untuk berat produk yang digunakan dalam perhitungan ongkos kirim.</li>
                    <li>    
                        Length, Width, dan Height (cm) untuk menentukan dimensi produk.
                        Pengisian berat dan dimensi diperlukan agar sistem dapat menampilkan layanan pengiriman yang tersedia, seperti yang ditunjukkan pada informasi shipping availability.
                    </li>
                </ul>
                <p>
                    Selanjutnya pada bagian Pre-Order Settings, pengguna dapat mengaktifkan opsi Enable Pre-Order jika produk belum tersedia dan ingin dibuka untuk pemesanan terlebih dahulu. Setelah diaktifkan, pengguna dapat mengatur:
                </p>
                <ul class="list-disc pl-8">
                    <li>Available Date, yaitu tanggal produk mulai tersedia.</li>
                    <li>Pre-Order Duration (Days) untuk menentukan lama periode pre-order.</li>
                    <li>Pre-Order Limit (Optional) sebagai batas maksimum jumlah pre-order.</li>
                    <li>Pre-Order Note (Optional) untuk menambahkan catatan khusus, seperti estimasi pengiriman atau ketentuan tertentu.</li>
                </ul>
                <h3 id="rnp" class="font-medium border-b-1 border-gray-100">7. Review & Publish</h3>
                <p>
                    Pada tahap Review & Publish, pengguna melakukan peninjauan akhir terhadap seluruh data produk sebelum produk dipublikasikan dan ditampilkan di website. Halaman ini berfungsi sebagai ringkasan dari semua pengaturan yang telah dilakukan pada tahap-tahap sebelumnya.
                </p>
                <p>
                    Di bagian Product Information, sistem menampilkan informasi utama produk seperti nama, SKU, kategori, status, dan tag. Selanjutnya, bagian Variants & Combinations menunjukkan apakah produk memiliki varian atau tidak. Pada bagian Media, pengguna dapat melihat ringkasan jumlah gambar dan status video yang telah ditambahkan.
                </p>
                <p class="border-b-1 border-gray-200 pb-4">
                    Bagian Pricing menampilkan harga dasar dan harga akhir produk, sementara Inventory menunjukkan informasi stok, minimum order, dan batas maksimum pemesanan. Pada sisi kanan, bagian Summary merangkum fitur tambahan seperti jumlah add-ons, status bundle, dan pengaturan pre-order yang telah diaktifkan atau tidak.
                </p>
                <p>
                    Setelah proses Review & Publish selesai, pengguna memiliki dua pilihan tindakan akhir:
                </p>
                <div>
                    <ul class="list-disc pl-8">
                        <li>Save Draft</li>
                    </ul>
                    <p class="pl-8">
                        Digunakan untuk menyimpan produk sebagai draft tanpa mempublikasikannya ke website. Opsi ini cocok jika pengguna masih ingin melakukan pengecekan ulang atau melanjutkan pengisian data di lain waktu. Produk yang disimpan sebagai draft tidak akan terlihat oleh pelanggan.
                    </p>
                </div>
                <div>
                    <ul class="list-disc pl-8">
                        <li>Publish</li>
                    </ul>
                    <p class="pl-8">
                        Digunakan untuk langsung mempublikasikan produk setelah seluruh data dipastikan sudah benar. Produk yang dipublikasikan akan langsung aktif dan dapat ditampilkan di website sesuai dengan pengaturan yang telah ditentukan.
                    </p>
                </div>
                
                <p>
                    Dengan dua opsi ini, pengguna dapat menyesuaikan proses publikasi produk sesuai kebutuhan, baik menyimpannya terlebih dahulu atau langsung menayangkannya ke pelanggan.
                </p>
            </div>
        </div>
        <div class="w-1/5">
            <aside class="hidden xl:block w-64 pl-6 sticky top-24 self-start">
                <ul class="space-y-2 text-sm">
                    <li>
                        <a href="#productList" class="text-gray-600 hover:text-indigo-600">
                            Product List
                        </a>
                    </li>
                    <li>
                        <a href="#addProduct" class="text-gray-600 hover:text-indigo-600">
                            Add Product
                        </a>
                    </li>
                    <div class="pl-2 flex flex-col justify-start gap-2">
                        <li>
                            <a href="#stepByStep" class="text-gray-600 hover:text-indigo-600">
                                Step by Step
                            </a>
                        </li>
                        <div class="pl-2 flex flex-col justify-start gap-2">
                            <li>
                                <a href="#productInfo" class="text-gray-600 hover:text-indigo-600">
                                    Product Info
                                </a>
                            </li>
                            <li>
                                <a href="#vob" class="text-gray-600 hover:text-indigo-600">
                                    Variants or Bundle
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" class="text-gray-600 hover:text-indigo-600">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#media" class="text-gray-600 hover:text-indigo-600">
                                    Media
                                </a>
                            </li>
                            <li>
                                <a href="#ao" class="text-gray-600 hover:text-indigo-600">
                                    Add-Ons
                                </a>
                            </li>
                            <li>
                                <a href="#ps" class="text-gray-600 hover:text-indigo-600">
                                    Product Specifications
                                </a>
                            </li>
                            <li>
                                <a href="#rnp" class="text-gray-600 hover:text-indigo-600">
                                    Review & Publish
                                </a>
                            </li>
                        </div>
                    </div>
                </ul>
            </aside>
        </div>
    </div>
    <ScrollToTop />
</template>
