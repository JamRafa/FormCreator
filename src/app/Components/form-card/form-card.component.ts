import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareModalComponent } from '../share-modal/share-modal.component';
import { generatePastelColor } from 'src/app/Utils/generateColour';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss'],
})
export class FormCardComponent {
  randomColour: string;

  constructor(public dialog: MatDialog) {
    this.randomColour = generatePastelColor();
  }

  openModal(): void {
    console.log('aqui');
    const dialogRef = this.dialog.open(ShareModalComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('closed');
    });
  }
}
