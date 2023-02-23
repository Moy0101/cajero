function obtenerListaUsuarios(){
    var listaUsuarios=JSON.parse(localStorage.getItem('listaUsuariosLS'));
   
    if(listaUsuarios==null){
        listaUsuarios=[

        ['Moises',1234],
        ['Jose',0123],
        ['Helena', 1212]

       ]
        
    }
    return listaUsuarios;
}

function validarCredenciales(nombre,password){
    var listaUsuarios=obtenerListaUsuarios();
    var bAcceso=false;
    for(var i=0 ; i < listaUsuarios.length; i++ ){
        if (nombre==listaUsuarios[i][0] && password == listaUsuarios[i][1]){
            bAcceso=true
        }
    }
    return bAcceso;
}