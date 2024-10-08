import { Component } from '@angular/core';
import { Pet } from '../models/pet';
import { PetsService } from '../pets.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  pet$ = new Observable<Pet>();

  constructor(
    private readonly petsService: PetsService,
    private readonly route: ActivatedRoute
  ) {
    this.pet$ = this.petsService.GetPetById(
      Number(route.snapshot.paramMap.get('id'))
    );
  }
}
