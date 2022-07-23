const dataLvl = 'dataLvl'

// Cek browser support localStorage tidak
if (typeof(Storage) !== 'undefined') {
    // Browser mendukung sessionStorage/localStorage.
    if(typeof(sessionStorage.getItem(dataLvl)) === 'object'){
        sessionStorage.setItem(dataLvl, 'mudah');
    }
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
} else {
    // Browser tidak mendukung sessionStorage/LocalStorage
    alert('Browsermu ga support session storage bro')

}