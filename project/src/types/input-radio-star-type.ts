export type inputRadioStarType = {
  id: string;
  title: string;
  handleFieldChange: (evt: {target: HTMLInputElement}) => void;
  checkedRadio: string;
}
