type offerFeaturesProps = {
  offerType: string;
  bedroomsQuantity: number;
  maxAdults: number;
}

function OfferFeatures({offerType, bedroomsQuantity, maxAdults}: offerFeaturesProps): JSX.Element {

  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {offerType}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedroomsQuantity} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

export default OfferFeatures;
