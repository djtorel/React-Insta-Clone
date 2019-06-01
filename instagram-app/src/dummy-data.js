const dummyData = [
  {
    id: 1559168783930,
    username: 'philzcoffee',
    thumbnailUrl:
      'https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg',
    imageUrl:
      'https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg',
    likes: 400,
    timestamp: 'July 17th 2017, 12:42:40 pm',
    comments: [
      {
        username: 'philzcoffee',
        text:
          "We've got more than just delicious coffees to offer at our shops!",
        id: 1559202012663,
      },
      {
        username: 'biancasaurus',
        text: 'Looks delicious!',
        id: 1559199774009,
      },
      {
        username: 'martinseludo',
        text: "Can't wait to try it!",
        id: 1559195107683,
      },
    ],
  },
  {
    id: 1559168718186,
    username: 'fortnite',
    thumbnailUrl:
      'https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg',
    imageUrl:
      'https://tk-assets.lambdaschool.com/89d13918-b7a2-4b40-9658-f376ea3f6b59_37131538_213683546146400_1083714364399157248_n.jpg',
    likes: 4307,
    timestamp: 'July 15th 2017, 03:12:09 pm',
    comments: [
      {
        username: 'twitch',
        text: 'Epic Street Fighter action here in Las Vegas at #EVO2017!',
        id: 1559202158063,
      },
      {
        username: 'michaelmarzetta',
        text: 'Omg that match was crazy',
        id: 1559194296233,
      },
      {
        username: 'themexican_leprechaun',
        text: 'What a setup',
        id: 1559203203955,
      },
      {
        username: 'dennis_futbol',
        text: 'It that injustice',
        id: 1559199897492,
      },
      {
        username: 'dennis_futbol',
        text: 'Is',
        id: 1559203736646,
      },
    ],
  },
  {
    id: 1559169438095,
    username: 'playhearthstone',
    thumbnailUrl:
      'https://tk-assets.lambdaschool.com/c432f179-8bd7-4758-959d-d88a21f96bca_37105899_432228420518610_5035444036064772096_n.jpg',
    imageUrl:
      'https://tk-assets.lambdaschool.com/43bf01f9-319c-469d-8cf5-0120fe1007f1_yosemite.jpg',
    likes: 5306,
    timestamp: 'July 14th 2017, 10:04:08 am',
    comments: [
      {
        username: 'playhearthstone',
        text: 'Love this shot!',
        id: 1559198142726,
      },
      {
        username: 'awaywetravel',
        text: 'Yosemite is my most favorite place in the universe',
        id: 1559196547042,
      },
      {
        username: 'awesomebt28',
        text: 'I like how Half Dome looks so old and useless',
        id: 1559198795473,
      },
    ],
  },
];

export default dummyData;

dummyData.map(post => ({
  ...post,
  comments: post.comments.map(comment => ({
    ...comment,
    id: Math.floor(Math.random() * 10000000) + Date.now(),
  })),
}));
