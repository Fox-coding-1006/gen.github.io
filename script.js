let mass = window.prompt("Enter mass");
let sol = 299792458;

let energy = mass * sol;


document.getElementById("btnone").onclick = function(){
    document.getElementById("result").innerHTML = energy;
}