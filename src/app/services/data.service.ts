import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = [
    {
      name: "Name 1"
    },
    {
      name: "Name 2"
    }
  ];

  getData() {
    return of(this.data);
  }
}
