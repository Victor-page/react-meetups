import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUpPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    // get the current environment
    const dev = process.env.NODE_ENV !== 'production';
    const { DEV_URL, PROD_URL } = process.env;
    const api = `${dev ? DEV_URL : PROD_URL}/api/new-meetup`;

    const response = await fetch(api, {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    // console.log(data);

    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUpPage;
