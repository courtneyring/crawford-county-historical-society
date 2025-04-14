import { useState } from "react";


const Form = () => {
    const [submitted, setSubmitted] = useState(false);

    const iframeOnLoad = () => {
        if(submitted)  { window.location = '/contact?formSuccess=true' }
    }

    return (
        <>
            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onload={iframeOnLoad}></iframe>
            <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSfCiHrzVakE58ix6tbln3tbPHDNYeQuPhikx-axUzvso9-U-Q/formResponse' method='post' target='hidden_iframe' onsubmit={() => setSubmitted(true)}>

                <label htmlFor='name'>Name</label>
                <input name='entry.1151240598' type='text' id='name' />

                <label htmlFor='email'>Email</label>
                <input name='entry.1245963728' type='text' id='email' />

                <label htmlFor='message'>Message</label>
                <input name='entry.521154051' type='text' id='message' />

                <input type="submit" value="Send" />

            </form>
        </>

    );
};

export default Form;

