import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Pig } from '../shared/models/pig.model';

@Injectable()
export class PigService {

  constructor(private http: HttpClient) { }

  getPigs(): Observable<Pig[]> {
    return this.http.get<Pig[]>('/api/pigs');
  }

  countPigs(): Observable<number> {
    return this.http.get<number>('/api/pigs/count');
  }

  addPig(pig: Pig): Observable<Pig> {
    return this.http.post<Pig>('/api/pig', pig);
  }

  getPig(pig: Pig): Observable<Pig> {
    return this.http.get<Pig>(`/api/pig/${pig._id}`);
  }

  editPig(pig: Pig): Observable<string> {
    return this.http.put(`/api/pig/${pig._id}`, pig, { responseType: 'text' });
  }

  deletePig(pig: Pig): Observable<string> {
    return this.http.delete(`/api/pig/${pig._id}`, { responseType: 'text' });
  }

}
