import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image=""
      title="title"
      description="descr"
      address="address"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
  };
};

export const getStaticProps = async (context) => {
  console.log('context', context);
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: '',
        title: 'title',
        description: 'descr',
        address: 'address',
        id: meetupId,
      },
    },
  };
};

export default MeetupDetails;
