const dataLvl = 'dataLvl';

function lvlMudah(){
    alert('Level mudah')
    sessionStorage.setItem(dataLvl, 'mudah');
    window.location.assign(window.location.protocol);
}

function lvlSedang(){
    alert('Level sedang')
    sessionStorage.setItem(dataLvl, 'sedang');
    window.location.assign(window.location.protocol);
}

function lvlSusah(){
    alert('Level susah')
    sessionStorage.setItem(dataLvl, 'susah');
    window.location.assign(window.location.protocol);
}

// Cek browser support localStorage tidak
if (typeof(Storage) !== 'undefined') {
    // Browser mendukung sessionStorage/localStorage.
    if(sessionStorage.getItem(dataLvl) == 'undefined'){
        alert('data blm ada')
    }
} else {
    // Browser tidak mendukung sessionStorage/LocalStorage

}