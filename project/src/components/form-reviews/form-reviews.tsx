import { useState } from 'react';
import { inputRadioStarEnum } from '../../types';
import InputRadioStar from '../input-radio-star/input-radio-star';

function FormReviews(): JSX.Element {

  const radioTitles = Object.keys(inputRadioStarEnum);
  const radioValues = Object.values(inputRadioStarEnum);

  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const handleFieldChange = (evt: {target: HTMLInputElement | HTMLTextAreaElement}) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  console.log(formData);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
                Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {radioTitles.map((titleValue, key) => (
          <InputRadioStar
            title={titleValue}
            id={radioValues[key]}
            key={radioValues[key]}
            checkedRadio={formData.rating}
            handleFieldChange={handleFieldChange}
          />)
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleFieldChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormReviews;
