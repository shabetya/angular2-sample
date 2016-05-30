import {Directive, provide} from '@angular/core';
import {NG_VALIDATORS} from '@angular/common';
import {Control} from '@angular/common';

function validateName(c: Control) {
  let EMAIL_REGEXP = new RegExp('^jam', 'i');

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}

@Directive({
  selector: '[validateName]',
  providers: [
    provide(NG_VALIDATORS, {
      useValue: validateName,
      multi: true
    })
  ]
})

export class NameValidator {

}