function reset_luas() {
    document.getElementById("form-alas").value = "";
    document.getElementById("form-tinggi").value = "";

    document.getElementById("rumus_luas").innerText = "";
    document.getElementById("output_luas").innerText = "";
}

function reset_keliling(){
    document.getElementById("form-sisi1").value = "";
    document.getElementById("form-sisi2").value = "";
    document.getElementById("form-sisi3").value = "";

    document.getElementById("rumus_keliling").innerText = "";
    document.getElementById("output_keliling").innerText = "";
}

function luas_segitiga() {
    if(index_eror = false){

    }
}

function display_luas(){
    var luasElement = document.getElementById("display_luas");

    if (luasElement.style.display === "block") {
        luasElement.style.display = "none";
    } else {
        luasElement.style.display = "block";
    }
}

function display_keliling() {
    var kelilingElement = document.getElementById("display_keliling");

    if (kelilingElement.style.display === "block") {
        kelilingElement.style.display = "none";
    } else {
        kelilingElement.style.display = "block";
    }
}

function eror_luas(){
    var alas = document.getElementById("form-alas");
    var tinggi = document.getElementById("form-tinggi");

    if (alas.value.trim() === "" || tinggi.value.trim() === "") {
        alert('Masukkan Angka Yang Valid!');
    }else if (parseFloat(alas.value) === 0 || parseFloat(tinggi.value) === 0) {
        alert('Alas atau tinggi segitiga tidak mungkin bernilai 0!');
    }else{
        var alas = parseFloat(document.getElementById("form-alas").value);
        var tinggi = parseFloat(document.getElementById("form-tinggi").value);
        var hasil = 0.5 * alas * tinggi;
        var rumus_luas = '&frac12; &times; ' + alas + ' &times; ' + tinggi;
    
        document.getElementById("rumus_luas").innerHTML = rumus_luas;    
        document.getElementById("output_luas").innerText = "Hasil perhitungan luas adalah " + hasil;
    }
}
function eror_keliling() {
    var sisi1 = document.getElementById("form-sisi1");
    var sisi2 = document.getElementById("form-sisi2");
    var sisi3 = document.getElementById("form-sisi3");

    if (sisi1.value.trim() === "" || sisi2.value.trim() === "" || sisi3.value.trim() === "") {
        alert('Masukkan Angka Yang Valid!');
    }else if (parseFloat(sisi1.value) === 0 || parseFloat(sisi2.value) === 0 || parseFloat(sisi3.value) === 0) {
        alert('Alas atau tinggi segitiga tidak mungkin bernilai 0!');
    }else{
        var sisi1 = parseFloat(document.getElementById("form-sisi1").value);
        var sisi2 = parseFloat(document.getElementById("form-sisi2").value);
        var sisi3 = parseFloat(document.getElementById("form-sisi3").value);
        var rumus_keliling = sisi1 + " + " + sisi2 + " + " + sisi3;
        var hasil = sisi1 + sisi2 + sisi3;

        document.getElementById("rumus_keliling").innerText = rumus_keliling;
        document.getElementById("output_keliling").innerText = "Hasil perhitungan keliling adalah " + hasil;
    }
}