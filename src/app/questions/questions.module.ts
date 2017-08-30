import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionsListComponent } from './questions-list';
import { QuestionsListItemComponent } from './questions-list-item';

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionsListComponent,
    QuestionsListItemComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ],
})
export class QuestionsModule { }
