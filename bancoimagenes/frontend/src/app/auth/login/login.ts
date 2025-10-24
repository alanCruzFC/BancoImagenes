import { Component } from '@angular/core';
import { AuthService } from '../../core/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})


export class LoginComponent {
  usuario = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  ingresar(): void {
    this.auth.login(this.usuario, this.password).subscribe({
      next: (res) => {
        this.auth.guardarToken(res.token, res.rol);
        this.router.navigate(['/galeria']);
      },
      error: () => alert('Credenciales inválidas')
    });
  }
}
