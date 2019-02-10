import { HistoryModel } from './history.state';

export class CreateHistory {
    static readonly type = '[Planning] Create History';
}

export class UpdateHistory {
    static readonly type = '[Planning] Update History';

    constructor(public oldHistory: HistoryModel, public newHistory: HistoryModel) { }
}

export class ReorderHistory {
    static readonly type = '[Planning] Reorder History';

    constructor(public indexOfElementToMove: number, public targetIndex: number) { }
}

export class LoadHistory {
    static readonly type = '[Planning] Load History';

    constructor(public histories: HistoryModel[]) { }
}
