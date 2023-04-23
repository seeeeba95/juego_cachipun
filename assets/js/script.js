
//let piedra= 0;
//let papel= 1 ;
//let tijera= 2 ;  // estas variables no se si afectan y/o participan en algo xd

/* variables para letras
let piedra = String(0);
let papel = String(1);
let tijera = String(2);
*/


/* // funcion funcionando completa (numeros) xd, solo correjir lo que aparece en web, en vez de 0 "piedra"
function cachipun() {

    let numeroDeVeces = document.getElementById("nveces").value;  // traer la variable ingresada de las veces a realizar el cachipún
    let jugador = parseInt(document.getElementById("cachipunOpt").value); // traer la opcion que se escoje, piedra, papel o tijera
    let cpu = Math.floor(Math.random()*3); // crear un numero al azar de la computadora, para poder jugar
    let jugadorWin = 0; //veces que el jugador gana
    let cpuWin = 0; // veces que la computadora gana
    let empate = 0; // veces que empatas con la computadora
    let veces = 0; // variable creada para el for, con ella se logra que el for se repita la cantidad de veces que se indica en la variable "numeroDeVeces"
    console.log(jugador, cpu) //para poder ver las opciones de cada uno en consola

    document.getElementById("resultado").innerHTML = ""; // borramos la operacion anterior de la pantalla

    for (veces = 1; veces <= numeroDeVeces; veces++) { // si veces lo dejaba en cero, realizaba la accion una vez más siempre || acá indicamos que el ciclo se repetira siempre que "veces" sea menor hasta que el "veces" sea igual "numeroDeVeces" || por ultimo cada vez que esto ocurra se le sumara +1 a "veces"
        let cpu = Math.floor(Math.random()*3); //con esta variable logramos que la opcion de la cpu sea diferente cada vez que se juega

        if (jugador == cpu) { // condicion de si las opciones son iguales sea empate 
            empate++; // se suma +1 a empate
            //document.getElementById("resultado").innerHTML = "Empate";
            console.log("empate"); 


            } else if ( //condiciones para que gane el jugador
                (jugador == 0) && (cpu == 2) ||
                (jugador == 1) && (cpu == 0) ||
                (jugador == 2) && (cpu == 1)
            ) {
                jugadorWin++; // se suma +1 a playerWin
                //document.getElementById("resultado").innerHTML = "!Ganaste¡";
                console.log("gana el player")

            } else { // si las opciones no aparecen en empate, ni el donde gana el jugador, gana la computadora 
                cpuWin++; // se suma +1 a cpuWin
                //document.getElementById("resultado").innerHTML = "Gano la computadora...";
                console.log("gana la cpu");
            }

        //document.getElementById("resultado1").innerHTML = `player ${jugador} cpu ${cpu}`;  //como hacer para que salgan los nombres y no los numeros :c
        document.getElementById("resultado2").innerHTML = `Ganaste ${jugadorWin} veces, perdiste ${cpuWin} veces y empataron ${empate} veces`;  // escribimos en el html segun la cantidad de veces que ocurre cada opcion
        document.getElementById("resultado").innerHTML += `Resultado juego  ${(veces -1)+1} : Tú elegiste ${jugador} ,la computadora eligió ${cpu}. <br>`; // muestra el resultado de cada juego

    }
}
*/

  // funcion funcionando completa (letras) xd, se modifcan varias cosas para que salga "piedra" en vez de cero
