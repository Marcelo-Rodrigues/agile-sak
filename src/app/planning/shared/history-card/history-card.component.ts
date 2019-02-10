import { Component, OnInit, Input } from '@angular/core';
import { HistoryModel } from '../../histories/history.state';
import { Store } from '@ngxs/store';
import { UpdateHistory } from '../../histories/history.actions';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit {

  @Input() historyModel: HistoryModel;
  @Input() even: boolean;
  modified: boolean;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  saveTitle(newTitle: string) {
    if (newTitle !== this.historyModel.title) {
      this.updateHistory({ title: newTitle, detail: this.historyModel.detail });
    }
  }

  saveDetail(newDetail: string) {
    if (newDetail !== this.historyModel.detail) {
      this.updateHistory({ title: this.historyModel.title, detail: newDetail });
    }
  }

  private updateHistory(newHistory: HistoryModel) {
    this.store.dispatch(new UpdateHistory(this.historyModel, newHistory));
  }

  cardChanged() {
    this.modified = true;
  }
}
