import { HousingTypeEnum } from './offerDataEnum';

export const offersDataMock = [
  {
    title: 'Beautiful & luxurious apartment at great location',
    imageUrl: 'img/apartment-01.jpg',
    type: HousingTypeEnum.apartment,
    price: 120,
    ratingInPercents: 93,
    isPremium: true,
    id: 100,
  },
  {
    title: 'Wood and stone place',
    imageUrl: 'img/room.jpg',
    type: HousingTypeEnum.room,
    price: 80,
    ratingInPercents: 80,
    isPremium: false,
    id: 101,
  },
  {
    title: 'Canal View Prinsengracht',
    imageUrl: 'img/apartment-02.jpg',
    type: HousingTypeEnum.apartment,
    price: 132,
    ratingInPercents: 80,
    isPremium: false,
    id: 102,
  },
  {
    title: 'Nice, cozy, warm big bed apartment',
    imageUrl: 'img/apartment-03.jpg',
    type: HousingTypeEnum.apartment,
    price: 180,
    ratingInPercents: 100,
    isPremium: true,
    id: 103,
  },
  {
    title: 'Wood and stone place',
    imageUrl: 'img/room.jpg',
    type: HousingTypeEnum.room,
    price: 80,
    ratingInPercents: 80,
    isPremium: false,
    id: 104,
  },
  {
    title: 'Wood and stone place',
    imageUrl: 'img/room.jpg',
    type: HousingTypeEnum.hotel,
    price: 780,
    ratingInPercents: 30,
    isPremium: false,
    id: 105,
  },
  {
    title: 'Nice, cozy, warm big bed apartment',
    imageUrl: 'img/apartment-03.jpg',
    type: HousingTypeEnum.house,
    price: 480,
    ratingInPercents: 77,
    isPremium: true,
    id: 106,
  }
];