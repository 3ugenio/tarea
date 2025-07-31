import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-forms-page',
  imports: [ReactiveFormsModule, ],
  templateUrl: './forms-page.component.html',
  styleUrl: './forms-page.component.css',
})
export class FormspageComponent {
  private fb = new FormBuilder();
  isSubmitting = signal(false);
  isSend= signal(false);
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
      this.isSubmitting.set(true);

      setTimeout(() => {
        this.isSubmitting.set(false);
        this.isSend.set(true);
        this.claseForm.reset();
      }, 3000);
      console.log('Formulario válido:', this.claseForm.value);
    } else {
      console.log('Formulario inválido');
    }

  }
  hasError(field: string): boolean{
    const control= this.claseForm.get(field);
    if (control){
      return !control.valid;
    }
    return false;
    // return !! (control?.valid);
  }
  isValid(field:string): boolean {
    const control= this.claseForm.get(field);
    if (control){
      return control.valid && control.touched;
    }
    return false;

  }
  getErrorMessage(field:string):string{
    const control = this.claseForm.get(field);
    if (!control?.errors) return '';
    const errors = control.errors;
    switch(field){
      case 'name':
        if (errors['required']) return 'El nombre es requerido';
        if (errors['minlength']) return 'El nombre es requerido con al menos 3 caracteres';
        break;
      case 'email':
        if (errors['required']) return 'El correo es requerido';
        if (errors['email']) return 'Debe ser valido el correo ';
        break;
      case 'mensaje':
        if (errors['required']) return 'El mensaje es requerido';
        if (errors['minlength']) return 'El mensaje es requerido con al menos 7 caracteres';
        break;
          }

    return '';
  }
}
