import { Component, inject } from '@angular/core';
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
  route = inject(ActivatedRoute);
  id: string | null = this.route.snapshot.paramMap.get('id');
  constructor(private readonly petsService: PetsService) {
    this.pet$ = this.petsService.getPetById(this.id as string);
  }
}
