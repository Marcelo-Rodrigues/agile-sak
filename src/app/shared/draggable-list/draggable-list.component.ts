import { Observable } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { ReorderEvent as ReorderEvent } from './reorder-event';

@Component({
  selector: 'app-draggable-list',
  templateUrl: './draggable-list.component.html',
  styleUrls: ['./draggable-list.component.css']
})
export class DraggableListComponent implements OnInit {
  @Input() trackByFn = this.trackByFnDefault;
  @Input() listEmitter = new Observable();
  @Output() addItemChange = new EventEmitter();
  @Output() reorderItensChange = new EventEmitter();

  @ContentChild(TemplateRef) template: TemplateRef<any>;

  constructor() {}

  trackByFnDefault(item: any) {
   return item;
  }

  ngOnInit() {}

  addItem() {
    this.addItemChange.emit();
  }

  drop(event: CdkDragDrop<any>) {
    this.reorderItensChange.emit(new ReorderEvent(event.previousIndex, event.currentIndex));
  }
}
