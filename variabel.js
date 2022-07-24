/* 
Dalam Javascript ada tiga buah jenis varibel :
    1. Var
        - Dapat diubah atau di-assign ulang
        - Scope Global
    2. Let
        - Dapat diubah atau di-assign ulang
        - Scope Function
    3. Const
        - Tidak dapat diubah atau nilai konstanta
        - Scope Function
*/
// VAR - Scope Global
var variabelVar = 'Ficri Hanip';

function cetak() {
    variabelVar = 'Diubah discope function';
    console.log(variabelVar);
}

// VAR - Scope Function
function insialisasiVar() {
    var vScopeFunction = 'Var Scope Function';
}
insialisasiVar();
vScopeFunction += ' Diubah discope global';
console.log(vScopeFunction);

// LET
let variabelLet = 'Ficri Hanip';

// function cetakLet() {
//     variabelLet = 'Diubah discope function';
//     console.log(variabelLet);
// }

// console.log('Diubah discope')