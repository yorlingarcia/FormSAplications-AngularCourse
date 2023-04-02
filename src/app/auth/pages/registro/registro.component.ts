import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  emailPattern,
  nombreApellidoPattern,
  noPuedeSerStrider,
} from 'src/app/shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(nombreApellidoPattern)],
    ],
    email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    userName: ['', [Validators.required, noPuedeSerStrider]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.miFormulario.reset({
      nombre: 'Yorlin Garcia',
      email: 'test@test.com',
      userName: 'YorlinGarcia',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    console.log(this.miFormulario);
    this.miFormulario.markAllAsTouched();
  }
}
