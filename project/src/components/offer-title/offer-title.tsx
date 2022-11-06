type offerTitleProps = {content: string};

function OfferTitle({content}: offerTitleProps): JSX.Element {

  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {content}
      </h1>
    </div>
  );
}

export default OfferTitle;
