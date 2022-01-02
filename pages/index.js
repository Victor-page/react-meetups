import connectToDatabase from '../libs/mongodb';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = ({ meetups }) => <MeetupList meetups={meetups} />;

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
    revalidate: 3600,
  };
};

export default HomePage;
