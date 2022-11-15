type offerDetailsProps = {details: string[]}

function OfferDetails({details}: offerDetailsProps): JSX.Element {

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {details.map((detail) => (<li key={detail} className="property__inside-item">{detail}</li>))}
      </ul>
    </div>
  );
}

export default OfferDetails;


