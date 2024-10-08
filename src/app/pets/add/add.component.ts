import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetsService } from '../pets.service';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  petForm: FormGroup;
  pservice: PetsService;
  constructor(
    private formBuilder: FormBuilder,
    private readonly petService: PetsService
  ) {
    this.petForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      age: [0, Validators.required],
    });
    this.pservice = this.petService;
  }

  addPet(): void {
    const newPet: Pet = {
      id: 0,
      name: this.petForm.value.name,
      description: this.petForm.value.description,
      age: this.petForm.value.age,
    };
    this.pservice.AddPet(newPet);
    this.petForm.reset();
  }
}
