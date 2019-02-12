import { Component, OnInit } from '@angular/core';
import { HistoryModel } from '../history/history.state';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  currentHistory: HistoryModel;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(params => this.store.dispatch(new  params.get('historyId')));
  }

  addTask() {}
}
