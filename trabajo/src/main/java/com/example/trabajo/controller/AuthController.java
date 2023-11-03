package com.example.trabajo.controller;

import com.example.trabajo.dao.UsuarioDao;
import com.example.trabajo.models.Usuario;
import com.example.trabajo.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.text.StyledEditorKit;

@RestController
public class AuthController {

    @Autowired
    UsuarioDao usuarioDao;

    @Autowired
    JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario){

        Usuario usuariolog = usuarioDao.login(usuario);
        if (usuariolog != null){


            String tokenJwt =jwtUtil.create(String.valueOf(usuariolog.getId()), usuariolog.getEmail());

            return tokenJwt;
        }
        return "false";
    }
}
