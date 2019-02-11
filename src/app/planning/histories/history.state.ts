import { HistoryModel } from './history.state';
import { State, Action, StateContext } from '@ngxs/store';
import * as uuid from 'uuid';

import {
  CreateHistory,
  UpdateHistory,
  ReorderHistory,
  LoadHistory,
  DeleteHistory
} from './history.actions';

export interface HistoryModel {
  id: number;
  title: string;
  detail: string;
}

@State<HistoryModel[]>({
  name: 'histories',
  defaults: []
})
export class HistoryState {
  @Action(CreateHistory)
  public create(ctx: StateContext<HistoryModel[]>) {
    const currentHistories = ctx.getState();

    const newItem: HistoryModel = {
      id: this.getNextId(currentHistories),
      title: '',
      detail: ''
    };
    ctx.setState([...currentHistories, newItem]);
  }

  @Action(UpdateHistory)
  public update(ctx: StateContext<HistoryModel[]>, action: UpdateHistory) {
    const newHistories = ctx.getState().slice(0);
    const position = newHistories.indexOf(action.oldHistory);
    if (position > -1) {
      newHistories.splice(position, 1, action.newHistory);
      ctx.setState(newHistories);
    }
  }

  @Action(ReorderHistory)
  public reorder(ctx: StateContext<HistoryModel[]>, action: ReorderHistory) {
    const newHistories = ctx.getState().slice(0);
    newHistories.splice(
      action.targetIndex,
      0,
      newHistories.splice(action.indexOfElementToMove, 1)[0]
    );
    ctx.setState(newHistories);
  }

  @Action(LoadHistory)
  public load(ctx: StateContext<HistoryModel[]>, action: LoadHistory) {
    ctx.setState(
      action.histories.map(item => {
        return {
          id: item.id,
          title: item.title,
          detail: item.detail
        } as HistoryModel;
      })
    );
  }

  @Action(DeleteHistory)
  public delete(ctx: StateContext<HistoryModel[]>, action: DeleteHistory) {
    const newHistories = ctx.getState().slice(0);
    const historyIndex = newHistories.indexOf(action.historyToDelete);
    if (historyIndex > -1) {
      newHistories.splice(historyIndex, 1);
      ctx.setState(newHistories);
    }
  }

  private getNextId(histories: HistoryModel[]) {
    if (!histories || !histories.length) {
      return 1;
    }
    return (
      histories
        .map(history => history.id)
        .reduce((prevId, currentId) => Math.max(prevId, currentId)) + 1
    );
  }
}
