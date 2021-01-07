import { afternoon, breakfast, dinner, lunch, morning } from "./dates";

export const locationUrl = `/locations` as const;
export const eatingUrl = `/eating` as const;

export const breakfastUrl = `/${breakfast}` as const;
export const morningUrl = `/${morning}` as const;
export const lunchUrl = `/${lunch}` as const;
export const afternoonUrl = `/${afternoon}` as const;
export const dinnerUrl = `/${dinner}` as const;
