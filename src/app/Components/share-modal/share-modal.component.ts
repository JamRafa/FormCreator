import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss']
})
export class ShareModalComponent {

  constructor(public dialogRef: MatDialogRef<ShareModalComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}
