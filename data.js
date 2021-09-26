var data = [];

function addData(_nombre, _apellido, _edad, _profesion, _pais) {
    var newObj = {
        nombre : _nombre,
        apellido : _apellido,
        edad : _edad,
        profesion : _profesion,
        pais : _pais
    };
    alert("Nombre: " +newObj.nombre + "\nApellido: "+newObj.apellido + "\nEdad: "+newObj.edad + 
            "\nProfesion: "+newObj.profesion + "\nPais: "+newObj.pais);
    data.push(newObj);
}