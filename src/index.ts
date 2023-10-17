import * as React from 'react';

export default function useStateSet<T>(defaultValue: Set<T>) {
  const [value, setValue] = React.useState<Set<T>>(defaultValue);
  const add = React.useCallback(
    (newValue: T) => {
      setValue((oldValue) => {
        const newValueSet = new Set(oldValue);
        newValueSet.add(newValue);
        return newValueSet;
      });
    },
    [],
  );
  const remove = React.useCallback(
    (newValue: T) => {
      setValue((oldValue) => {
        const newValueSet = new Set(oldValue);
        newValueSet.delete(newValue);
        return newValueSet;
      });
    },
    [],
  );

  const filterValues = React.useCallback(
    (values: readonly T[]) => {
      setValue((oldValue) => {
        const newValueSet = new Set(
          [...oldValue].filter((thisValue) => values.includes(thisValue)) as T[],
        );
        return newValueSet;
      });
    },
    [],
  );
  return [value, add, remove, filterValues] as const;
}
