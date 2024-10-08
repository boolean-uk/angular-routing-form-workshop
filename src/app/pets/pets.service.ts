import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './models/pet';
import { PETS } from '../data/pets';
import { environment } from '../environment/environment';
import { Observable, lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PetsService {
  private http = inject(HttpClient);
  public AddPet(p: Pet) {
    this.http.post(`${environment.api}`, p).subscribe((response) => {
      console.log('Server response:', response);
    });
  }

  public GetPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${environment.api}/1`);
  }
  public getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${environment.api}`);
  }
  public updatePet(p: Pet): void {
    console.log(p);
    this.http.put(`${environment.api}/${p.id}`, p).subscribe((response) => {
      console.log('Server response:', response);
    });
  }
}
