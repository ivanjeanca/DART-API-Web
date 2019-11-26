async function apiGetAll(ruta){
    return await $.ajax({
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        'type':'GET',
        'url': getRuta() + '/' + ruta, 
        'dataType': 'json'
    })
}

async function apiGet(ruta, id){
    return await $.ajax({
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        'type':'GET',
        'url': getRuta() + '/' + ruta + '/' + id, 
        'dataType': 'json'
    })
}

async function apiPost(ruta, datos){
    return await $.ajax({
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        'type':'POST',
        'url': getRuta() + '/' + ruta, 
        'data': JSON.stringify(datos),
        'dataType': 'json'
    })
}

async function apiPut(ruta, id, datos){
    return await $.ajax({
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        'type':'PUT',
        'url': getRuta() + '/' + ruta + '/' + id, 
        'data': JSON.stringify(datos),
        'dataType': 'json'
    })
}

async function apiDelete(ruta, id){
    return await $.ajax({
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        'type':'DELETE',
        'url': getRuta() + '/' + ruta + '/' + id,
        'dataType': 'json'
    })
}

function getRuta() {
    return 'http://localhost:8888'
}