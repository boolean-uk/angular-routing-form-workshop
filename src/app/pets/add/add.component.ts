import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetsService } from '../pets.service';
import { Pet } from '../models/pet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  private router = inject(Router);
  private readonly petService: PetsService;
  public petForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private readonly service: PetsService
  ) {
    this.petForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      age: [0, Validators.required],
    });
    this.petService = service;
  }
  cancel(): void {
    this.router.navigate(['/pets']);
  }
  addPet(): void {
    if (this.petForm.valid) {
      const newPet: Pet = {
        name: this.petForm.value.name,
        description: this.petForm.value.description,
        age: this.petForm.value.age,
      };

      this.petService.addPet(newPet).subscribe({
        next: (response) => {
          console.log('Pet added successfully:', response);
          this.petForm.reset();
          this.router.navigate(['/pets']);
        },
        error: (err) => {
          console.error('Failed to add pet:', err);
        },
      });
    }
  }
}
