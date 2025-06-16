'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from './DatePicker';

const ComponentsFormDatePickerBasic = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date1, setDate1] = useState<string>('2022-07-05');

    return (
        <PanelCodeHighlight
            title="Basic"
            codeHighlight={`import { useState } from 'react';
import DatePicker from './DatePicker';
import { useSelector } from 'react-redux';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
const [date1, setDate1] = useState<string>('2022-07-05');

<DatePicker
    value={date1}
    options={{
        dateFormat: 'Y-m-d',
        position: isRtl ? 'auto right' : 'auto left',
    }}
    className="form-input"
    onChange={(date) => setDate1(date[0].toISOString().split('T')[0])}
/>`}
        >
            <div className="mb-5">
                <DatePicker
                    value={date1}
                    options={{
                        dateFormat: 'Y-m-d',
                        position: isRtl ? 'auto right' : 'auto left',
                    }}
                    className="form-input"
                    onChange={(date) => setDate1(date[0].toISOString().split('T')[0])}
                />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormDatePickerBasic;
