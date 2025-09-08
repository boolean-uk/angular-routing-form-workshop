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

  pets$ = new Observable<Pet[]>();

  ngOnInit(): void {
    this.pets$ = this.petsService.getPets();
    this.pets$.subscribe((pets) => {
      pets.forEach((pet) => {
        console.log(pet.name);
      });
    });
  }

  constructor(private readonly petsService: PetsService) {}

  deletePet(id: string): void {
    this.petsService.deletePetById(id as string);
    this.router.navigate(['/pets']);
  }
  /*
  getPets() {
    this.pets$ = this.petsService.getPets();
  }
    */
}
