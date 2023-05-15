import { FC, useCallback } from 'react';

interface InputProps<T = number | string> {
  label: string;
  onChange?: (key: string, value: T) => void;
  name: string;
  type: 'number' | 'string';
  value: T;
}

export const Input: FC<InputProps> = ({ label, onChange, name, type, value }) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (type === 'number') {
        onChange?.(name, parseInt(event.target.value, 10));
      } else {
        onChange?.(name, event.target.value);
      }
    },
    [name, onChange, type]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={name}>{label}</label>
      <input value={value} id={name} name={name} onChange={handleChange} />
    </div>
  );
};
