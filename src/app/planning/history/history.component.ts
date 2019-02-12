import { ReorderEvent } from '../../shared/draggable-list/reorder-event';
import { AutoSaveService } from '../../shared/auto-save.service';
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { CreateHistory, ReorderHistory, LoadHistory } from './history.actions';
import { HistoryState, HistoryModel } from './history.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Select(HistoryState) histories$: Observable<HistoryModel[]>;

  constructor(private store: Store, private autoSaveService: AutoSaveService) {}

  ngOnInit() {
    const me = this;
    setTimeout(() => {
      const state = me.autoSaveService.load('histories');
      if (state) {
        me.store.dispatch(new LoadHistory(state));
      }
      me.autoSaveService.registryAutoSave('histories', me.histories$);
    }, 200);
  }

  addHistory() {
    this.store.dispatch(new CreateHistory());
  }

  trackByFn(history: HistoryModel) {
    return history.id;
  }

  reorderItens(reorderEvent: ReorderEvent) {
    console.log(reorderEvent);
    this.store.dispatch(
      new ReorderHistory(reorderEvent.previousIndex, reorderEvent.newIndex)
    );
  }
}
