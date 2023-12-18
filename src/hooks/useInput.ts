import { ChangeEvent, useState } from 'react';

const useInput = <T>(defaultValue: T): [T, (e : ChangeEvent<HTMLInputElement>) => void, () => void] => {
	const [value, setValue] = useState<T>(defaultValue);

	const changeHandler = (e: ChangeEvent<HTMLInputElement>)  => {
        // SetStateAction<T> 필요?
		setValue(e.target.value as T);
	};

    const reset = () => {
        setValue(defaultValue);
    }

	return [value, changeHandler, reset];
};

export default useInput;
