window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const usuarios = document.getElementById('usuarios');
    if (usuarios) {
        new simpleDatatables.DataTable(usuarios);
    }
    cargarUsuarios();
});

async function cargarUsuarios(){

    const request = await fetch('api/usuarios', {
        method: 'GET',
        headers: getHeathers()
    });
        const usuarios = await request.json();

        let listadoHtml='';


        for(usuario of usuarios){

        let botonEliminar= '<a class="btn btn-primary" href="#" onclick="eliminarUsuario('+usuario.id+')">Eliminar</a>';

        let telefono = usuario.telefono == null ? "-" : usuario.telefono;

        let posicion = usuario.posicion == null ? "-" : usuario.posicion;

        let usuarioHtml= '<tr><td>'+usuario.id+'</td><td>'+usuario.nombre+' '+usuario.apellido
        +'</td><td>'+usuario.email+'</td><td>'+posicion+'</td><td>'+telefono
        +'</td><td>'+botonEliminar+'</td></tr>';
        listadoHtml+=usuarioHtml



}
    document.querySelector('#usuarios tbody').outerHTML= listadoHtml;
}

function getHeathers(){
    return {
                           'Accept': 'application/json',
                           'Content-Type': 'application/json',
                           'Authorization': localStorage.token
                       };
}


async function eliminarUsuario(id){

    if(!confirm("desea eliminar el usuario?")){
        return
    }

    const request = await fetch('api/usuarios/'+id, {
            method: 'DELETE',
            headers: getHeathers()
        });
    location.reload();
}

