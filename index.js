var a = Array(10, 20, 30);
var b = Array();

function agregar() {        
    let tarea = document.getElementById("descripcion").value;
    
    b.push(tarea);    
    mostrar();    
}

function mostrar() {        
    document.getElementById("tareas").innerHTML = ""; 

    /*b.forEach((v, i) => {               
        let nueva = armar_tarea(v, i);
        document.getElementById("tareas").append(nueva);
    });*/

    for (i = b.length-1; i >= 0; i--) {
        let nueva = armar_tarea(b[i], i);
        document.getElementById("tareas").append(nueva);
    }

}

function armar_tarea(descripcion, posicion) {
    let elemento = document.createElement("div");
    let span = document.createElement("span");
    let a = document.createElement("a");
    
    span.append(descripcion);
    a.append("X");    
    a.onclick = function() {
        b.splice(posicion, 1); //Elimina tarea.
        mostrar();
    };
    elemento.append(span, a);

    return elemento;
}

function eliminar() {
    alert(b);
}
