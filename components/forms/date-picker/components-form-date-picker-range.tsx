'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import DatePicker from './DatePicker';

const ComponentsFormDatePickerRange = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date3, setDate3] = useState<string>('2022-07-05 to 2022-07-10');

    return (
        <PanelCodeHighlight
            title="Range Calendar"
            codeHighlight={`import { useState } from 'react';
import DatePicker from './DatePicker';
import { useSelector } from 'react-redux';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
const [date3, setDate3] = useState<string>('2022-07-05 to 2022-07-10');

<DatePicker
    options={{
        mode: 'range',
        dateFormat: 'Y-m-d',
        position: isRtl ? 'auto right' : 'auto left',
    }}
    value={date3}
    className="form-input"
    onChange={(date) => setDate3(date.length === 2 ? \`\${date[0].toISOString().split('T')[0]} to \${date[1].toISOString().split('T')[0]}\` : date3)}
/>`}
        >
            <div className="mb-2.5">
                Use <code className="text-danger">{`{mode: 'range'}`}</code> select the date with range.
            </div>
            <div className="mb-5">
                <DatePicker
                    options={{
                        mode: 'range',
                        dateFormat: 'Y-m-d',
                        position: isRtl ? 'auto right' : 'auto left',
                    }}
                    value={date3}
                    className="form-input"
                    onChange={(date) => setDate3(date.length === 2 ? `${date[0].toISOString().split('T')[0]} to ${date[1].toISOString().split('T')[0]}` : date3)}
                />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormDatePickerRange;
