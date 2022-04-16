function doimucgia() {
    var arrgia = document.getElementsByName("gia");
    var obj = document.getElementById("mucgia");
    var mucgiadangchon = obj.value;
    for (var i = 0; i < arrgia.length; i++) {
        var gia = parseFloat(arrgia[i].innerText);
        if (gia < mucgiadangchon || mucgiadangchon == -1) {
            arrgia[i].parentNode.style.display = "";
        } else {
            arrgia[i].parentNode.style.display = "none";
        }
    }
    tongtien();
}
function tich1checkbox(i) {
    var arrSL = document.getElementsByName("soluong");
    arrSL[i].disabled = !arrSL[i].disabled;
    if (arrSL[i].disabled == true) {
        arrSL[i].value = "";
        arrSL[i].parentNode.nextElementSibling.innerText="";
       
    }
    
    tongtien();
}
function thanhtiens(a) {
    var soluong = a.value;
    var sum = a.parentNode.previousElementSibling.innerText;
    a.parentNode.nextElementSibling.innerText = soluong * Number(sum);
    tongtien();
    

}
function tongtien() {
    var money = 0;
    var arrThanhTien = document.getElementsByName("thanhtien");
    for (var i = 0; i < arrThanhTien.length; i++) {
        if (arrThanhTien[i].parentNode.style.display == "") {
            var tien = arrThanhTien[i].innerText;
            money += Number(tien);   
        }  
    } 
    document.getElementById("sum").innerText = money;
}