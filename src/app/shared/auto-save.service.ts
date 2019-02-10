import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AutoSaveService {
  constructor(store: Store) {}

  registryAutoSave(propName: string, event: Observable<any>) {
    return event.subscribe(eventItem =>
      localStorage.setItem(propName, JSON.stringify(eventItem))
    );
  }

  load(propName: string) {
    const value = localStorage.getItem(propName);
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
}
