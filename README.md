# 📰 Gestor de Noticias 

**Reto 2 - Módulo de Programación Web Multiplataforma**

Este proyecto es una aplicación web de una sola página (SPA) desarrollada en **Angular**. Su objetivo principal es demostrar la creación y estructuración de un sistema de gestión de noticias utilizando servicios centralizados, modelos de datos estrictos con TypeScript y diseño responsivo.

## 🚀 Características y Funcionalidades

La aplicación implementa un CRUD (Crear, Leer, Actualizar, Eliminar) en memoria con los siguientes módulos de lógica:

- **Módulo de Agregación:** Permite registrar una nueva noticia capturando su título, autor, URL de imagen y contenido. Genera automáticamente un `id` único e incremental.
- **Módulo de Lectura:** Renderiza de manera dinámica la lista de noticias publicadas utilizando la nueva sintaxis de control de flujo de Angular (`@for` y `@if`).
- **Módulo de Utilidades (Edición):** Lógica preparada en el servicio para actualizar atributos específicos de una noticia existente mediante su `id`.
- **Módulo de Eliminación:** Permite remover una noticia específica del arreglo en memoria haciendo uso de su identificador único.

## 🛠️ Tecnologías Utilizadas

- **[Angular CLI](https://angular.dev/):** Framework principal (Standalone Components, Inyección de Dependencias, Two-Way Data Binding con `ngModel`).
- **[TypeScript](https://www.typescriptlang.org/):** Lenguaje principal utilizado para garantizar el tipado estricto, empleando interfaces y utilidades avanzadas como `Omit` y `Partial`.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilidades CSS para la maquetación y el diseño visual de la interfaz.

## 📂 Estructura Principal del Proyecto

La lógica central del reto se divide en tres partes fundamentales:

1. **Modelo (`src/app/models/noticia.ts`):** Define la estructura de datos `Noticia`.
2. **Servicio (`src/app/services/noticias.ts`):** Actúa como el administrador de estado y lógica de negocio, decorado con `@Injectable`.
3. **Componente Principal (`src/app/app.ts` & `src/app/app.html`):** Inyecta el servicio y conecta los datos con el formulario y la vista HTML.

## 💻 Instrucciones de Ejecución

Para correr este proyecto en un entorno local, asegúrate de tener [Node.js](https://nodejs.org/) y Angular CLI instalados.

1. Clona o descarga el repositorio.
2. Abre una terminal en la carpeta raíz del proyecto (`GestorDeNoticias`).
3. Instala las dependencias necesarias:
   ```bash
   npm install