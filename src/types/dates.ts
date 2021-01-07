import { PlaceType } from "./place";

export const breakfast = "breakfast" as const;
export const morning = "morning" as const;
export const lunch = "lunch" as const;
export const afternoon = "afternoon" as const;
export const dinner = "dinner" as const;

export type DateTimeType =
  | typeof breakfast
  | typeof morning
  | typeof lunch
  | typeof afternoon
  | typeof dinner;

export interface DateDetail {
  dateTime: DateTimeType[];
  readonly placeType: PlaceType;
}

export function nextTime(time: DateTimeType) {
  if (time === breakfast) {
    return morning;
  }
  if (time === morning) {
    return lunch;
  }
  if (time === lunch) {
    return afternoon;
  }
  if (time === afternoon) {
    return dinner;
  }
  return;
}
