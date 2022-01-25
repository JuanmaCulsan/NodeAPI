window.onload=function(){
    var p = document.createElement("p");
    document.querySelector("#mostrar").appendChild(p);
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
    document.querySelector("p").textContent="";
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
    .then(data => {
            data.forEach(i => {
                document.querySelector("p").innerHTML+=i.nombre+"<br>"+"<br>";
            });
        })       
    
}

function verUsuario(){
    document.querySelector("p").textContent="";
    var id = document.getElementById('idusuario');
    var valor = id.value;
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
    .then(data => {
        console.log(data);
        data.forEach(i => {
            document.querySelector("p").innerHTML+=i.nombre+"<br>"+"<br>";
            document.querySelector("p").innerHTML+=i.id_usu+"<br>"+"<br>";
            document.querySelector("p").innerHTML+=i.login+"<br>"+"<br>";
        });
    })
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