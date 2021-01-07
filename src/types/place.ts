import { cafe, cafes } from "./cafe";
import { hotel, hotels } from "./hotel";
import { restaurant, restaurants } from "./restaurant";

export type PlaceType = typeof hotel | typeof cafe | typeof restaurant;

export const places = [...cafes, ...hotels, ...restaurants];
