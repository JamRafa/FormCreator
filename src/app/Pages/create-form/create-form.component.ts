import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent {
  actualPage = ''

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      this.actualPage = params['id']
    })
  }
}
