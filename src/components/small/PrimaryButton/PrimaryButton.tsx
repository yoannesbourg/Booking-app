import React from 'react';

import { PrimaryButtonStyling } from './StyledComponents';

const PrimaryButton = (props: { text: string; action: () => void }): JSX.Element => {
    const handleClick = () => {
        props.action();
    };
    return <PrimaryButtonStyling onClick={handleClick}>{props.text}</PrimaryButtonStyling>;
};
export default PrimaryButton;
