type ratingStarsProps = {ratingInPercents: number};

function RatingStars({ratingInPercents}: ratingStarsProps): JSX.Element {

  return <span style={{ width: `${ratingInPercents}%` }} />;
}

export default RatingStars;
