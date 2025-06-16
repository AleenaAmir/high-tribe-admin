import React from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';

type Position = 'auto' | 'above' | 'below' | 'auto left' | 'auto center' | 'auto right' | 'above left' | 'above center' | 'above right' | 'below left' | 'below center' | 'below right';

export interface DatePickerProps {
    value: string;
    options: {
        dateFormat?: string;
        enableTime?: boolean;
        mode?: 'single' | 'range';
        noCalendar?: boolean;
        position?: Position;
        [key: string]: any;
    };
    className?: string;
    onChange: (date: Date[]) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, options, className, onChange }) => {
    return (
        // @ts-ignore - Flatpickr types are not properly exported
        <Flatpickr
            value={value}
            options={options}
            className={className}
            onChange={onChange}
        />
    );
};

export default DatePicker; 