function cachipun() {

    let numerodeveces = document.getElementById("nveces").value; 
    let opciones = ["piedra", "papel", "tijera"];
    let jugador = (document.getElementById("cachipunOpt").value);
    let cpu = opciones[Math.floor(Math.random()*opciones.length)];
    let playerWin = 0;
    let cpuWin = 0;
    let empate = 0;
    let veces = 0;
    console.log(jugador, cpu)

    document.getElementById("resultado").innerHTML = ""

    for (veces = 1; veces <= numerodeveces; veces++) {
        let opciones = ["piedra", "papel", "tijera"];
        let cpu = opciones[Math.floor(Math.random()*opciones.length)];


        if (jugador === cpu) {
            empate++;
            //document.getElementById("resultado").innerHTML = "Empate";
            console.log("empate");


            } else if (
                (jugador === "piedra") && (cpu === "tijera") ||
                (jugador === "papel") && (cpu === "piedra") ||
                (jugador === "tijera") && (cpu === "papel")
            ) {
                playerWin++;
                //document.getElementById("resultado").innerHTML = "!Ganaste¡";
                console.log("gana el player")

                } else 
                {
                    cpuWin++;
                    //document.getElementById("resultado").innerHTML = "Gano la computadora...";
                    console.log("gana la cpu");
                }

        //document.getElementById("resultado1").innerHTML = `player ${jugador} cpu ${cpu}`;  //como hacer para que salgan los nombres y no los numeros :c
        document.getElementById("resultado2").innerHTML = `Ganaste ${playerWin} veces, perdiste ${cpuWin} veces y empataron ${empate} veces`; 
        document.getElementById("resultado").innerHTML += "Resultado juego "+ `${(veces -1)+1} `+ " : Tú elegiste " + jugador +  ", la computadora eligió " + cpu + `<br>`;

    }   
};



/* intento funcion de repetir
function repetir() {
    let numerodeveces = document.getElementById("nveces").value; 
    let playerWin = 0;
    let cpuWin = 0;
    let empate = 0;

for (let i = 0; i <numerodeveces; i++) {
    let jugadorVeces = jugador ();
    let cpuVeces = cpu ();
    let total = cachipun(jugador, cpu);
    
    if (total === "!Ganaste¡") {
        playerWin++;

    } else if (total === "Gano la computadora...") {
        cpuWin++;
    
    } else {
        empate++;
    }
document.getElementById("resultado2").innerHTML = `Ganaste ${playerWin} veces, perdiste ${cpuWin} veces y empataron ${empate} veces`;  //como hacer para que salgan los nombres y no los numeros :c
}
}
*/

/* intento switch
    switch (jugador ,cpu) {
        
        case (jugador === cpu):
            document.getElementById("resultado").innerHTML = ("Empate");
            break;
        
        case ((jugador = 0) && (cpu = 1)):
            document.getElementById("resultado").innerHTML = ("CPU");
            break;

        case ((jugador = 0) && (cpu = 2)):
            document.getElementById("resultado").innerHTML = ("player");
            break;
        
        case ((jugador = 1) && (cpu = 0)):
            document.getElementById("resultado").innerHTML = ("player");
            break;

        case ((jugador = 1) && (cpu = 2)):
            document.getElementById("resultado").innerHTML = ("CPU");
            break;

        case ((jugador = 2) && (cpu = 0)):
            document.getElementById("resultado").innerHTML = ("CPU");
            break;
        
        case ((jugador = 2) && (cpu = 1)):
            document.getElementById("resultado").innerHTML = ("player");
            break;
    }
    document.getElementById("resultado1").innerHTML = `player ${jugador} cpu ${cpu}`;  //como hacer para que salgan los nombres y no los numeros :c

    }
*/

/* Codigo funcionando sin el for

function cachipun() {

    let numerodeveces = document.getElementById("nveces").value; 
    let jugador = parseInt(document.getElementById("cachipunOpt").value);
    let cpu = Math.floor(Math.random()*3);
    console.log(jugador, cpu)

        
    if (jugador == cpu) {
            document.getElementById("resultado").innerHTML = "Empate";
        console.log("empate");


    } else if (
        (jugador == 0) && (cpu == 2) ||
        (jugador == 1) && (cpu == 0) ||
        (jugador == 2) && (cpu == 1)
    ) {
        document.getElementById("resultado").innerHTML = "!Ganaste¡";
        console.log("gana el player")

    } else 
    {
        document.getElementById("resultado").innerHTML = "Gano la computadora...";
        console.log("gana la cpu");
    }

    document.getElementById("resultado1").innerHTML = `player ${jugador} cpu ${cpu}`;  //como hacer para que salgan los nombres y no los numeros :c
}
*/

