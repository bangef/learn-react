[TOC]

# Javascript Variabel

Sebagian besar waktu, aplikasi JavaScript perlu bekerja dengan informasi. Berikut adalah dua contoh :

1. Toko Online - Informasinya mungkin termasuk barang yang dijual dan keranjang belanja.
2. Aplikasi Obrolan - Informasinya mungkin termasuk pengguna, pesan dan banyak lagi.

Variabel digunakan untuk menyimpan informasi ini.

## Variabel

Variabel adalah `penyimpanan bernama` untuk data. Kita dapat menggunakan variabel untuk menyimpan barang, pengunjung dan data lainnya.

Untuk membuat variabel dalam JavaScript, gunakan kata kunci `let`.

Pernyataan di bawah ini membuat (dengan kata lain : mendeklarasikan) variabel dengan nama `pesan` :

```js
let pesan;
```

Sekarang, ita dapat menambahkan sebuah data kedalamnya dengan menggunakan operator penugasan (assignment operator) `=` :

```js
let pesan;
pesan = 'Hello'; // Menyimpan string 'Hello ' kedalam variabel bernama pesan.
```

Sekarang string sudah tersimoan kedalam area memori yang terasosiasi dengan variabel. Kita dapat mengaksesnya menggunakan nama variabelnya :

```js
let pesan;
pesan = 'Hello';
alert(pesan);// Menampilkan konten dari variabel
```

Agar lebih ringnkas, kita dapat menggabungkan deklarasi variabel dan penugasan menjadi satu baris :

```js
let pesan = 'Hello';// Mendefinisikan variabel dan mengisi valuenya
alert(pesan);// Output alert : Hello
```

Kita juga dapat mendeklarasikan banyak variabel dalam 1 baris saja :

```js
let pengguna = 'Jhon', umur = 25, pesan = 'Hello';
```

## Analogi

Kita dapat dengan mudah  memahami konsep `variabel` jika kita membayangkannya sebagai `kotak` untuk data, dengan sticker bernama unik di atasnya.

Misalnya, variabel pesan dapat dibayangkan sebagai kotak berlabel `pesan` dengan nilai `Halo!` di dalamnya :

Kita dapat mengambil nilai di dalam kotak, Kita juga dapat mengubahnya beberapa kali dan kapan saja :

```js
let pesan = 'Hallo!';
pesan = 'World';// Nilai dirubah
alert(pesan);
```

Ketiaka nilainya berubah, nilai data lama dihapus dari variabel. Kita juga dapat mendeklarasikan 2 variabel dan menyalin data dari 1 ke 1nya lagi.

```js
let hello = 'Hello world!';

// Menyalin 'Hello world!' dari variabel hello ke variabel pesan
let pesan = hello;

//Sekarang 2 varibel memiliki data yang sama
alert(hello);
alert(pesan);
```

### <strong><span style="color:red;">#</span></strong> Mendeklarasikan dua kali memicu kesalahan

Variabel seharusnya di deklarasikan hanya sekali. Perulangan dekalarasi dalam variabel yang sama akan menampilkan sebuah error.

```js
let pesan = 'this';

//Perulangan 'let' mengarah ke kesalahan
let pesan = 'That';// SyntaxError: 'message' has already been declared
```

Jadi, kita seharusnya mendeklarasikan varibel sekali dan kemudian merujuknya dengan `let`.

### <strong><span style="color:blue;">#</span></strong> Functional Languages

Sangat menarik untuk dicatat bahwa ada bahasa pemrograman fungsional, seperti `Scala` dan `Erlang` yang melarang perubahan nilai variabel.

Dalam bahasa seperti itu, begitu disimpan `di dalam kotak`, nilainya akan tetap ada selamanya. Jika kita perlu menyimpan sesuatu yang lain, bahasa memaksa kita untuk membuat kotak baru (mendeklarasikan variabel baru). Kami tidak dapat menggunakan kembali yang lama.

