import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-forms-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './forms-page.component.html',
  styleUrl: './forms-page.component.css',
})
export class FormspageComponent {
  private fb = new FormBuilder();

  name= new FormControl('');

  ngOnInit(){
    console.log(this.name);
  }
  onChangeName(){
    console.log(this.name);
  }
}
