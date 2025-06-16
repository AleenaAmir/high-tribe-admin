'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import MaskedInputWrapper from './MaskedInputWrapper';

const ComponentsFormsInputMaskCurrency = () => {
    return (
        <PanelCodeHighlight
            title="Currency"
            codeHighlight={`import MaskedInputWrapper from './MaskedInputWrapper';

<form>
    <fieldset>
        <label htmlFor="currencyMask" className="text-white-dark">
            $999,9999,999.99
        </label>
        <MaskedInputWrapper
            id="currencyMask"
            type="text"
            placeholder="$___,____,___.__"
            className="form-input"
            mask={['$', /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <fieldset>
                        <label htmlFor="currencyMask" className="text-white-dark">
                            $999,9999,999.99
                        </label>
                        <MaskedInputWrapper
                            id="currencyMask"
                            type="text"
                            placeholder="$___,____,___.__"
                            className="form-input"
                            mask={['$', /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]}
                        />
                    </fieldset>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputMaskCurrency;
