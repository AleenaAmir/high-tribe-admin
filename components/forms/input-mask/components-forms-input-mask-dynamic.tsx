'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import MaskedInputWrapper from './MaskedInputWrapper';

const ComponentsFormsInputMaskDynamic = () => {
    return (
        <PanelCodeHighlight
            title="Dynamic Syntax"
            codeHighlight={`import MaskedInputWrapper from './MaskedInputWrapper';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-3 items-end gap-4">
        <div>
            <label htmlFor="dynamicMask1" className="text-white-dark">
                mask="'#-AAA###'" (9-a{'{1,3}'}9{'{1,3}'})
            </label>
            <MaskedInputWrapper
                id="dynamicMask1"
                type="text"
                placeholder="_-__"
                className="form-input"
                mask={[/[0-9]/, '-', /[a-z]/, /[a-z]/, /[a-z]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dynamicMask2" className="text-white-dark">
                mask="'AA-####'" (aa-9{'{1,4}'})
            </label>
            <MaskedInputWrapper id="dynamicMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
        </div>
        <div>
            <label htmlFor="dynamicMask3" className="text-white-dark">
                mask="'AA-##'" (aa-9{'{1,2}'})
            </label>
            <MaskedInputWrapper id="dynamicMask3" type="text" placeholder="__-__" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-3">
                        <div>
                            <label htmlFor="dynamicMask1" className="text-white-dark">
                                {`mask="'#-AAA###'" (9-a{"{1,3}"}9{"{1,3}"})`}
                            </label>
                            <MaskedInputWrapper id="dynamicMask1" type="text" placeholder="_-__" className="form-input" mask={[/[0-9]/, '-', /[a-z]/, /[a-z]/, /[a-z]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
                        </div>
                        <div>
                            <label htmlFor="dynamicMask2" className="text-white-dark">
                                {`mask="'AA-####'" (aa-9{"{1,4}"})`}
                            </label>
                            <MaskedInputWrapper id="dynamicMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
                        </div>
                        <div>
                            <label htmlFor="dynamicMask3" className="text-white-dark">
                                {`mask="'AA-##'" (aa-9{"{1,2}"})`}
                            </label>
                            <MaskedInputWrapper id="dynamicMask3" type="text" placeholder="__-__" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/]} />
                        </div>
                    </fieldset>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputMaskDynamic;
