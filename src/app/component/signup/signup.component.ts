import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public myForm: FormGroup;
  public submitted: boolean;
  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],

      pass: ['',
        [
          Validators.required,
          // Validators.pattern('aqui va la expresion regular'),
          Validators.minLength(8),
          Validators.maxLength(20),
        ]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],

        // eliminar las que no se ocupen de aqui para abajo
        lastName: ['', [Validators.required]],
        zipCode: [
          '',
          [
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.minLength(5),
            Validators.maxLength(10),
          ],
        ],
        interested: ['', Validators.required],
        comments: [''],
    });
    this.submitted = false;
  }
  get form() {
    return this.myForm.controls;
  }
  saveForm() {
    this.submitted = true;
    // this.contactService.save(this.myForm.value).subscribe({
    //   next: (result: any) => {
    //   },

    //   error: (error: any) => {
    //     const errorMessage = error as any;
    //     console.log(errorMessage);
    //   },
    // });
  }
}
