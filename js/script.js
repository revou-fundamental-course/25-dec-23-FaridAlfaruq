function luas_segitiga() {
    var alas = parseFloat(document.getElementById("form-alas").value);
    var tinggi = parseFloat(document.getElementById("form-tinggi").value);
    var hasil = 0.5 * alas * tinggi;
    var rumus_luas = '&frac12; &times; ' + alas + ' &times; ' + tinggi;

    document.getElementById("rumus_luas").innerHTML = rumus_luas;    
    document.getElementById("output_luas").innerText = "Hasil perhitungan luas adalah " + hasil;
}


function keliling_segitiga(){
    var sisi1 = parseFloat(document.getElementById("form-sisi1").value);
    var sisi2 = parseFloat(document.getElementById("form-sisi2").value);
    var sisi3 = parseFloat(document.getElementById("form-sisi3").value);
    var rumus_keliling = sisi1 + " + " + sisi2 + " + " + sisi3;
    var hasil = sisi1 + sisi2 + sisi3;

    document.getElementById("rumus_keliling").innerText = rumus_keliling;
    document.getElementById("output_keliling").innerText = "Hasil perhitungan keliling adalah " + hasil;
}

function display_luas(){
    var luasElement = document.getElementById("luas-segitiga");

    if (luasElement.style.display === "block") {
        luasElement.style.display = "none";
    } else {
        luasElement.style.display = "block";
    }
}

function display_keliling() {
    var kelilingElement = document.getElementById("keliling-segitiga");

    if (kelilingElement.style.display === "block") {
        kelilingElement.style.display = "none";
    } else {
        kelilingElement.style.display = "block";
    }
}