import { useState } from "react";
import styles from './Form.module.scss';


const Form = () => {
    const [submitted, setSubmitted] = useState(true);

    const iframeOnLoad = () => {
        if (submitted) { window.location = 'http://localhost:6006/?path=/story/components-form--primary' }
    }

    const submit = () => {
        // window.location = 'http://localhost:6006/?path=/story/components-form--primary';
        setSubmitted(true);
    }

    return (
        <div className={styles.form__container}>
            {/* <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onload={iframeOnLoad}></iframe> */}
            {
                submitted ? 
                <div className={styles.form__submitted}>
                    <img src='/assets/icons/checkmark.svg' alt='checkmark' />
                    <h2>Thank you for your message!</h2>    
                    <p>We'll be in touch shortly.</p>
                </div> 
                
                :

                    <>

                        <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSfCiHrzVakE58ix6tbln3tbPHDNYeQuPhikx-axUzvso9-U-Q/formResponse' method='post' target='hidden_iframe' onsubmit={submit} className={styles.form}>
                            <span>
                                <label htmlFor='name'>Name</label>
                                <input name='entry.1151240598' type='text' id='name' />
                            </span>

                            <span>
                                <label htmlFor='email'>Email</label>
                                <input name='entry.1245963728' type='email' id='email' required />
                            </span>

                            <span>
                                <label htmlFor='phone'>Phone</label>
                                <input name='entry.346928561' type='tel' id='phone' />
                            </span>

                            <span>                           
                                 <label htmlFor='message'>Message</label>
                                <textarea name='entry.521154051' id='message' required />
                            </span>


                            <input type="submit" value="Send" />

                        </form></>

            }

        </div>

    );
};

export default Form;

