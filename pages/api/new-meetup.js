// /api/new-meetup
// POST /api/new-meetup

import connectToDatabase from '../../libs/mongodb';

const handler = async (request, response) => {
  if (request.method !== 'POST') {
    return;
  }

  const data = request.body;
  // const { title, image, address, description } = data;

  const { client, meetupsCollection } = await connectToDatabase();

  const result = await meetupsCollection.insertOne(data);
  client.close();

  response.status(201).json({ message: 'Meetup inserted!', result, data });
};

export default handler;
