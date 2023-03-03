import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[customMin][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMiniDirective,
      multi: true,
    },
  ],
})
export class CustomMiniDirective implements Validator {
  @Input() minimo!: number;

  constructor() {}

  validate(control: FormControl) {
    const inputValue = control.value;
    console.log(inputValue);
    console.log('minimo', this.minimo);
    return null;
  }
}
