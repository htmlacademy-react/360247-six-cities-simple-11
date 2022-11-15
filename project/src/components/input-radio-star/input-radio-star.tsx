import { inputRadioStarType } from '../../types';

type inputRadioProps = inputRadioStarType;

function InputRadioStar({ title, id, checkedRadio, handleFieldChange }: inputRadioProps): JSX.Element {

  const handleRadioChange = (evt: {target: HTMLInputElement}) => {
    handleFieldChange(evt);
  };

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={Number(id)}
        id={`${id}-star`}
        type="radio"
        checked={checkedRadio === id}
        onChange={handleRadioChange}
      />
      <label
        htmlFor={`${id}-star`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default InputRadioStar;
