import { Draft } from "immer/dist/types/types-external";
import produce from "immer";
import {
  afternoon,
  breakfast,
  DateDetail,
  DateTimeType,
  dinner,
  lunch,
  morning,
} from "../types/dates";

export const INIT = "INITIALIZE" as const;
export const ADD_DATE = "ADD_DATE" as const;
export const REMOVE_LAST = "REMOVE_LAST" as const;

export type Dates = {
  [morning]?: DateDetail;
  [breakfast]?: DateDetail;
  [lunch]?: DateDetail;
  [afternoon]?: DateDetail;
  [dinner]?: DateDetail;
};

export type DateState = {
  dates: Dates;
  lastTime?: DateTimeType;
};

export type DateAction =
  | {
      type: typeof INIT;
    }
  | {
      type: typeof ADD_DATE;
      time: DateTimeType;
      date: DateDetail;
    }
  | { type: typeof REMOVE_LAST };

export function dateReducers(
  state: DateState = {
    dates: {},
  },
  action: DateAction
) {
  return produce(state, (draft: Draft<DateState>) => {
    switch (action.type) {
      case INIT:
        draft.dates = {};
        break;
      case ADD_DATE:
        draft.dates[action.time] = action.date;
        draft.lastTime = action.time;
        break;
      case REMOVE_LAST:
        if (draft.lastTime) {
          draft.dates[draft.lastTime] = undefined;
        }
        break;
    }
  });
}
