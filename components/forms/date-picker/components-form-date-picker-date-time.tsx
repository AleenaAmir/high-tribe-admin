'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from './DatePicker';

const ComponentsFormDatePickerDateTime = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date2, setDate2] = useState<string>('2022-07-05 12:00');
    return (
        <PanelCodeHighlight
            title="Date Time"
            codeHighlight={`import { useState } from 'react';
import DatePicker from './DatePicker';
import { useSelector } from 'react-redux';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
const [date2, setDate2] = useState<string>('2022-07-05 12:00');

<DatePicker
    data-enable-time
    options={{
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        position: isRtl ? 'auto right' : 'auto left',
    }}
    value={date2}
    className="form-input"
    onChange={(date) => setDate2(date[0].toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', ''))}
/>`}
        >
            <div className="mb-2.5">
                Use
                <code className="text-danger">{` {enableTime: true, dateFormat: 'Y-m-d H:i'}`} </code>
                option to enable time support
            </div>
            <div className="mb-5">
                <DatePicker
                    data-enable-time
                    options={{
                        enableTime: true,
                        dateFormat: 'Y-m-d H:i',
                        position: isRtl ? 'auto right' : 'auto left',
                    }}
                    value={date2}
                    className="form-input"
                    onChange={(date) => setDate2(date[0].toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', ''))}
                />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormDatePickerDateTime;
