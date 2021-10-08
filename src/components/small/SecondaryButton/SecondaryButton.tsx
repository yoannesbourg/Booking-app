import React, { useState } from 'react';

import { SecondaryButtonStyling } from './StyledComponents';

const SecondaryButton = (props: { text: string; hoverText: string; action: () => void }): JSX.Element => {
    const [content, setContent] = useState<string>(props.text);
    const handleClick = () => {
        props.action();
    };

    const handleHover = () => {
        setContent(props.hoverText);
    };

    const handleMouseOut = () => {
        setContent(props.text);
    };

    return (
        <SecondaryButtonStyling onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleMouseOut}>
            {content}
        </SecondaryButtonStyling>
    );
};
export default SecondaryButton;
