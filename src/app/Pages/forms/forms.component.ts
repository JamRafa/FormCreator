import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {

  isFiltersActive = false;

  toggleFIlterActive() {
    this.isFiltersActive = !this.isFiltersActive;
  }
}
