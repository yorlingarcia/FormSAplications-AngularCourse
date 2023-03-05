import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

  campoValido(campo: string) {
    return (
      !this.miFormulario.controls[campo].valid &&
      this.miFormulario.controls[campo].touched
    );
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value));
    this.nuevoFavorito.reset();
  }

  borrar(index: number) {
    console.log(this.miFormulario.value);
    //this.miFormulario.value.favoritos.splice(index, 1);
    this.favoritosArr.removeAt(index);
  }
}
