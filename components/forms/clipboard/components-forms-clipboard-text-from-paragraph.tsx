'use client';
import IconCopy from '@/components/icon/icon-copy';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';

const ComponentsFormsClipboardTextFromParagraph = () => {
    const message3 = '22991';
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
            title="Copy Text from Paragraph"
            codeHighlight={`import { useState } from 'react';
const message3 = '22991';

<form>
    <p className="mb-3 font-semibold">
        Here is your OTP
        <span className="text-2xl" id="copyOTP" defaultValue={message3}>
            22991
        </span>
        .
    </p>
    <p className="font-semibold">Please do not share it to anyone</p>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <button type="button" className="btn btn-primary" onClick={() => handleCopy(message3)}>
            <svg>...</svg>
            Copy from Paragraph
        </button>
    </div>
</form>`}
        >
            <div className="mb-5">
                <div className="rounded bg-[#f1f2f3] p-5 dark:bg-[#060818]">
                    <form>
                        <p className="mb-3 font-semibold">
                            Here is your OTP
                            <span className="text-2xl" id="copyOTP" defaultValue={message3}>
                                22991
                            </span>
                            .
                        </p>
                        <p className="font-semibold">Please do not share it to anyone</p>
                        <div className="mt-5 space-y-2 rtl:space-x-reverse sm:flex sm:space-x-2 sm:space-y-0">
                            <button type="button" className="btn btn-primary" onClick={() => handleCopy(message3)}>
                                <IconCopy className="ltr:mr-2 rtl:ml-2" />
                                Copy from Paragraph
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsClipboardTextFromParagraph;
