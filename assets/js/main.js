const map2 = [
    "H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H",
    "H* *           * * *             * *   *H",
    "H* *             W                 *   *H",
    "H*                           *     *   *H",
    "H*         *                       *   *H",
    "H*   * * * *             *         *   *H",
    "H*     *     * *       *   *       *   *H",
    "H*   * I o   * *         *   * * * *   *H",
    "H*     *     * *   * *  **           I *H",
    "H*   *          *        *         * * *H",
    "H*           * ***   *   *     *   * * *H",
    "H*       *      *        * *       * * *H",
    "H*     * *             ***         * * *H",
    "H* *   *           *     *         *   *H",
    "H*     *   *      *      *     *       *H",
    "H* *        *     *      *         *   *H",
    "H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H"];

const map3 = [
    "*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*",
    "* *                                 *             * * * *",
    "* *   *                             *       *       * * *",
    "*   *   *            *              *     * *     *     *",
    "*         *           * *           * * *       *   *   *",
    "*     * *       *           *       *   *     *     *   *",
    "*   *                       *       *   *   *       *   *",
    "* *                             *   *   I          W* * *",
    "* *              **     * *                             *",
    "* *             *     I           *                     *",
    "*               *   *         *                     *   *",
    "*   *   *     *       *   *                             *",
    "*     *                             *                   *",
    "*       * *        *    *   *     * * *           *     *",
    "*       * *                         *     *       *     *",
    "* *             *       *       *                       *",
    "*       *     *       *   * *     *     *   * *         *",
    "*     *           *  o*   * *   *   *       * * *       *",
    "* * *      *          * *         *   *             * * *",
    "*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*"];

const map4 = [
    "*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H",
    "* * * * * * * * * * *                                          H",
    "*       *  *  *       * *                                W*    H",
    "*               *     * * *           *                   I    H",
    "* *       *               * *                                  H",
    "*    *    * *   I           * *         *   *                  H",
    "*                   ****      * * * *   *     *         *      H",
    "*         *                 *           *   *                  H",
    "*       *                 *   *                                H",
    "*         *   *         *       *   *                          H",
    "*             *         *                                      H",
    "* *                ** *                                   *    H",
    "*                **         * *                                H",
    "*  **   *   *  **                     * *                 * *  H",
    "* *   *   *   *       * *                   * *           * *  H",
    "*                                         *   *                H",
    "*               *     *               ***   * *                H",
    "*             *               *                                H",
    "*                       *         * *                          H",
    "*o  *       *           *       * *                           *H",
    "* * *           *                                         *    H",
    "* * * *                                  *                *    H",
    "*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H"];

