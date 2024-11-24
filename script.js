function hesaplaPuan() {
    const atıkTuru = document.getElementById("atık-turu").value;
    const miktar = parseFloat(document.getElementById("atık-miktarı").value);

    let puan = 0;
    if (atıkTuru === "kağıt") {
        puan = miktar * 10;
    } else if (atıkTuru === "plastik") {
        puan = miktar * 15;
    } else if (atıkTuru === "cam") {
        puan = miktar * 20;
    } else if (atıkTuru === "metal") {
        puan = miktar * 25;
    } else if (atıkTuru === "pil") {
        puan = miktar * 50;
    }

    alert("Kazandığınız puan: " + puan);
}
