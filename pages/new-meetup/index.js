import { useRouter } from "next/router";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { Fragment } from "react";
function index() {
  const router = useRouter();
  const handleOnAddMeetup = async (newMeetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetup),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>Add A MeetUp</title>
        <meta
          name="description"
          content="you can add and test now meetups form here"
        />
      </Head>
      <NewMeetupForm onAddMeetup={handleOnAddMeetup} />
    </Fragment>
  );
}

export default index;
