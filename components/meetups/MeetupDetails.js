import React, { Fragment } from "react";
import classes from "./MeetupDetails.module.css";
import Image from "next/image";

function MeetupDetails({ image, title, address, description }) {
  return (
    <section className={classes.detail}>
      <div className={classes.divImg}>
        <Image
          alt="image"
          layout="fill"
          objectFit="cover"
          className={classes.img}
          src={image}
        />
      </div>
      <h1>{title}</h1>
      <h3>{address}</h3>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetails;
