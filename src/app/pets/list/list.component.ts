import { Component } from '@angular/core';
import { Pet } from '../models/pet';
import { PetsService } from '../pets.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
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
  /*
  getPets() {
    this.pets$ = this.petsService.getPets();
  }
    */
}
