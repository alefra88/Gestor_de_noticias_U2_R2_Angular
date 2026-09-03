import { Injectable } from '@angular/core';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private noticias: Noticia[] = [];
  private idActual = 1;

  obtenerNoticias(): Noticia[] {
    return this.noticias;
  }

  agregarNoticia(datos: Omit<Noticia, 'id'>): void {
    const nuevaNoticia: Noticia = {
      id: this.idActual++,
      ...datos
    };
    this.noticias.push(nuevaNoticia);
  }

  editarNoticia(id: number, datosActualizados: Partial<Omit<Noticia, 'id'>>): void {
    const index = this.noticias.findIndex(noticia => noticia.id === id);
    if (index !== -1) {
      this.noticias[index] = {
        ...this.noticias[index],
        ...datosActualizados
      };
    }
  }

  eliminarNoticia(id: number): void {
    this.noticias = this.noticias.filter(noticia => noticia.id !== id);
  }
}