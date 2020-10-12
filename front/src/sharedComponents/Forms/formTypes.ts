export type TInputProps = {
  label?: string;
  name?: string;
  requiredText?: boolean;
};

export type TFormikControlProps = {
  control: string;
  [x: string]: string | boolean;
};
