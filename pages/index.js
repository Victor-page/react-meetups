import { Fragment } from 'react';
import Head from 'next/head';
import connectToDatabase from '../libs/mongodb';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = ({ meetups }) => (
  <Fragment>
    <Head>
      <title>React Meetups</title>
      <meta
        name="description"
        content="Browse a list of highly active React meetups"
      />
    </Head>
    <MeetupList meetups={meetups} />
  </Fragment>
);

export const getStaticProps = async () => {
  const { client, meetupsCollection } = await connectToDatabase();

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(({ title, address, image, _id }) => ({
        title,
        address,
        image,
        id: _id.toHexString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
