function checkform() {
  var loi = "";
  // kiem tra masv
  var masv = document.getElementById("masv");
  if (masv.value == "") {
    masv.className = "loi";
    loi += "Không được để trống mã sinh viên! <br>";

  } else if (masv.value.length != 7) {
    masv.className = "loi";
    loi += "Mã sinh viên phải đúng 7 ký tự! <br>";

  } 

  // kiem tra name
  var names = document.getElementById("name");
  if (names.value == "") {
    names.className = "loi";
    loi += "Không được để trống họ và tên! <br>";
  } else if (names.value.length >= 30) {
    names.className = "loi";
    loi += "Họ và tên không được dài hơn 30 kí tự! <br>";
  } 


  // kiem tra email
  var email = document.getElementById("email");
  if (email.value == "") {
    email.className = "loi";
    loi += "Không được để trống Email! <br>";
  } else if (email.value.length >= 30) {
    email.className = "loi";
    loi += "Email không được dài hơn 30 kí tự! <br>";
  } 

  // kiem tra gioi tính
  var count = 0;
  var gender = document.getElementsByName("slip");
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked == true)
      count++;
  }
  if (count == 0) {
    
    loi += "Phải chọn giới tính ! <br>";
  }

  // chon sở thích
  var flag= false;
  var hobby = document.getElementsByName("st");
  for( var i of hobby){
    if(i.checked) flag= true;

  }
  if(flag==false){
    loi+= "Vui lòng chọn ít nhất một sở thich! <br>";
  }
  // chọn quốc tịch

  var choose = document.getElementById("nationality");

  if(choose.value==0) {
    loi += "Vui lòng chọn quốc tịch! <br>";
   
  }else{
    choose.className = "natione";
  }

  // kiểm tra ghi chu
  var note = document.getElementById("note");
  if(note.value.length >=200) {
    loi+= "không được nhập quá 200 kí tự! <br>";
    note.className="loi";
  }




  if (loi != "") {
    document.getElementById("baoloi").innerHTML = loi;
  }else{
    document.getElementById("baoloi").innerHTML = "Successfully";
    document.getElementById("baoloi").style.color="green";
  }
  setTimeout("document.getElementById('baoloi').innerHTML=''",7000);


}

