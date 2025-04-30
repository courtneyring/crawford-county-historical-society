import LayeredImage from "../LayeredImage/LayeredImage";
import variables from "../../styles/variables.module.scss";
import styles from "./Event.module.scss";

const Event = ({
  name,
  date,
  image,
  location,
  description,
  startTime,
  endTime,
}) => {
  return (
    <div className={`${styles.event}`}>
      <div className={styles.event__image}>
        <LayeredImage
          image={image}
          backgroundColor={variables.secondary}
          positionX="left"
          positionY="top"
        />
      </div>
      {/* <div > */}
      <div className={styles.event__content}>
        <h2 className={styles.event__title}>{name}</h2>
        <div className={styles.event__details}>
          <p>
            <span>
              <img src="assets/icons/calendar.svg" />
            </span>
            {date}
          </p>
          <p>
            <span>
              <img src="assets/icons/clock.svg" />
            </span>
            {startTime} - {endTime}
          </p>
          <p>
            <span>
              <img src="assets/icons/pin.svg" />
            </span>
            {location}
          </p>
        </div>

        <p className={styles.event__description}>{description}</p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Event;
