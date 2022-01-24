window.onload=function(){
    //+"'" + nombre + "'";
    var lista = document.querySelector("input");
    lista.setAttribute("onclick","verlista()");

    var usuario = document.querySelector("#user");
    usuario.setAttribute("onclick","verUsuario()");

    var userveh = document.querySelector("#userveh");
    userveh.setAttribute("onclick","verVehiculo()");
    
    var idveh = document.querySelector("#idveh");
    idveh.setAttribute("onclick","idVeh()");
}

function verlista(){
    const url = 'http://localhost:3000/listUsu';
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        
    .then(response => response.json())
    .then(data => console.log(data));
    
}

function verUsuario(){
    var id = document.getElementById('idusuario');
    var valor = id.value;
    console.log(valor);
    var url = 'http://localhost:3000/userId?id='+"'"+valor+"'";

    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        
    .then(response => response.json())
    .then(data => console.log(data));
}

function verVehiculo(){
    var id = document.getElementById('iduserveh');
    var valor = id.value;
    console.log(valor);
    var url = 'http://localhost:3000/vehUserId?id='+"'"+valor+"'";

    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        
    .then(response => response.json())
    .then(data => console.log(data));
}

function idVeh(){
    var id = document.getElementById('idveh2');
    var valor = id.value;
    console.log(valor);
    var url = 'http://localhost:3000/vehId?id='+"'"+valor+"'";

    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        
    .then(response => response.json())
    .then(data => console.log(data));
}








