import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/06/11/new-york-city.jpg?width=982&height=726&auto=webp&quality=75',
    address: 'Some address 5, 12345 Some City',
    description: "This's a first meetup",
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://sacavoyage.fr/wp-content/uploads/MADRID.jpg',
    address: 'Some address 15, 12345 Some City',
    description: "This's a second meetup",
  },
];

const HomePage = ({ meetups }) => <MeetupList meetups={meetups} />;

export const getStaticProps = async () => {
  return {
    props: { meetups: DUMMY_MEETUPS },
    // revalidate: 3600,
  };
};

export default HomePage;
