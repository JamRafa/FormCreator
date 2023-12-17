import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './Pages/forms/forms.component';
import { CreateFormComponent } from './Pages/create-form/create-form.component';
import { AnswerFormComponent } from './Pages/answer-form/answer-form.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
  },
  {
    path: 'createForm/:page',
    component: CreateFormComponent,
  },
  {
    path: 'answer',
    component: AnswerFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
