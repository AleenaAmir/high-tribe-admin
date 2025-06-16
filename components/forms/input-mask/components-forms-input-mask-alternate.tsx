'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import MaskedInputWrapper from './MaskedInputWrapper';

const ComponentsFormsInputMaskAlternate = () => {
    return (
        <PanelCodeHighlight
            title="Alternate masks"
            codeHighlight={`import MaskedInputWrapper from './MaskedInputWrapper';

<form>
    <fieldset className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
            <label htmlFor="altnMask1" className="text-white-dark">
                mask="'##.#'" (99.9)
            </label>
            <MaskedInputWrapper id="altnMask1" type="text" placeholder="__._" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/]} />
        </div>
        <div>
            <label htmlFor="altnMask2" className="text-white-dark">
                mask="'##.##'" (99.99)
            </label>
            <MaskedInputWrapper id="altnMask2" type="text" placeholder="__.__" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <fieldset className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label htmlFor="altnMask1" className="text-white-dark">
                                {`mask="'##.#'" (99.9)`}
                            </label>
                            <MaskedInputWrapper id="altnMask1" type="text" placeholder="__._" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/]} />
                        </div>
                        <div>
                            <label htmlFor="altnMask2" className="text-white-dark">
                                {`mask="'##.##'" (99.99)`}
                            </label>
                            <MaskedInputWrapper id="altnMask2" type="text" placeholder="__.__" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]} />
                        </div>
                    </fieldset>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputMaskAlternate;
