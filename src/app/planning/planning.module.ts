import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriesComponent } from './histories/histories.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { HistoryCardComponent } from './shared/history-card/history-card.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [HistoriesComponent, HistoryCardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ScrollDispatchModule,
    DragDropModule
  ]
})
export class PlanningModule { }
