document.querySelector("button").addEventListener("click", function () {
    var fn = parseInt(document.querySelector("#fn").value);
    var sn = parseInt(document.querySelector("#sn").value);
    var op = document.querySelector("#op").value;
    document.querySelector("#ans").innerHTML = calculate(fn,sn,op);
})
function calculate(fn,sn,op){
    if(op === "+"){
        return fn + sn ;
    }
    if(op === "-"){
        return fn - sn ;
    }
    if(op === "*"){
        return fn * sn ;
    }
    if(op === "/"){
        return fn / sn ;
    }
}