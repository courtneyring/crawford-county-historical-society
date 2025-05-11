import { useState } from "react";
import styles from "./Donate.module.scss";
import { createPortal } from "react-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Overlay, Button } from "@/components";
import variables from "../../../styles/variables.module.scss";

const DonateModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [donationAmount, setDonationAmount] = useState(0);

  const initialOptions = {
    clientId:
      "AbSE8jCIdvBWHS47YcRlDqXc8yOc0Ua9djAqbdz4UWVQgONOzrR1IUrPZsvKMQIepRzBf35GuH81GTLP",
  };

  const payPalStyles = {
    shape: "sharp",
    color: "white",
    label: "donate",
    disableMaxHeight: true,
    disableMaxWidth: true,
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: donationAmount,
            breakdown: {
              item_total: { currency_code: "USD", value: donationAmount },
            },
          },
          items: [
            {
              name: "Crawford County Historical Society Donation",
              unit_amount: { currency_code: "USD", value: donationAmount },
              quantity: 1,
              category: "DONATION",
            },
          ],
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      // Handle successful payment
      alert("Transaction completed by " + details.payer.name.given_name);
    });
  };

  return (
    <>
      {modalIsOpen &&
        createPortal(
          <Overlay
            closeFn={() => setModalIsOpen(false)}
            hideClose={false}
            background={variables.white}
            fullscreen={false}
          >
            <div className={styles.support__modal}>
              <h2>Make a Donation</h2>
              <p>
                The museum is funded through donations, sponsorships, and
                grants. Find out ways you can help the museum from day-to-day
                operations to long term success.{" "}
              </p>
              <div className={styles.support__input}>
                <label htmlFor="amount">$</label>
                <input
                  type="number"
                  id="amount"
                  onChange={(e) => setDonationAmount(e.target.value)}
                  value={donationAmount}
                />
              </div>

              {/*<!------->*/}
              <div className={styles.support__paypal}>
                <PayPalScriptProvider options={initialOptions}>
                  <PayPalButtons
                    style={payPalStyles}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    fundingSource="paypal"
                  />
                </PayPalScriptProvider>
              </div>
              {/*<!------->*/}
              <Button variation="link" fn={() => setModalIsOpen(false)}>
                Close
              </Button>
            </div>
          </Overlay>,
          document.body
        )}
    </>
  );
};

export default DonateModal;
