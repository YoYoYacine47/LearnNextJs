import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

function MeetupDetailsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <MeetupDetails
        key={props.id}
        image={props.image}
        title={props.title}
        address={props.address}
        description={props.description}
      />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://yoyo:123321@cluster0.k7eye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();
  console.log({ meetupId });
  console.log({ selectedMeetup });
  const { title, image, description, address, _id } = selectedMeetup;

  return {
    props: {
      title,
      image,
      description,
      address,
      id: meetupId,
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://yoyo:123321@cluster0.k7eye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const ids = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: ids.map(({ _id }) => ({
      params: { meetupId: _id.toString() },
    })),
  };
}

export default MeetupDetailsPage;
