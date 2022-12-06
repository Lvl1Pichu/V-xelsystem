
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
        kronor = kronor % 100;
    const femtiolapp = parseInt(kronor / 50);
        kronor = kronor % 20;
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


// Vi vill ha ett värde och dela upp det i växel.
// Vi behöver ett inputfält där vi skriver in värdet
// Vi behöver skapa växel i alla valörer.
// 
// Vi behöver räkna ut skillnaden mellan priset och vad vi betalat och assigna det till paid.
//Så länge skillnaden mellan priset och det du betalade inte är 0 eller mindre än 0 körs koden.
// Om vi betalat mindre än priset informera användaren om att dem behöver betala mer!
