
function calculateChange() {
   const pris = document.getElementById("pris").value
   const kronor = document.getElementById("kronor").value;

   let change = kronor - pris

   if(change > 0){
    makeChange(change)
   }
   else{
    alert("You have to pay more!")
   }
}

function makeChange (kronor) {
    const hundraLappar = parseInt(kronor / 100);
        kronor = kronor % 100
    const tjugor = parseInt(kronor / 20);
        kronor = kronor % 20;
    const tior = parseInt(kronor / 10);
        kronor = kronor % 10;
    const femmor = parseInt(kronor / 5);
        kronor = kronor % 5;
    const enKronor = parseInt(kronor / 1);
        kronor = kronor % 1;
    
document.getElementById("enKronor").value = enKronor;
document.getElementById("femmor").value = femmor;
document.getElementById("tior").value = tior;
document.getElementById("tjugor").value = tjugor;
document.getElementById("hundraLappar").value = hundraLappar;
}