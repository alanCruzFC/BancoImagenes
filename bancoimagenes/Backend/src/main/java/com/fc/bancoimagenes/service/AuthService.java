package com.fc.bancoimagenes.service;


import com.fc.bancoimagenes.dto.LoginDTO;
import com.fc.bancoimagenes.model.Usuario;
import com.fc.bancoimagenes.repository.UsuarioRepository;
import com.fc.bancoimagenes.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public ResponseEntity<?> login(LoginDTO loginDTO) {
        Optional<Usuario> usuarioOpt = usuarioRepository.findByCorreo(loginDTO.getCorreo());

        if (usuarioOpt.isEmpty()) {
            return ResponseEntity.status(401).body("Usuario no encontrado");
        }

        Usuario usuario = usuarioOpt.get();

        if (!passwordEncoder.matches(loginDTO.getPassword(), usuario.getPassword())) {
            return ResponseEntity.status(401).body("Credenciales inválidas");
        }

        String token = jwtUtil.generateToken(usuario);
        return ResponseEntity.ok().body(token);
    }
}