const map5 = [
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
    "H*   o       * **  ** *                                  *****   H",
    "H   *                                                        *   H",
    "H   *           **                                           *   H",
    "H  ** **************         **             ****             *   H",
    "H  **          *           * *                              I*  *H",
    "H  **                                        *                   H",
    "H  *****************                         ****                H",
    "H      *************                                             H",
    "H    ***************   *   W                                     H",
    "H           ** **      **  **                                    H",
    "H                     *    **                                    H",
    "H *                  *******                                     H",
    "H  *****            **                                      W    H",
    "H  ***        **  **          *                            ***   H",
    "H****************************************************************H",
    "H  I  **       *           * *                             ***   H",
    "H*            *                    ** * * * *       *      ***   H",
    "H              *        *                           *       *    H",
    "H   *                  ** *                         *    W       H",
    "H*  **                  *           *             *              H",
    "H*  ****                   *                 *    *          *** H",
    "H*  *******                *                ****  **             H",
    "H*  ****                  **                ***   ****           H",
    "H*  ***       *         W                   *****     *******    H",
    "H**  *        **    *                        ***  ***********    H",
    "H**    **                                    ****************    H",
    "H**     ** *****       *  *****                 **               H",
    "H          *    * ** **    ****                   *              H",
    "H** W****************    * ****                    *      *******H",
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"];

const map6 = [
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
    "H                               W                     W         H",
    "H        *                                       *              H",
    "H  *                    *                            *          H",
    "H                                             *                 H",
    "H                                                 *        *    H",
    "H  *                         W            *         *           H",
    "H         *                                    *            *   H",
    "H                                     *                      *  H",
    "H                                          *                  I H",
    "H        *                             *                       WH",
    "H *            *       *                                        H",
    "H                                                               H",
    "H                                                  *            H",
    "H   *               **W*************W********             *     H",
    "H         *         *                       *                   H",
    "H                   *   ******W**********   *                  *H",
    "H                   *   *               *   *       *           H",
    "H                   *   *   **********  *   W                   H",
    "H                   *   W   *        *  *   *                   H",
    "H        *          *   *   *        I  *   *                   H",
    "H  *                *   *   ******** *  *   *    W              H",
    "H                   *   *            *  W   *        *          H",
    "H                   *   **************  *   W               *** H",
    "H         *         *                   *   *               **  H",
    "H    *              *********************   *        *          H",
    "H         *                                 *        *        W H",
    "H *                                         *        *        * H",
    "H     *       ***W*********W****W****W*******        *******  * H",
    "Ho *                                                            H",
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"];

const map1 =[
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
    "H                                               H",
    "H                                               H",
    "H      **o        ***                **W        H",
    "H                 ***                 *         H",
    "H                 *              *              H",
    "H                 *                     *       H",
    "H    *  *                     *   *     *       H",
    "H     * *                    **** *             H",
    "H     *                                 *       H",
    "H                                      **       H",
    "H                       **            **        H",
    "H                         *                     H",
    "H             ** *       ***                    H",
    "H             ***                               H",
    "H             **                  **            H",
    "H      **                         **            H",
    "H      **                         *             H",
    "H        *            **                        H",
    "H                    ***                        H",
    "H                   * **                        H",
    "H                                               H",
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"];

let mapas = [map1, map2, map3, map4, map5, map6];
let mapa = mapas[0];

let celdas = new Array(mapa.length);
for (let i = 0 ; i<mapa.length ; i++){
    celdas[i]= new Array(mapa[0].length);
}

let tablero = document.getElementById("tablero");
function crearTablero(nFilas, nColumnas){
    while(tablero.childNodes.length >= 1){
       tablero.removeChild(tablero.firstChild);
    }
    tablero.border = "1";
    for(let i = 0; i < nFilas; i++){
        let fila = document.createElement('tr');
        for(let j = 0; j < nColumnas; j++){
            let columna = document.createElement('td');
            if(mapa[i][j] == "*"){
                columna.setAttribute("class", "pared");
            }
            else if(mapa[i][j] == "H" || mapa[i][j] == " "){
                columna.setAttribute("class", "vacio");
            }
            else if(mapa[i][j] == "o"){
                columna.setAttribute("class", "inicio");
                actual = {x:i, y:j, direccion:"arriba"};
            }
            else if(mapa[i][j] == "I"){
                columna.setAttribute("class", "portal");
            }
            else if(mapa[i][j] == "W"){
                columna.setAttribute("class", "fin");
            }
            fila.appendChild(columna);
            celdas[i][j] = columna;
        }
        tablero.appendChild(fila);
    }
}
let cont = 0;
document.addEventListener("keydown", mover);
function mover(e){
    e.preventDefault();
    let x = actual.x;
    let y = actual.y;
    let xInicio = x;
    let yInicio = y;
    let direccion = actual.direccion;
    let siguiente;
    if(e.keyCode == 38){ //arriba
        siguiente = mapa[x-1][y];
        if(siguiente == "H"){
            crearTablero(mapa.length, mapa[0].length);
            tablero.appendChild(btn2);
        }
        if(celdas[x-1][y].className == "fin"){
            alert("Ganaste. Nivel terminado");
            cont++;
            mapa = mapas[cont];
            crearTablero(mapa.length, mapa[0].length);
            tablero.appendChild(btn2);
            return;
        }
        else if(siguiente == " " || siguiente == "o"){
            celdas[x][y].className = "vacio";
            actual.x = x-1;
            celdas[actual.x][y].className = "imagen";
        }
        else if(siguiente == "*" || siguiente == "H"){
            clearTimeout(t);
            return;
        }
    }
    else if(e.keyCode == 39){ //derecha
        siguiente = mapa[x][y+1];
        if(siguiente == "H"){
            crearTablero(mapa.length, mapa[0].length);
            tablero.appendChild(btn2);
        }
        if(celdas[x][y+1].className == "fin"){
            alert("Ganaste. Nivel terminado");
            cont++;
            mapa = mapas[cont];
            crearTablero(mapa.length, mapa[0].length);
            tablero.appendChild(btn2);
            return;
        }
        else if(siguiente == " " || siguiente == "o"){
            celdas[x][y].className = "vacio";
            actual.y = y+1;
            celdas[x][actual.y].className = "imagen";
        }
        else if(siguiente == "I"){
            let bandera = false;
            celdas[x][y].className = "vacio";
            for(let i in celdas){
                for(let j in celdas[0]){
                    if(mapa[i][j] == "I"){
                        actual.x = i;
                        j = parseInt(j) + 1;
                        actual.y = j;
                        console.log(actual);
                        bandera = true;
                        break;
                    }
                }
                if(bandera){
                    break;
                }
            }
            celdas[actual.x][actual.y].className = "imagen";
        }
        else if(siguiente == "*" || siguiente == "H"){
            clearTimeout(t);
            return;
        }
    }
    else if(e.keyCode == 40){ //abajo
        siguiente = mapa[x+1][y];
        if(siguiente == "H"){
            crearTablero(mapa.length, mapa[0].length);
            tablero.appendChild(btn2);
        }
        if(celdas[x+1][y].className == "fin"){
            alert("Ganaste. Nivel terminado");
            cont++;
            mapa = mapas[cont];
            crearTablero(mapa.length, mapa[0].length);
            tablero.appendChild(btn2);
            return;
        }
        else if(siguiente == " " || siguiente == "o"){
            celdas[x][y].className = "vacio";
            actual.x = x+1;
            celdas[actual.x][y].className = "imagen";
        }
        else if(siguiente == "*" || siguiente == "H"){
            clearTimeout(t);
            return;
        }
    }
    if(e.keyCode == 37){ //izquierda
        siguiente = mapa[x][y-1];
        if(siguiente == "H"){
            crearTablero(mapa.length, mapa[0].length);
            tablero.appendChild(btn2);
        }
        if(celdas[x][y-1].className == "fin"){
            alert("Ganaste. Nivel terminado");
            cont++;
            mapa = mapas[cont];
            crearTablero(mapa.length, mapa[0].length);
            tablero.appendChild(btn2);
            return;
        }
        else if(siguiente == " " || siguiente == "o"){
            celdas[x][y].className = "vacio";
            actual.y = y-1;
            celdas[x][actual.y].className = "imagen";
        }
        else if(siguiente == "*" || siguiente == "H"){
            clearTimeout(t);
            return;
        }
        else if(siguiente == "I"){
            let bandera = false;
            celdas[x][y].className = "vacio";
            for(let i in celdas){
                for(let j in celdas[0]){
                    if(mapa[i][j] == "I" && j != y - 1){
                        actual.x = i;
                        j = parseInt(j) - 1;
                        actual.y = j;
                        console.log(actual);
                        bandera = true;
                        break;
                    }
                }
                if(bandera){
                    break;
                }
            }
            celdas[actual.x][actual.y].className = "imagen";
        }
    }

    t = setTimeout(function(){mover(e)}, 100);
}
//Jugar
let btn2 = document.createElement("button");
	let btnText = document.createTextNode("Menú");
	btn2.setAttribute("id","btnMenu2")
	btn2.appendChild(btnText);
document.getElementById("start-button").addEventListener("click", function(e){
  //$("#start-button").click(function(e){
    mapa = mapas[cont];
	e.preventDefault();
    document.getElementById("menu").setAttribute("class","ocultar");
    crearTablero(mapa.length, mapa[0].length);
	tablero.appendChild(btn2);
	btnMenu2.onclick= function(){
       cont = 0;
        document.getElementById("menu").setAttribute("class","textIns");
        while(tablero.childNodes.length >= 1){
       tablero.removeChild(tablero.firstChild);
    }
	}
});
// Instrucciones del juego
document.getElementById("instrucciones").addEventListener("click", function(e){
  //$("#instrucciones").click(function(e){
	e.preventDefault();
	document.getElementById("menu").setAttribute("class","ocultar");
	let abrirText=document.getElementById("texto");
	let title = document.createElement("H4")
	let h4 = document.createTextNode("Instrucciones")
	let text = document.createElement("P");
	let t = document.createTextNode("Trata de encontrar la salida, guía al carrito con las teclas arriba, abajo, izquierda y derecha del teclado. El carrito continuará su camino hasta que choque con una casita, si choca los bordes pierdes. Pasa al siguiente nivel cuando ganas. Diviértete!");
	title.appendChild(h4);
	text.appendChild(t);
	abrirText.appendChild(title);
	abrirText.appendChild(text);
	abrirText.setAttribute("class", "textIns");
	let btn = document.createElement("BUTTON");
	let btnText = document.createTextNode("Menú");
	btn.setAttribute("id","btnMenu")
	btn.appendChild(btnText);
	abrirText.appendChild(btn);
	btnMenu.onclick= function(){
		document.getElementById("texto").setAttribute("class","ocultar");
		document.getElementById("menu").setAttribute("class","textIns");
    while(abrirText.childNodes.length >= 1){
       abrirText.removeChild(abrirText.firstChild);
    }
	}
});


// Créditos

  document.getElementById("creditos").addEventListener("click", function(e){
  //$("#creditos").click(function(e){
	e.preventDefault();
	document.getElementById("menu").setAttribute("class","ocultar");
	let abrirCredit=document.getElementById("textCreditos");
	let title = document.createElement("H4")
	let h4 = document.createTextNode("Créditos")
	let text = document.createElement("P");
	let t = document.createTextNode("ELABORADO POR: Gabriela Paredes Paredes y Abigail De La Flor Yucra.");
	title.appendChild(h4);
	text.appendChild(t);
	abrirCredit.appendChild(title);
	abrirCredit.appendChild(text);
	abrirCredit.setAttribute("class", "textIns");
	let btn = document.createElement("BUTTON");
	let btnText = document.createTextNode("Menú");
	btn.setAttribute("id","btnMenu1")
	btn.appendChild(btnText);
	abrirCredit.appendChild(btn);
	btnMenu1.onclick= function(){
		document.getElementById("textCreditos").setAttribute("class","ocultar");
		document.getElementById("menu").setAttribute("class","textIns");
    while(abrirCredit.childNodes.length >= 1){
       abrirCredit.removeChild(abrirCredit.firstChild);
    }
	}
});
