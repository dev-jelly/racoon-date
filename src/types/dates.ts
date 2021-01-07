export const breakfast = "breakfast" as const;
export const morning = "morning" as const;
export const lunch = "lunch" as const;
export const afternoon = "afternoon" as const;
export const dinner = "dinner" as const;

export type DateType =
  | typeof breakfast
  | typeof morning
  | typeof lunch
  | typeof afternoon
  | typeof dinner;

export interface DateDetail {
  types: DateType[];
}
