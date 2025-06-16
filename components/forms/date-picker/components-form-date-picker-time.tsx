'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from './DatePicker';

const ComponentsFormDatePickerTime = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date4, setDate4] = useState<string>('13:45');
    return (
        <PanelCodeHighlight
            title="Preloading Time"
            codeHighlight={`import { useState } from 'react';
import DatePicker from './DatePicker';
import { useSelector } from 'react-redux';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
const [date4, setDate4] = useState<string>('13:45');

<DatePicker
    options={{
        noCalendar: true,
        enableTime: true,
        dateFormat: 'H:i',
        position: isRtl ? 'auto right' : 'auto left',
    }}
    value={date4}
    className="form-input"
    onChange={(date) => setDate4(date[0].toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }))}
/>`}
        >
            <div className="mb-2.5">
                Use
                <code className="text-danger">{` {noCalendar: true, enableTime: true, dateFormat: 'H:i'} `}</code>
                with Date Time options to disable calendar and show time picker only.
            </div>
            <div className="mb-5">
                <DatePicker
                    options={{
                        noCalendar: true,
                        enableTime: true,
                        dateFormat: 'H:i',
                        position: isRtl ? 'auto right' : 'auto left',
                    }}
                    value={date4}
                    className="form-input"
                    onChange={(date) => setDate4(date[0].toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }))}
                />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormDatePickerTime;
