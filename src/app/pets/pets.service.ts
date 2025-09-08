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

  public getPetById(id: string): Observable<Pet> {
    return this.http.get<Pet>(`${environment.api}/${id}`);
  }
  public getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${environment.api}`);
  }

  public addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${environment.api}`, pet);
  }
  public updatePet(p: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${environment.api}/${p.id}`, p);
  }
  public deletePetById(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.api}/${id}`);
  }
}