Meskipun mungkin tampak sedikit aneh pada pandangan pertama, bahasa-bahasa ini cukup mampu berkembang secara serius. Lebih dari itu, ada area seperti komputasi pararel di mana keterbatasan ini memberikan manfaat tertentu. Mempelajari bahasa seperti itu (bahkan jika Anda tidak berencana untuk menggunakanya segera) disarankan untuk memperluas pikiran.

## Penamaan Variabel

Terdapat dua batasan dalam penamaan variabel javascript :

1. Penamaan hanya dapat mengandung huruf, angka atau simbol `$` dan `_`.
2. Penamaan karakter pertama tidak boleh mengandung angka.

Contoh penamaan yang benar :

```js
let userName;
let test1234;
```

Ketika penamaan variabel menganfung banyak kata, `camelCase` seringkali digunakan. Yaitu: kata pergi satu demi satu, setiap kata kecuali yang pertama dimulai dengan huruf kapita: `myVeryLongName`.

Apa yang menarik - tanda dolar `$` dan garis bawah `_`  juga dapat digunakan dalam nama. Mereka adalah simbol biasa, seperti huruf, tanpa arti khusus. 

Contoh penamaan yang benar :

```js
let $ = 1;// Mendeklarasikan varibel dengan penamaan variabel "$"
let _ = 2;// Mendeklarasikan varibel dengan penamaan variabel "_"
alert($ + _);// 3
```

Contoh penamaan yang tidak benar :

```js
let 1a;// tidak dapat diawali dengan angka
let my-name;// tanda hubung '-' tidak diperbolehkan dalam nama
```

### <strong><span style="color:blue;">#</span></strong> Masalah Kasus

Penamaan variabel `apple` dan `APPLE` adalah 2 variabel yang berbeda.

### <strong><span style="color:blue;">#</span></strong> Huruf non-latin diperbolehkan, tetapi tidak disarankan

Dimungkinkan untuk menggunakan bahassa apa pun, termasuk huruf cyrillic atau bahkan hieroglif, seperti ini :

```js
let имя = '...';
let 我 = '...';
```

Secara teknis, tidak ada kesalahan di sini. Nama seperti itu diperbolehkan, tetapi ada konvensi internasional untuk menggunakan bahasa Inggris dalam nama variabel. Bahlan jika kita menulis naskah kecil, itu mungkin akan berumur panjang. Orang - orang dari negara lain mungkin perlu membacanya beberapa saat.

### <strong><span style="color:red;">#</span></strong> Nama yang dipesan

Ada daftar kata - kata yang dicadangkan, yang tidak dapat digunakan sebagai nama variabel karena digunakan oleh bahasa itu sendiri.

Misalnya : `let`, `class`, `return` dan `function` dicadangkan.

Kode di bawah ini memberikan kesalahan sintaks :

```js
let let = 5;// Erorr, tidak dapat menggunakan 'let' sebagai nama variabel
let return = 5;// Erorr, tidak dapat menggunakan 'return' sebagai nama variabel
```

### <strong><span style="color:red;">#</span></strong> Penugasan tanpa penggunaan `use strict`

Biasanya, kita perlu mendefinisikan variabel sebelum menggunakannya. Tetapi di masa lalu, secara teknis dimngkinkan untuk membuat variabel hanya dengan menetapkan nilai tanpa menggunakan `let`. Ini masih berfungsi sekarang jika kami tidak menggunakan `use script` untuk menjaga kompatibilitas dengan skrip lama.

```js
//note: contoh jika tidak menggunakan 'use strict'
num = 5;// variabel 'num' dibuat jika tidak eksis
alert(num);//5
```

Ini adalah contoh tidak bagus dan akan menghasilkan error pada strict mode :

```js
"use strict"

num = 5;//error: num is not defined

alert(num);
```

## Konstanta

Untuk mendeklarasikan variabel konstan (tidak berubah), gunakan `const` alih-alih `let` :

```js
const ultahSaya = '18.04.1982';
```

