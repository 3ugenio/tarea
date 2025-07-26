import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-forms-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './forms-page.component.html',
  styleUrl: './forms-page.component.css',
})
export class FormspageComponent {
  private fb = new FormBuilder();
  claseForm: FormGroup;
  constructor() {
    this.claseForm= this.fb.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      email:['', [Validators.email, Validators.required]],
      mensaje:['',[Validators.required, Validators.minLength(10)]],
    })
  }

  name= new FormControl('');

  ngOnInit(){
    console.log(this.name);
  }
  onChangeName(){
    console.log(this.name);
  }
  onSubmit() {
    console.log('Form Submitted!', this.claseForm);
    if (this.claseForm.valid) {
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
      console.log('Formulario válido:', this.claseForm.value);
    } else {
      console.log('Formulario inválido');
    }

  }
}
