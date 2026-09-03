import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NoticiasService } from './services/noticias';
import { Noticia } from './models/noticia';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], // Aquí se inyecta el módulo de formularios
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Inyección del servicio
  private noticiasService = inject(NoticiasService);

  // error "Property 'noticias' does not exist"
  noticias: Noticia[] = [];

  // error "Property 'nuevaNoticia' does not exist"
  nuevaNoticia = {
    titulo: '',
    contenido: '',
    imagenUrl: '',
    autor: ''
  };

  constructor() {
    this.actualizarLista();
  }

  actualizarLista() {
    this.noticias = this.noticiasService.obtenerNoticias();
  }

  // error "Property 'agregar' does not exist"
  agregar() {
    if (!this.nuevaNoticia.titulo.trim()) return;

    this.noticiasService.agregarNoticia(this.nuevaNoticia);
    this.actualizarLista();
    
    // Limpia el formulario
    this.nuevaNoticia = { titulo: '', contenido: '', imagenUrl: '', autor: '' };
  }

  // error "Property 'eliminar' does not exist"
  eliminar(id: number) {
    this.noticiasService.eliminarNoticia(id);
    this.actualizarLista();
  }
}