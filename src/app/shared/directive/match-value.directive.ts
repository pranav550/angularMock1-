import { MatchValue } from './match-value.validator';
import { Directive,Input } from '@angular/core';
import {
  Validator,
  ValidationErrors,
  FormGroup,
  NG_VALIDATORS
} from "@angular/forms";

@Directive({
  selector: '[matchValue]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MatchValueDirective, multi: true }
  ]
})
export class MatchValueDirective {
  @Input("matchValue") matchValueFields: string[] = [];
  constructor() {}
  validate(formGroup: FormGroup): ValidationErrors {
    return MatchValue(this.matchValueFields[0], this.matchValueFields[1])(
      formGroup
    );
  }
}
