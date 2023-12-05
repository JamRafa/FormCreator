import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private showFiller = new BehaviorSubject<boolean>(false);

  showFiller$ = this.showFiller.asObservable();

  constructor() { }

  toggleShowFiller() {
    this.showFiller.next(!this.showFiller.value);
  }
}
