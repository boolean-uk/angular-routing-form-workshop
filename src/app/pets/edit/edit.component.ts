import { Component, inject } from '@angular/core';
import { PetsService } from '../pets.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pet } from '../models/pet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  pet$ = new Observable<Pet>();
  petForm: FormGroup;
  router = inject(Router);
  formBuilder = inject(FormBuilder);
  opet: Pet | null = null;
  petsService: PetsService;

  constructor(
    private readonly service: PetsService,
    private readonly route: ActivatedRoute
  ) {
    this.petsService = service;
    this.pet$ = this.service.GetPetById(
      Number(route.snapshot.paramMap.get('id'))
    );

    this.petForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.pet$.subscribe((pet) => {
      if (pet) {
        this.petForm.patchValue({
          name: pet.name,
          age: pet.age,
          description: pet.description,
        });
      }
    });
  }

  deletePet() {
    this.petsService.deletePetById(
      Number(this.route.snapshot.paramMap.get('id'))
    );
  }
  updatePet() {
    const updatedPet: Pet = {
      id: Number(this.route.snapshot.paramMap.get('id')),
      name: this.petForm.value.name,
      description: this.petForm.value.description,
      age: this.petForm.value.age,
    };
    this.petsService.updatePet(updatedPet);
    this.router.navigate(['pets']);
  }
}
