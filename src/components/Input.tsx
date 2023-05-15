import type { FC } from 'react';

interface InputProps {
  defaultValue: string;
  label: string;
  name: string;
}

export const Input: FC<InputProps> = ({ defaultValue, label, name }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={name}>{label}</label>
      <input defaultValue={defaultValue} id={name} name={name} />
    </div>
  );
};
