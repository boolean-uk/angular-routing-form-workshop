import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly formBuilder = inject(FormBuilder);
  private readonly petsService = inject(PetsService);

  public petForm: FormGroup;
  public pet$!: Observable<Pet>;
  public id: string | null = null;

  constructor() {
    this.petForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('Editing pet with id:', this.id);

    if (this.id) {
      this.pet$ = this.petsService.getPetById(this.id);
      this.pet$.subscribe((pet) => {
        if (pet) {
          this.petForm.patchValue({
            name: pet.name,
            age: pet.age,
            description: pet.description,
          });
          console.log('found:', pet);
          console.log('found$', this.pet$);
        } else {
          console.error('Pet not found with id:', this.id);
        }
      });
    }
  }
  cancel(): void {
    this.router.navigate(['/pets']);
  }
  updatePet(): void {
    if (this.petForm.valid && this.id) {
      const updatedPet: Pet = {
        id: this.id,
        name: this.petForm.value.name,
        description: this.petForm.value.description,
        age: Number(this.petForm.value.age),
      };

      this.petsService.updatePet(updatedPet).subscribe(() => {
        this.router.navigate(['/pets']);
      });
    }
  }
}
