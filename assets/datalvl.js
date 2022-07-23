const level = {
    mudah : true,
    sedang : false,
    susah : false,
}

function lvlMudah() {
    level.mudah = true;
    level.sedang = false;
    level.susah = false;
    alert('Berhasil merubah level menjadi level mudah')
}

function lvlSedang() {
    level.mudah = false;
    level.sedang = true;
    level.susah = false;
    alert('Berhasil merubah level menjadi level sedang')

}

function lvlSusah() {
    level.mudah = false;
    level.sedang = false;
    level.susah = true;
    alert('Berhasil merubah level menjadi level susah')

}
