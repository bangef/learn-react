/**
 * TASK :
 * 1. Bekerja dengan variabel
 */
let admin, nama; // deklarasi dua variabel admin dan nama
nama = 'Jhon'; // assign Jhon ke variabel nama
admin = nama; // assign variabel nama ke variabel admin 
console.log('Admin : ', admin); // menampilkan di console 'admin : Jhon'

/**
 * TASK :
 * 2. Berikan nama yang tepat
 */
const OUR_PLANET = 'bumi'; // deklarasi variabel const dan assign varibal dengan nama planet kita
let ourVisitorWeb = 'Jhon'; // deklarasi variabel let dan assign variabel dengan nama visitor website kita

/**
 * Task :
 * 3. Tentukan Huruf besar untuk varibel const
 */
const d = new Date();
d.toLocaleDateString('id-ID', {
    timeZone: 'Asia/Jakarta'
});

const BIRTHDAY = '2022.06.23'; // make uppercase? yes

function someCode(params) {
    let dateBrithday = new Date(params);
    let dateNow = new Date();

    let sTahun = Math.abs(
        dateNow.getFullYear() - dateBrithday.getFullYear()
    );
    let sBulan = Math.abs(
        (dateNow.getMonth() + 1) - (dateBrithday.getMonth() + 1)
    );
    let sHari = Math.abs(
        dateNow.getDate() - dateBrithday.getDate()
    );

    console.log(`Selisih ${sTahun} Tahun ${sBulan} Bulan ${sHari} Hari`);
}

// const age = someCode(); // make uppercase?

someCode(BIRTHDAY);