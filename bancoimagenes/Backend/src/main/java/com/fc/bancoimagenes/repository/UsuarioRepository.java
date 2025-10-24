package com.fc.bancoimagenes.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fc.bancoimagenes.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {


	public Optional<Usuario> findByCorreo(String correo);

}
