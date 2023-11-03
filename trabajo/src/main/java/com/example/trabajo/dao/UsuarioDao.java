package com.example.trabajo.dao;

import com.example.trabajo.models.Usuario;

import java.util.List;

public interface UsuarioDao {
    List<Usuario> getUsuarios();

    void eliminar(Long id);


    void registrar(Usuario usuario);

    Usuario login(Usuario usuario);
}
