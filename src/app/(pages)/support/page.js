'use client'

import { PageContainer, ImagePromoBlock, Body, Promo, LayeredImageBlock, Overlay, Button } from "@/components";
import variables from '../../../styles/variables.module.scss';
import styles from './support.module.scss';
import { attributes } from '../../../copy/support/copy.md';
import { useLayoutEffect, useState, useEffect } from "react";
import { createPortal } from 'react-dom';
import { loadScript } from '@paypal/paypal-js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const Support = () => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [donationAmount, setDonationAmount] = useState(0);

    let { hero, pageTitle, intro, lImageBlocks } = attributes;

    const clickHandler = () => {
        setModalIsOpen(true)
    }

    const initialOptions = {
        clientId: "AbSE8jCIdvBWHS47YcRlDqXc8yOc0Ua9djAqbdz4UWVQgONOzrR1IUrPZsvKMQIepRzBf35GuH81GTLP",
    };

    const payPalStyles = {
        shape: "sharp",
        color: 'white',
        label: 'donate',
        disableMaxHeight: true,
        disableMaxWidth: true
    };

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: donationAmount, breakdown: { item_total: { currency_code: "USD", value: donationAmount } }
                    },
                    items: [{ name: "Crawford County Historical Society Donation", unit_amount: { currency_code: "USD", "value": donationAmount }, "quantity": 1, category: "DONATION" }]
                },
            ],
        });
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            // Handle successful payment
            alert("Transaction completed by " + details.payer.name.given_name);
        });
    }

    return (
        <>

            <PageContainer hero={hero} pageTitle={pageTitle} copy={intro}>
                <div className="flex flex-col ">
                    {lImageBlocks.map((block, idx) => {
                        return <LayeredImageBlock
                            layeredImage={{ ...block.layeredImage, backgroundColor: variables[block.layeredImage.backgroundColor] }}
                            heading={block.heading}
                            body={block.body}
                            backgroundColor={variables[block.backgroundColor]}
                            color={variables[block.color]}
                            cta={{ ...block.cta, children: block.cta.label, fn: clickHandler }}
                            reverse={idx % 2 !== 0}
                        />
                    })}

                </div>

            </PageContainer>{
                modalIsOpen && createPortal(
                    <Overlay closeFn={() => setModalIsOpen(false)} hideClose={false} background={variables.white} fullscreen={false}>
                        <div className={styles.support__modal}>
                            <h2>Make a Donation</h2>
                            <p>The museum is funded through donations, sponsorships, and grants. Find out ways you can help the museum from day-to-day operations to long term success. </p>
                            <div className={styles.support__input}>
                                <label htmlFor="amount">$</label>
                                <input type="number" id="amount" onChange={(e) => setDonationAmount(e.target.value)} value={donationAmount}/>
                            </div>
                            {/* <a className={styles.support__paypal}>
                                Paypal donate
                            </a> */}

                            {/*<!------->*/}
                            <div className={styles.support__paypal}>

                            <PayPalScriptProvider options={initialOptions}>
                                <PayPalButtons style={payPalStyles} createOrder={createOrder} onApprove={onApprove} fundingSource="paypal"/>
                            </PayPalScriptProvider>
                            </div>
                            {/*<!------->*/}
                            <Button variation='link' onClick={() => setModalIsOpen(false)}>Close</Button>
                        </div>

                    </Overlay >,
                    document.body
                )
            }
        </>
    )

}


export default Support;