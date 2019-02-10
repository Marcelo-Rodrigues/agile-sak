import { HistoryModel } from './history.state';
import { State, Action, StateContext } from '@ngxs/store';
import {
  CreateHistory,
  UpdateHistory,
  ReorderHistory,
  LoadHistory
} from './history.actions';

export interface HistoryModel {
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
    ctx.setState([...ctx.getState(), { title: '', detail: '' }]);
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
        return { title: item.title, detail: item.detail } as HistoryModel;
      })
    );
  }
}
