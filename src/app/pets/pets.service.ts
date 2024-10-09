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

  public GetPetById(id: string): Observable<Pet> {
    return this.http.get<Pet>(`${environment.api}/1`);
  }
  public getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${environment.api}`);
  }

  public AddPet(p: Pet) {
    this.http.post(`${environment.api}`, p).subscribe((response) => {
      console.log('Server response:', response);
    });
  }
  public updatePet(p: Pet): void {
    this.http.put(`${environment.api}/${p.id}`, p).subscribe((response) => {
      console.log('Server response:', response);
    });
  }
  public deletePetById(id: string) {
    this.http.delete(`${environment.api}/${id}`).subscribe((response) => {
      console.log('Server response:', response);
    });
  }
}
