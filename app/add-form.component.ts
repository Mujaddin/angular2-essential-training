import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mw-add-form',
  templateUrl: 'app/add-form.component.html',
  styleUrls: ['app/add-form.component.css']
})

export class AddFormComponent {
  addform;
  constructor(
    private formHandle: FormBuilder,
  ) { }

  ngOnInit() {
    this.addform = this.formHandle.group({
      medium: this.formHandle.control('free'),
      name: this.formHandle.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+'),
        Validators.maxLength(20),
        Validators.minLength(7)

      ])),
      year: this.formHandle.control('', this.YearValidate),
    })
  }

  YearValidate(inputYear) {
    if (inputYear.value.trim().length === 0) {
      return null;
    }

    var now = new Date();
    now.setFullYear(now.getFullYear() - 1);

    let year = parseInt(inputYear.value);
    let minYear = 1995;
    let maxYear = now.toISOString().slice(0,4);
}

}