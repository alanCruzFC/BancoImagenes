package com.fc.bancoimagenes.dto;

import lombok.Data;

@Data
public class LoginDTO {
    private String correo;
    private String password;
    
    
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
    
    
}
