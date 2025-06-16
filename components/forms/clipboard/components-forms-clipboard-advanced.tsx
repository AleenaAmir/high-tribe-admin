'use client';
import IconCopy from '@/components/icon/icon-copy';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';

const ComponentsFormsClipboardAdvanced = () => {
    const message4 = 'http://www.admin-dashboard.com/code';
    const showMessage = (message: String = '') => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: 'success',
            title: message || 'Copied successfully.',
            padding: '10px 20px',
        });
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            showMessage();
        });
    };

    return (
        <PanelCodeHighlight
            title="Copy Hidden Text (Advanced)"
            codeHighlight={`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const message4 = 'http://www.admin-dashboard.com/code';

<form>
    <p className="mb-3 font-semibold">
        <span> {'Link -> '} </span>
        <span id="copyLink"> http://www.admin-dashboard.com/code</span>
    </p>
    <span className="absolute opacity-0" id="copyHiddenCode">
        2291
    </span>
    <div className="mt-5 space-y-2 sm:flex sm:space-y-0 sm:space-x-2 rtl:space-x-reverse">
        <button type="button" className="btn btn-primary" onClick={() => handleCopy(message4)}>
            <svg>...</svg>
            Copy Link
        </button>
        <button type="button" className="btn btn-dark" onClick={() => handleCopy('2291')}>
            <svg>...</svg>
            Copy Hidden Code
        </button>
    </div>
</form>`}
        >
            <div className="mb-5">
                <div className="rounded bg-[#f1f2f3] p-5 dark:bg-[#060818]">
                    <form>
                        <p className="mb-3 font-semibold">
                            <span> {'Link -> '} </span>
                            <span id="copyLink"> http://www.admin-dashboard.com/code</span>
                        </p>
                        <span className="absolute opacity-0" id="copyHiddenCode">
                            2291
                        </span>
                        <div className="mt-5 space-y-2 rtl:space-x-reverse sm:flex sm:space-x-2 sm:space-y-0">
                            <button type="button" className="btn btn-primary" onClick={() => handleCopy(message4)}>
                                <IconCopy className="ltr:mr-2 rtl:ml-2" />
                                Copy Link
                            </button>
                            <button type="button" className="btn btn-dark" onClick={() => handleCopy('2291')}>
                                <IconCopy className="ltr:mr-2 rtl:ml-2" />
                                Copy Hidden Code
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsClipboardAdvanced;
