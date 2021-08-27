import { useState, useEffect, Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Learn NextJs</title>
        <meta name="description" content="the final version of learn nextJs" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  //send request to the server to fetch data from database
  const client = await MongoClient.connect(
    "mongodb+srv://yoyo:123321@cluster0.k7eye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(({ title, address, image, _id }) => ({
        title,
        address,
        image,
        id: _id.toString(),
      })),
    },
  };
}

export default HomePage;
