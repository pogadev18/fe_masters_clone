export type TInputProps = {
  label?: string;
  name?: string;
  requiredText?: boolean;
};

type TOption = {
  value: string;
  key: string;
};

export type TSelectProps = TInputProps & {
  options?: TOption[];
};

export type TFormikControlProps = {
  control: string;
  [x: string]: string | boolean | { key: string; value: string }[];
};
