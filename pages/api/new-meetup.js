// /api/new-meetup
// POST /api/new-meetup

const handler = (request, response) => {
  if (request.method !== 'POST') {
    return;
  }

  const data = request.body;
  const { title, image, address, description } = data;
};

export default handler;
