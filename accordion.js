function accordian(disp) {
    var hideem = document.getElementsByClassName("accordion-section");
    for(var i = 0; i < hideem.length; i++){
        hideem[i].style.display = "none";
    }
    if(document.getElementById(disp).style.display == "block"){
       var change = document.getElementById(disp).style.display = "none"
    }else{
        var change = document.getElementById(disp).style.display = "block"
    }
}

