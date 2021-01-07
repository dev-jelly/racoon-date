import { DateDetail, DateTimeType, dinner, lunch } from "./dates";
import { anyang, DateLocation, gasan } from "./location";
import { PlaceType } from "./place";

export const restaurant = "restaurants" as const;

export class Restaurant implements DateDetail {
  readonly dateTime: DateTimeType[];
  readonly placeType: PlaceType = restaurant;
  readonly dateLocation: DateLocation;
  title: string;

  text: string = "";
  link: string = "";

  constructor(
    types: DateTimeType[],
    dateLocation: DateLocation,
    title: string,
    text: string = "",
    link: string = ""
  ) {
    this.dateTime = types;
    this.dateLocation = dateLocation;
    this.title = title;
    this.text = text;
    this.link = link;
  }
}

export function isRestaurant(date: DateDetail): date is Restaurant {
  return date.placeType === restaurant;
}

export const restaurants: DateDetail[] = [
  // 안양 식사류
  new Restaurant(
    [lunch, dinner],
    anyang,
    "돈까스(드림카츠)",
    "부드러운 돈까스! 드림카츠!, 영업시간 11:30~14:30(L.O), 17:00~20:00(L.O)",
    "https://www.mangoplate.com/restaurants/mewu1wdXv2kY"
  ),
  new Restaurant(
    [lunch, dinner],
    anyang,
    "돈까스(곤돈)",
    "트러플 소금의 프리미엄 돈까스! 영업시간 12:00~14:30(L.O), 17:00~20:00(L.O)",
    "https://www.mangoplate.com/restaurants/L4HBVyZa75uu"
  ),
  new Restaurant(
    [lunch, dinner],
    anyang,
    "비아김밥",
    "망플 4점대의 김밥찝이 있다?! 뿌숑빠숑! 포장만 가능! 이곳에서 김밥을 사서 숚소로 가는 것도 하나의 방법이죠! ",
    "https://www.mangoplate.com/restaurants/sHUsU9--vmyI"
  ),
  new Restaurant(
    [lunch, dinner],
    anyang,
    "안양감자탕",
    "세상에 하얀 감자탕이 있다고?!! 든든 허이 감자탕 한그릇 어때요? 영업시간 11:00 - 05:00",
    "https://www.mangoplate.com/restaurants/6VksLIbIGx"
  ),
  new Restaurant(
    [lunch, dinner],
    anyang,
    "밀로버거",
    "가끔 그런 날이 있어 버거를 먹고 싶은날 영업시간 12:00 - 20:30(LO)",
    "https://www.mangoplate.com/restaurants/sKJpGiwCEgeC"
  ),
  new Restaurant(
    [lunch, dinner],
    anyang,
    "퓨전 파스타, 육회비빔밥(얼룩말식당)",
    "댕리단길의 보스! 얼룩말 식당! 메뉴가 넘 특이하다. 영업시간 11:30 ~ 15:30, 17:30 ~ 22:00",
    "https://www.mangoplate.com/restaurants/At7abxUqoYuk"
  ),
  new Restaurant(
    [lunch, dinner],
    anyang,
    "커리숲",
    "국물 베이스의 스프커리! 과연 소녀의 입맛에도 맞을 수 있을까? 영업시간 11:30 ~ 21:00",
    "https://www.mangoplate.com/restaurants/8Osj2Mm-57Ux"
  ),

  // 가산
  new Restaurant(
    [lunch, dinner],
    gasan,
    "여신족발",
    "가산에서 제일 유명한 족발집?! 영업시간 16:00 - 23:30",
    "https://www.mangoplate.com/restaurants/BGIEFmOCX3"
  ),
  new Restaurant(
    [lunch, dinner],
    gasan,
    "두껍삼",
    "다 구워주는 삼겹살! 영업시간 14:00 - 23:00",
    "https://www.mangoplate.com/restaurants/GALTIxNsQTev"
  ),
  new Restaurant(
    [lunch, dinner],
    gasan,
    "그 외...",
    "아직 가산은 정보가 거의 없어서 같이 채워나가요 ㅠㅠ",
    "https://www.mangoplate.com/search/%EA%B0%80%EC%82%B0%EB%94%94%EC%A7%80%ED%84%B8%EB%8B%A8%EC%A7%80%EC%97%AD?keyword=%EA%B0%80%EC%82%B0%EB%94%94%EC%A7%80%ED%84%B8%EB%8B%A8%EC%A7%80%EC%97%AD&page=3"
  ),
];
