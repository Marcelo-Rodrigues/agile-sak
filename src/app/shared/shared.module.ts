import { DragHandleComponent } from './draggable-list/drag-handle/drag-handle.component';
import { DraggableListComponent } from './draggable-list/draggable-list.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ MenuComponent,
    DraggableListComponent,
    DragHandleComponent],
  imports: [
    MatMenuModule,
    MatIconModule,
    CommonModule,
    ScrollDispatchModule,
    DragDropModule,
  ],
  exports: [DraggableListComponent],
})
export class SharedModule { }
