import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';




@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
})
export class DateTimeComponent {

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;
}
