function myFunction() {
    var x = document.getElementsByClassName("header__Links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }