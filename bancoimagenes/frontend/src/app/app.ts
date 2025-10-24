import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenInterceptor } from './core/token-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}

providers: [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
]

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // otros módulos
  ],
  // ...
})
export class AppModule {}


