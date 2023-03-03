import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  guardar() {
    console.log('Formulario posteado');
  }

  persona: Persona = {
    nombre: 'Yorlin',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Death Stranding' },
    ],
  };

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
}
