const dataLvl = 'dataLvl';

function lvlMudah(){
    sessionStorage.setItem(dataLvl, 'mudah');
    window.location.assign(window.location.protocol);
}

function lvlSedang(){
    sessionStorage.setItem(dataLvl, 'sedang');
    window.location.assign(window.location.protocol);
}

function lvlSusah(){
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