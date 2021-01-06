import { Draft } from "immer/dist/types/types-external";
import produce from "immer";
import { DateDetail, DateType } from "../types/dates";

export const INIT = "INITIALIZE" as const;
export const ADD_DATE = "ADD_DATE" as const;
export const REMOVE_LAST = "REMOVE_LAST" as const;

export type DateState = {
  dates: DateDetail[];
};

export type DateAction =
  | {
      type: typeof INIT;
    }
  | {
      type: typeof ADD_DATE;
      date: DateDetail;
    }
  | { type: typeof REMOVE_LAST };

export function dateReducers(
  state: DateState = {
    dates: [],
  },
  action: DateAction
) {
  return produce(state, (draft: Draft<DateState>) => {
    switch (action.type) {
      case INIT:
        draft.dates = [];
        break;
      case ADD_DATE:
        draft.dates.push(action.date);
        break;
      case REMOVE_LAST:
        draft.dates.pop();
        break;
    }
  });
}
