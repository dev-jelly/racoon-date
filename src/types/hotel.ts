import { afternoon, DateDetail, DateTimeType } from "./dates";
import { anyang, DateLocation, gwangmyeong } from "./location";
import { PlaceType } from "./place";

export const hotel = "hotel" as const;

export class Hotel implements DateDetail {
  readonly dateTime: DateTimeType[] = [afternoon];
  readonly placeType: PlaceType = hotel;
  title: string = "";
  dateLocation: DateLocation;
  text: string = "";
  link: string = "";
  rent: string = "";
  rentMinPrice: number = 0;
  stay: string = "";
  stayMinPrice: number = 0;
  checkIn: string = "";
  checkOut: string = "";

  constructor(dateLocation: DateLocation, data: IHotel) {
    this.dateLocation = dateLocation;
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }
}

export function isHotel(date: DateDetail): date is Hotel {
  return date.placeType === hotel;
}

export interface IHotel {
  types?: DateTimeType[];
  placeType?: PlaceType;
  title?: string;
  dateLocation?: DateLocation;
  text?: string;
  link?: string;
  rent?: string;
  rentMinPrice?: number;
  stay?: string;
  stayMinPrice?: number;
  checkIn?: string;
  checkOut?: string;
}

export const hotels: DateDetail[] = [
  // 안양
  new Hotel(anyang, {
    types: [afternoon],
    title: "안양CNC호텔",
    link: "https://www.yanolja.com/motel/3009542",
    text: "숙박 시 오래 묵을 수 있는 장점, 나쁘지 않아 보이는 방",
    rent: "5시간",
    rentMinPrice: 25000,
    stayMinPrice: 70000,
    checkIn: "14:00",
    checkOut: "12:00",
  }),
  new Hotel(anyang, {
    types: [afternoon],
    title: "안양SS(상상)",
    link: "https://www.yanolja.com/motel/23920",
    text: "깔끔해 보이는 방",
    rent: "5시간",
    rentMinPrice: 25000,
    stayMinPrice: 60000,
    checkIn: "22:00",
    checkOut: "13:00",
  }),
  new Hotel(anyang, {
    types: [afternoon],
    title: "Premier Hotel XYM",
    link: "https://www.yanolja.com/motel/3016755",
    text: "깔끔해 보이는 방",
    rent: "4시간",
    rentMinPrice: 25000,
    stayMinPrice: 65000,
    checkIn: "22:00",
    checkOut: "12:00",
  }),
  new Hotel(anyang, {
    types: [afternoon],
    title: "안양 칼리토",
    link: "https://www.yanolja.com/motel/27569",
    text: "가격 대비 방이 넓어보임 긴 대실시",
    rent: "6시간",
    rentMinPrice: 25000,
    stayMinPrice: 55000,
    checkIn: "22:00",
    checkOut: "13:00",
  }),
  new Hotel(anyang, {
    types: [afternoon],
    title: "에버덴 호텔",
    link: "https://www.yanolja.com/motel/1000101985",
    text: "마사지룸, 무비룸, 스파룸 등 테마가 있는 방이 존재",
    rent: "5시간",
    rentMinPrice: 30000,
    stayMinPrice: 80000,
    checkIn: "21:00",
    checkOut: "12:00",
  }),
  new Hotel(anyang, {
    types: [afternoon],
    title: "SJ boutique HOTEL",
    link: "https://www.yanolja.com/motel/3008615",
    text: "방 자체는 깔끔, 하지만 크기는 작은 듯? 안양역 바로 앞",
    rent: "5시간",
    rentMinPrice: 20000,
    stayMinPrice: 65000,
    checkIn: "21:00",
    checkOut: "13:00",
  }),

  // 광명
  new Hotel(gwangmyeong, {
    types: [afternoon],
    title: "저스트스테이호텔 광명소하점",
    link: "https://www.yanolja.com/motel/1000110922",
    text: "위치가 좀 애매... 그래도 일단 배떡권!",
    rent: "4시간",
    rentMinPrice: 30000,
    stayMinPrice: 65000,
    checkIn: "21:00",
    checkOut: "12:00",
  }),
  new Hotel(gwangmyeong, {
    types: [afternoon],
    title: "라까사 호텔 광명",
    link: "https://www.yanolja.com/motel/3016071",
    text: "4성급 라까사!! 대실은 안됩니다 ㅠ",
    stayMinPrice: 65000,
    checkIn: "15:00",
    checkOut: "12:00 또는 13:00",
  }),
];
