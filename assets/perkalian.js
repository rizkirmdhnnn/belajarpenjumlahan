let dalamDevelopment = false;
if(dalamDevelopment === true){
    alert('Dalam development')
    window.location.assign("/index.html")
} else {
    if(sessionStorage.getItem(dataLvl) === 'mudah') {
        function generateSoal(){
            soalMentah.number1 = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;
            soalMentah.number2 = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;
        }
    }
    if(sessionStorage.getItem(dataLvl) === 'sedang') {
        function generateSoal(){
            soalMentah.number1 = Math.floor(Math.random() * (100 - 10 + 1) ) + 10;
            soalMentah.number2 = Math.floor(Math.random() * (100 - 10 + 1) ) + 10;
        }
    }
    if(sessionStorage.getItem(dataLvl) === 'susah') {
        function generateSoal(){
            soalMentah.number1 = Math.floor(Math.random() * (-100 - 50 + 1) ) + 50;
            soalMentah.number2 = Math.floor(Math.random() * (100 - 50 + 1) ) + 50;
        }
    }
    const soalMentah = {
        number1 : '0',
        number2 : '0',
    }
    
    const jawabanMentah = {
        jawab : '0',
    }
    
    function updateSoal(){
        document.querySelector('#soal').innerText = soalMentah.number1 + ' X ' + soalMentah.number2
    }
    
    
    function getJawaban(){
        jawabanMentah.jawab = parseInt(soalMentah.number1) * parseInt(soalMentah.number2);
        console.log(jawabanMentah.jawab)
    }
    
    
    function jawab() {
        getJawaban()
        if(document.getElementById('jawaban').value === ''){
            alert('Jawab dulu dong jangan asal gas')
        } else {
            if(parseInt(document.getElementById('jawaban').value) === jawabanMentah.jawab){
                alert('yeyy pinter jawabannya bener')
                document.getElementById('jawaban').value = " "
                generateSoal();
                getJawaban()
                updateSoal();
            } else {
                alert('yah jawabannya masih salah nih, jawaban yang benar tuh ' + jawabanMentah.jawab );
                document.getElementById('jawaban').value = " "
                generateSoal();
                getJawaban()
                updateSoal()
            }
        }
    }
    generateSoal()
    getJawaban()
    updateSoal()
}

