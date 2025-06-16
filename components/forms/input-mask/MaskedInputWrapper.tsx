import React from 'react';
import MaskedInput from 'react-text-mask';

export interface MaskedInputWrapperProps {
    id?: string;
    type?: string;
    placeholder?: string;
    className?: string;
    mask: (string | RegExp)[];
    guide?: boolean;
    pipe?: (value: string) => string;
    keepCharPositions?: boolean;
    showMask?: boolean;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MaskedInputWrapper: React.FC<MaskedInputWrapperProps> = (props) => {
    return (
        // @ts-ignore - MaskedInput types are not properly exported
        <MaskedInput {...props} />
    );
};

export default MaskedInputWrapper; 