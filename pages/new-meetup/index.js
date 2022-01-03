import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUpPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    // get the current environment
    // const dev = process.env.NODE_ENV !== 'production';
    // const { DEV_URL, PROD_URL } = process.env;
    // const api = `${dev ? DEV_URL : PROD_URL}/api/new-meetup`;

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    // console.log(data);

    router.push('/');
  };

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Create your own amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetUpPage;
