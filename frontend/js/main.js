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

    var idUsuEdit = document.querySelector("#idUsuEdit");
    idUsuEdit.setAttribute("onclick","nameEdit()");

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
        data.forEach(i => {
            document.querySelector("p").innerHTML+=i.nombre+"<br>"+"<br>";
            document.querySelector("p").innerHTML+=i.id_usu+"<br>"+"<br>";
            document.querySelector("p").innerHTML+=i.login+"<br>"+"<br>";
        });
    })
}

function verVehiculo(){
    var div = document.querySelector("#mostrar");
    var hijodiv = document.createElement("div");
    div.appendChild(hijodiv);
    div.className="flexbox";
    var p = document.querySelector("p");
    p.textContent="";
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
    .then(data => {
        data.forEach(i => {
            p.innerHTML+=i.marca+"<br>"+"<br>";
            p.innerHTML+=i.modelo+"<br>"+"<br>";
            p.innerHTML+=i.matricula+"<br>"+"<br>";
            p.innerHTML+="--------------------"+"<br>"+"<br>";
            hijodiv.appendChild(p);
        });
    })
}

function idVeh(){
    document.querySelector("p").textContent="";
    var id = document.getElementById('idveh2');
    var valor = id.value;
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
    .then(data => { console.log(data);
        data.forEach(function(user){
            for (const i in user) {
                document.querySelector("p").innerHTML+=user[i]+"<br>"+"<br>";
            }
        })
    });
}

function nameEdit(){
    //Primero busco los nombres
    document.querySelector("p").textContent="";
    
    var id = document.getElementById('editUsu');
    var valor = id.value;
    
    allName();


    var res=false;
    let i=0;


    while(i<nombres.length && !res){
        console.log(nombres[i]);
        if(nombres[i]==valor){
            res = true;
            console.log("entro");
        }
        i++;
    }
    if(res){
        alert("cagaste");
        url = 'http://localhost:3000//modUsunombre?nombre='+"'"+valor+"'";
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            
        .then(response => response.json())
        .then(data => { console.log(data);
            data.forEach(function(user){
                for (const i in user) {
                    document.querySelector("p").innerHTML+=user[i]+"<br>"+"<br>";
                }
            })
        });
    }
    else{
        alert("El nombre no existe en la base de datos");
    }

    
}