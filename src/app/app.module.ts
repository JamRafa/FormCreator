import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './Components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './Components/side-nav/nav-bar/nav-bar.component';
import { FormsComponent } from './Pages/forms/forms.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { CreateFormComponent } from './Pages/create-form/create-form.component';
import { GenericQuestionComponent } from './Components/generic-question/generic-question.component';
import { MatSelectModule } from '@angular/material/select';
import { FormCardComponent } from './Components/form-card/form-card.component';
import { ShareModalComponent } from './Components/share-modal/share-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AnswerFormComponent } from './Pages/answer-form/answer-form.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TextComponent } from './Components/questionType/text/text.component';
import { DateTimeComponent } from './Components/side-nav/date-time/date-time.component';
import { ContainerComponent } from './Components/container/container.component';
import {MatTreeModule} from '@angular/material/tree';
import { FormFilterComponent } from './Components/form-filter/form-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    ContainerComponent,
    FormsComponent,
    CreateFormComponent,
    GenericQuestionComponent,
    FormCardComponent,
    ShareModalComponent,
    AnswerFormComponent,
    TextComponent,
    DateTimeComponent,
    FormFilterComponent,
  ],
  imports: [
    MatSelectModule,
    FormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
