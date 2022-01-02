import { ObjectId } from 'mongodb';
import connectToDatabase from '../../libs/mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = ({
  meetupData: { image, title, description, address },
}) => (
  <MeetupDetail
    image={image}
    title={title}
    description={description}
    address={address}
  />
);

export const getStaticPaths = async () => {
  const { client, meetupsCollection } = await connectToDatabase();

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetupDocument) => ({
      params: { meetupId: meetupDocument._id.toHexString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const { client, meetupsCollection } = await connectToDatabase();

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  const { image, title, description, _id } = selectedMeetup;

  client.close();

  return {
    props: {
      meetupData: {
        image: image,
        title: title,
        description: description,
        id: _id.toHexString(),
      },
    },
  };
};

export default MeetupDetails;
