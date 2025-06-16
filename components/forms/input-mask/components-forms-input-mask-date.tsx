'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import MaskedInputWrapper from './MaskedInputWrapper';

const ComponentsFormsInputMaskDate = () => {
    return (
        <PanelCodeHighlight
            title="Date"
            codeHighlight={`import MaskedInputWrapper from './MaskedInputWrapper';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
            <label htmlFor="dateMask1" className="text-white-dark">
                mask="'##/##/####'" (dd/mm/yyyy)
            </label>
            <MaskedInputWrapper
                id="dateMask1"
                type="text"
                placeholder="__/__/____"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dateMask2" className="text-white-dark">
                mask="'##-##-####'" (99-99-9999)
            </label>
            <MaskedInputWrapper
                id="dateMask2"
                type="text"
                placeholder="__-__-____"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dateMask3" className="text-white-dark">
                mask="'## December, ####'" (99 December, 9999)
            </label>
            <MaskedInputWrapper
                id="dateMask3"
                type="text"
                placeholder="__ December, ____"
                className="form-input"
                // mask={['99 December, 9999']}
                mask={[/[0-9]/, /[0-9]/, ' ', 'D', 'e', 'c', 'e', 'm', 'b', 'e', 'r', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
    </fieldset>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <fieldset className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div>
                            <label htmlFor="dateMask1" className="text-white-dark">
                                {`mask="'##/##/####'" (dd/mm/yyyy)`}
                            </label>
                            <MaskedInputWrapper
                                id="dateMask1"
                                type="text"
                                placeholder="__/__/____"
                                className="form-input"
                                mask={[/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                            />
                        </div>
                        <div>
                            <label htmlFor="dateMask2" className="text-white-dark">
                                {`mask="'##-##-####'" (99-99-9999)`}
                            </label>
                            <MaskedInputWrapper
                                id="dateMask2"
                                type="text"
                                placeholder="__-__-____"
                                className="form-input"
                                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                            />
                        </div>
                        <div>
                            <label htmlFor="dateMask3" className="text-white-dark">
                                {`mask="'## December, ####'" (99 December, 9999)`}
                            </label>
                            <MaskedInputWrapper
                                id="dateMask3"
                                type="text"
                                placeholder="__ December, ____"
                                className="form-input"
                                // mask={['99 December, 9999']}
                                mask={[/[0-9]/, /[0-9]/, ' ', 'D', 'e', 'c', 'e', 'm', 'b', 'e', 'r', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputMaskDate;
