import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  noPuedeSerStrider(argumento: any) {
    console.log(argumento);
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.nombreApellidoPattern)],
    ],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    userName: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.miFormulario.reset({
      nombre: 'Yorlin Garcia',
      email: 'test@test.com',
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
