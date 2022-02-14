window.onload=function(){
    //+"'" + nombre + "'";
    var lista = document.getElementById("listadeusuario");
    lista.setAttribute("onclick","verlista()");

    var usuario = document.querySelector("#user");
    usuario.setAttribute("onclick","verUsuario()");

    var userveh = document.querySelector("#userveh");
    userveh.setAttribute("onclick","verVehiculo()");
    
    var idveh = document.querySelector("#idveh");
    idveh.setAttribute("onclick","idVeh()");

    var idUsuEdit = document.querySelector("#idUsuEdit");
    idUsuEdit.setAttribute("onclick","nameEdit()");


    mapboxgl.accessToken = 'pk.eyJ1IjoianVhbm1hMTIzNDUiLCJhIjoiY2t6aTlpczVuMWlrbjJxbnJoMXhmZ20xeCJ9.-619CtW5j4J3sMIZmI4uVQ';
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [12.550343, 55.665957],
    zoom: 8
    });
    
    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker()
    .setLngLat([12.554729, 55.70651])
    .addTo(map);
    
    // Create a default Marker, colored black, rotated 45 degrees.
    const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
    .setLngLat([12.65147, 55.608166])
    .addTo(map);


}

function verlista(){
    var padre = document.querySelector("#mostrar");
    var p = document.createElement("p");
    var d = document.createElement("p");
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
                p.innerHTML+="nombre: "+i.nombre+" || ID: "+i.id_usu+"<br>"+"<br>";
                padre.appendChild(p);
            });
        })  
}

function verUsuario(){
    var padre = document.querySelector("#mostrar");
    var p = document.createElement("p");
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
            p.innerHTML+=i.nombre+"<br>"+"<br>"+i.id_usu+"<br>"+"<br>";
            p.innerHTML+=i.login+"<br>"+"<br>";
            padre.appendChild(p);
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
        url = 'http://localhost:3000/modUsunombre?nombre='+"'"+valor+"'";
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

function borrar(){
    var usu = document.getElementById("ninio").value;
    console.log(usu);

    url = 'http://localhost:3000/delUsuId?id_usuario='+"'"+usu+"'";
        fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    alert("KAKA");
}


//GEODB CITIES
// fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
// 		"x-rapidapi-key": "1e23246fbbmshf599e7a964575adp186c60jsn55d8668d0b85"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .then(data => { console.log(data);
//     data.forEach(function(user){
//         for (const i in user) {
//             document.querySelector("p").innerHTML+=user[i]+"<br>"+"<br>";
//         }
//     })
// })
// .catch(err => {
// 	console.error(err);
// });




//TRANSLATE
// const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";
// fetch(url, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
// 		"x-rapidapi-key": "1e23246fbbmshf599e7a964575adp186c60jsn55d8668d0b85"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .then(data => { console.log(data.json());
//     data.forEach(function(user){
//         for (const i in user) {
//             document.querySelector("p").innerHTML+=user[i]+"<br>"+"<br>";
//         }
//     })
// })
// .catch(err => {
// 	console.error(err);
// });

//CAT FACTS
function getaFact(){
    var padre = document.querySelector("#api");
    const url="https://catfact.ninja/docs/api-docs.json";

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
                var p = document.createElement("p");
                p.innerHTML+=user[i]+"<br>"+"<br>";
                padre.appendChild(p);

            }
        })
    });
}


