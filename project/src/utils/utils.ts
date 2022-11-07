import { HousingTypesEnum } from '../types';

const RATING_STARS_QUANTITY = 5;

export const getPersantageFromRatingValue = function (value: number):number {
  return Math.round(value) * 100 / RATING_STARS_QUANTITY;
};

export const getHousingType = function(type: string): string {

  switch (type)
  {
    case 'apartment':
      return HousingTypesEnum.apartment;

    case 'room':
      return HousingTypesEnum.room;

    case 'house':
      return HousingTypesEnum.house;

    case 'hotel':
      return HousingTypesEnum.hotel;

    default:
      return '';
  }
};
