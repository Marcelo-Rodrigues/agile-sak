import { AutoSaveService } from './../../shared/auto-save.service';
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { CreateHistory, ReorderHistory, LoadHistory } from './history.actions';
import { HistoryState, HistoryModel } from './history.state';
import { Observable } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.scss']
})
export class HistoriesComponent implements OnInit {
  @Select(HistoryState) histories$: Observable<HistoryModel[]>;

  constructor(private store: Store, private autoSaveService: AutoSaveService) {}

  ngOnInit() {
    const me = this;
    setTimeout(() => {
      const state = me.autoSaveService.load('histories');
      console.log(state);
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
    return history.title;
  }

  drop(event: CdkDragDrop<HistoriesComponent[]>) {
    this.store.dispatch(
      new ReorderHistory(event.previousIndex, event.currentIndex)
    );
  }
}