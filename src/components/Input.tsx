import type { FC } from 'react';

interface InputProps<T = number | string> {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: T;
}

export const Input: FC<InputProps> = ({ label, onChange, name, value }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={name}>{label}</label>
      <input value={value} id={name} name={name} onChange={onChange} />
    </div>
  );
};
