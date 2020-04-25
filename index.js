function Calcular() {
    let valores = getValores();
    //console.log("Llamada de GetValores: ",valores);
    let mayor = ordenarMayor(Array.from(valores)); //copy, sino es un puntero...
    //console.log("Dsp de ordenar: ",valores);
    let invertido = invertir(mayor);

    postValores(valores,mayor,invertido);
    
}

function postValores(valores,mayor,invertido){
    const vectorValores = String(valores);
    const vectorMayor = String(mayor);
    const vectorInvertido = String(invertido);

    let temp = document.getElementById("mostrarValores");
    if(!temp.children[0]){
        const element =document.createElement("div");
        element.setAttribute("class","card");
        element.setAttribute("id","cargados");
        element.innerHTML = `
            <div> 
                <h5 id="fraseOriginal">Los valores cargadoes fueron</h5> 
                <h3 class="text-center"> [${vectorValores}]</h3>
            </div>
            <div> 
                <h5 id="fraseOriginal">El vector ordenado queda</h5> 
                <h3 class="text-center"> [${vectorMayor}]</h3>
            </div>
            <div> 
                <h5 id="fraseOriginal">El vector invertido queda</h5> 
                <h3 class="text-center"> [${vectorInvertido}]</h3>
            </div>
        `;
        temp.appendChild(element);
    }else{
        temp.children[0].innerHTML = `
        <div class="form-row"> 
            <div class="form-group col-md-7">
                <h5 id="fraseOriginal">Los valores cargadoes fueron: </h5> 
            </div>
            <div class="form-group col-md-5">
                <h3> [${vectorValores}]</h3>
            </div>
        </div>
        <div class="form-row"> 
            <div class="form-group col-md-7">
                <h5 id="fraseOriginal">El vector ordenado queda: </h5> 
            </div>
            <div class="form-group col-md-5">
                <h3> [${vectorMayor}]</h3>
            </div>
        </div>
        <div class="form-row"> 
        <div class="form-group col-md-7">
            <h5 id="fraseOriginal">El vector invertido queda: </h5> 
        </div>
        <div class="form-group col-md-5">
            <h3> [${vectorInvertido}]</h3>
        </div>
    </div>
    `;
    }
}

function postCuadros(valores,idpadre,estilo){
    let padre = document.getElementById(idpadre);
    if(padre.children.length < 16){
        const temp =document.createElement("div");
        temp.setAttribute("class","form-row");
        temp.setAttribute("id","cuadro");
        //let temp = document.getElementById("cuadro");
        for (let i=0 ; i<valores.length ;i++ ){
            if(!temp.children[i]){
                const element =document.createElement("div");
                element.setAttribute("class",estilo);
                element.innerHTML = `
                    ${valores[i]}
                `;
                temp.appendChild(element);
            }else{
                temp.children[i].innerHTML = `
                    ${valores[i]}
                `;   
            }
        }
        if (typeof valores !== 'undefined' && valores.length == 0) {
            const element =document.createElement("div");
            element.setAttribute("class","cuadrado3");
            temp.appendChild(element);
        }
        padre.appendChild(temp);
        //console.log(padre.children.length);
    }else{
        const largo = padre.children.length
        console.log("Hay que eliminar:",largo);
        for(let i=0; i<largo ; i++){
            //console.log(i);
            padre.removeChild(padre.children[0]);
        }
        //console.log("Eliminados",padre.children.length);
        postCuadros(valores,);
    }
    
}

function getValores(){
    let temp = document.getElementsByName("numeros");
    //console.log(temp)
    let valores = [];
    for(let i = 0; i < temp.length; i++) {
        
        if(temp[i].value){
            valores[i] = parseInt(temp[i].value);
        }else{
            valores[i] = parseInt(temp[i].placeholder);
        }
    };
    //console.log("Salida de GetValores", valores);
    return valores;
}

function sumar(valores){
    var suma = 0;
    for(let i=0 ; i < valores.length ; i++){
        valores[i] = parseInt(valores[i]);
        suma += valores[i];
    }
    return (suma);
}

function ordenarMayor(valores){
    let mayor = [];
    for(let i=0 ; i < valores.length ; i++){
        valores[i] = parseInt(valores[i]);
    }

    for(let j=0 ; j < valores.length; j++){
        for(let i=0 ; i < valores.length ; i++){
            //console.log("Valores:",valores)
            postCuadros(valores,"cuadros1","cuadrado1");
            //console.log("Mayor:",mayor)
            postCuadros(mayor,"cuadros2","cuadrado2");
            if(i == valores.length-1){
                    mayor.push(valores[valores.length-1]);  
            } else if(valores[i] > valores[i+1]){
                mayor.push(valores[i]);
            }else{
                mayor.push(valores[i+1]);
                valores[i+1] = valores[i]
                valores[i] = mayor[i]
            }

            if(mayor.length == 10 || valores.length == 10){ 
                break;
            }
        }
        if(j== valores.length-1){
            return mayor;
        }
        valores = mayor;
        mayor = [];
    }
}

function invertir(valores){
    //console.log(valores);
    var invertido = []
    for(let i = (valores.length-1) ; i>=0 ; i--){
        invertido.push(valores[i]);
    }
    //console.log(invertido);
    return invertido;
}