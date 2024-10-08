import { Component } from '@angular/core';
import { Pet } from '../models/pet';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  pets: Pet[] = [];

  constructor(private readonly petsService: PetsService) {
    this.pets = petsService.pets;
  }
}
