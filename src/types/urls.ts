import { afternoon, breakfast, dinner, lunch, morning } from "./dates";
import { hotel } from "./hotel";
import { cafe } from "./cafe";

export const locationUrl = `/locations` as const;
export const restaurantUrl = `/restaurant` as const;
export const cafeUrl = `/${cafe}` as const;
export const hotelUrl = `/${hotel}` as const;

export const breakfastUrl = `/${breakfast}` as const;
export const morningUrl = `/${morning}` as const;
export const lunchUrl = `/${lunch}` as const;
export const afternoonUrl = `/${afternoon}` as const;
export const dinnerUrl = `/${dinner}` as const;
