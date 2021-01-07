import { DateDetail, DateType } from "./dates";
import { DateLocation } from "./location";

export class Place implements DateDetail {
  readonly types: DateType[];
  title: string;
  dateLocation: DateLocation;
  text: string = "";
  link: string = "";

  constructor(
    types: DateType[],
    title: string,
    dateLocation: DateLocation,
    text: string = "",
    link: string = ""
  ) {
    this.types = types;
    this.title = title;
    this.dateLocation = dateLocation;
    this.text = text;
    this.link = link;
  }
}
