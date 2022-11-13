function sysvalidate() {
    var result_text = document.getElementById("result");
    var sys = document.getElementById("sys").value
    if (sys > 135) {
        result_text.innerHTML = "High Systolic Pressure"
        return;

    }

    else if (sys < 100) {
        result_text.innerHTML = "Low Systolic Pressure"
        return;
    }
     else{
        result_text.innerHTML = "Normal Blood Pressure"
        return;

    }
}

function diavalidate(){
    var result_text1 = document.getElementById("result1");
    var dia = document.getElementById("dia").value
    if (dia > 89) {
        result_text1.innerHTML = "High Diastolic Pressure"
        return;

    }

    else if (dia < 72) {
        result_text1.innerHTML = "Low Diastolic Pressure"
        return;
    }
     else {
        result_text1.innerHTML = "Normal Blood Pressure"
        return;

    }
}


function hbvalidate(){
    var resulthb= document.getElementById("hbresult")
    var hb=document.getElementById("hb").value
    if(hb>59 && hb<101){
        resulthb.innerHTML="Normal"
        return;
    }
    else{
        resulthb.innerHTML="Visit your nearest doctor"
        return;

    }
}

function bolvalidate(){
    var resultbol= document.getElementById("bolresult")
    var hb=document.getElementById("bol").value
    if(hb>94 && hb<101){
        resultbol.innerHTML="Normal"
        return;
    }
    else{
        resultbol.innerHTML="Visit your nearest doctor"
        return;

    }
}