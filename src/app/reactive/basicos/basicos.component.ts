import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Manzana'),
  //   precio: new FormControl('1500'),
  //   existencias: new FormControl('5'),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: ['Manzana'],
    precio: ['Manzana'],
    existencias: ['Manzana'],
  });

  constructor(private fb: FormBuilder) {}
}
