"use client";

import { Event, PageContainer } from "@/components";
import { attributes } from "../../../copy/events/copy.md";
import moment from "moment";
import styles from "./Events.module.scss";




const Events = () => {
  let { hero, pageTitle, events, notFoundText } = attributes;

  const convertToDate = (str, format) => {
    return moment.utc(str).local().format(format);
  };

  return (
    <PageContainer
      hero={hero}
      pageTitle={events.length ? pageTitle : null}
      excludePadding={events.length ? ["bottom"] : []}
    >
      <div className={styles.events}>
        <div className={styles.events__container}>
          {!!events.length ? (
            events.map((event) => {
              return (
                <Event
                  key={`event-${event.name}`}
                  name={event.name}
                  date={convertToDate(event.start, "dddd, MMMM D")}
                  startTime={convertToDate(event.start, "ha")}
                  endTime={convertToDate(event.end, "ha")}
                  image={event.image}
                  location={event.location}
                  description={event.description}
                  cta={{ ...event.cta, variation: "primary", hollow: false }}
                />
              );
            })
          ) : (
            <div className={styles.events__none}>
              <h2>{notFoundText.heading}</h2>
              <p>{notFoundText.body}</p>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export default Events;