Variabel yang dideklarasikan menggunakan `const` yang disebut 'konstanta'. `const` tidak dapat diisi ulang seperti `let` dan `var`. Apabila dilakukan akan mendapatkan error :

```js
const ultahSaya = '18.04.1982';

ultahSaya = '01.01.2001'; // error, can't reassign the constant!
```

Ketika seorang programmer yakin bahwa suatu variabel tidak akan pernah berubah, mereka dapat mendeklarasikannya dengan `const` untuk menjamin dan mengkomunikasikan fakta itu dengan jelas kepada kepada semua orang.

Variabel seharusnya di deklarasikan hanya sekali. Perulangan dekalarasi dalam variabel yang sama akan menampilkan sebuah error.

```js
let pesan = 'this';

//Perulangan 'let' mengarah ke kesalahan
let pesan = 'That';// SyntaxError: 'message' has already been declared
```

Jadi, kita seharusnya mendeklarasikan varibel sekali dan kemudian merujuknya dengan `let`.

### huruf besar konstanta

Ada praktik luas untuk menggunakan konstanta sebagai alias untuk nilai yang sulit diingat yang diketahui sebelum dieksekusi.

Konstanta tersebut diberi nama menggunakan huruf besar atau kapital dan garis bawah.

Misalnya, mari kita buat konstanta untuk warna dalam format yang disebut 'web' (heksadesimal) :

```js
const COLOR_RED = '#F00';
const COLOR_GREEN = '#0F0';
const COLOR_BLUE = '#00F';
const COLOR_ORANGE = '#FF7F00';

//...ketika kita membuatuhkan untuk memilih warna
let color = COLOR_ORANGE;
alert(color);// #FF7F00
```

Keuntungan :

- `COLOR_ORANGE` lebih mudah diingat dibandingkan dengan `#FF7F00`.
- Akan lebih mudah untuk typo atau mistype `#FF7F00` dibandingkan `COLOR_ORANGE`.
-  Ketika membaca kode, `COLOR_ORANGE` lebih mempunyai arti atau lebih menggabarkan dibandingkan dengan `#FF7F00`.


## Rangkuman :

Kita dapat mendeklarasikan varibale untuk menyimpan data dengan menggunakan kata kunci `var`, `let` atau `const`.

- `let` - adalah deklarasi modern variabel.
- `var` - adalah deklarasi model lama. Dan normalnya kita tidak akan menggunakanya lagi.
- `const` - sama seperti `let`, tapi nilai dari variabelnya tidak dapat digantikan(konstanta).

Variabel harus diberi nama dengan cara yang memungkinkan kita untuk dengan mudah memahami apa yang ada di dalamnya.

## Latihan :

1. Bekerja dengan variabel

   - Deklarasikan dua variabel : `admin` dan `nama`.
   - Masukan nilai `Jhon` ke variabel `nama`.
   - Menyalin nilai dari `nama` ke `admin`.
   - Tampilkan nilai dari variabel `admin` menggunakan method build-in `alert` dan harus menampilkan hasil : Jhon.

2. Berikan nama yang tepat

   - Buat variabel dengan nama dari planet kita. Bagaimana anda menuliskan variabelnya ?
   - Buat variabel untuk memasukan nama dari pengunjug website. Bagaimana anda menuliskan variabelnya ?

3. Tentukan Huruf besar untuk variabel const ?

   ```js
   const ultah = '18.04.1982';
   
   const umur = someCode(ultah);
   ```

   - Disini kita  mempunyai variabel tanggal `ultah` dan `umur` yang dikalkulasikan dari `ultah` dengan bantuan dari method `someCode()`.
   - Yang manakan yang benar untuk menggunakan huruf besar. Apakah variabel `ultah`? `umur`? atau keduanya ?

   
   
   ```js
   const BIRTHDAY = '18.04.1982'; // make uppercase?
   
   const AGE = someCode(BIRTHDAY); // make uppercase?
   ```
   
   