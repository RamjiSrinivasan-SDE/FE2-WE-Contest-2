var Bookname = document.getElementById("BooknameInput");
var Issuance = document.getElementById("Issuedto");
var btn = document.getElementById("IssueButton");
var ol = document.getElementById("IssuedBookstopeople");


function addIssuedbooks() {
    //alert(todoValue.value);
    if (Bookname.value) {
      // we need to create a li
      var li = document.createElement("li");
      li.textContent = Bookname.value;
      ol.appendChild(li);
      Bookname.value = "";
    }
  }
  
alert("Hello PEOPLE")
btn.addEventListener("click",IssueButton );