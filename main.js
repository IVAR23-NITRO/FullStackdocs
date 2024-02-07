function sum() {
    var box1 = document.getElementById("1");
    var box2 = document.getElementById("2");
    var res = document.getElementById("result");
    var box1va = Number(box1.value);
    var box2va = Number(box2.value);
    var tot = box1va + box2va;
    res.textContent = tot;
}




