// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from 'mongodb';

const handler = async (request, response) => {
  if (request.method !== 'POST') {
    return;
  }

  const data = request.body;
  // const { title, image, address, description } = data;

  const client = await MongoClient.connect();
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const result = await meetupsCollection.insertOne(data);
  console.log(result);
  client.close();

  response.status(201).json({ message: 'Meetup inserted!', result, data });
};

export default handler;
