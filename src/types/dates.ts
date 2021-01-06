export type DateType =
  | "BREAKFAST"
  | "BEFORE_LUNCH"
  | "LUNCH"
  | "AFTERNOON"
  | "DINNER"
  | "LOCATION";

export interface DateDetail {
  type: DateType;
}
