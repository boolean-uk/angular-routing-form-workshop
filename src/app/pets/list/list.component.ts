import { Component, inject } from '@angular/core';
import { Pet } from '../models/pet';
import { PetsService } from '../pets.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  private readonly router = inject(Router);

  public pets$ = new Observable<Pet[]>();

  constructor(private readonly petsService: PetsService) {}

  ngOnInit(): void {
    this.pets$ = this.petsService.getPets();
    this.pets$.subscribe((pets) => {
      pets.forEach((pet) => {
        console.log(pet.name);
      });
    });
  }
  refreshPets(): void {
    this.pets$ = this.petsService.getPets();
  }
  deletePet(id: string): void {
    const confirmed = confirm('Are you sure you want to delete this pet?');
    if (confirmed) {
      this.petsService.deletePetById(id).subscribe({
        next: () => {
          console.log(`Pet with ID ${id} deleted successfully.`);
          //this.router.navigate(['/pets']); // this doesn't work as we are already on /pets so we'll call a refresh method instead
          this.refreshPets();
        },
        error: (err) => {
          console.error('Delete failed:', err);
        },
      });
    }
  }
}
