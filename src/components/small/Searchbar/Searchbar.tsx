import React, { ChangeEvent, useEffect, useState } from 'react';

import { Input } from './StyledComponents';

import useDebounce from '../../../hooks/useDebounce';

const Searchbar = ({ handleSearch }: { handleSearch: (value: string) => void }): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value, 500);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    useEffect(() => {
        handleSearch(value);
    }, [debouncedValue]);
    return (
        <div>
            <Input type="text" value={value} onChange={handleChange} placeholder="Search" />
        </div>
    );
};

export default Searchbar;
