const SHOP_DATA = {
  backpacks: {
    id: 1,
    title: 'BACKPACKS',
    routeName: 'backpacks',
    videoUrl: 'https://player.vimeo.com/video/369048834?background=1&autoplay=1&loop=1&byline=0&title=0',
    items: [
      {
        id: 101,
        title: 'yoyo-black',
        name: 'YOYO BLACK',
        imgUrl: require('../../assets/yoyo-black.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/backpacks/yoyo-black',
        price: 135,
      },
      {
        id: 102,
        title: 'yoyo-brown',
        name: 'YOYO BROWN',
        imgUrl: require('../../assets/yoyo-brown.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/backpacks/yoyo-brown',
        price: 135,
      },
      {
        id: 103,
        title: 'eva-black',
        name: 'EVA BLACK',
        imgUrl: require('../../assets/eva-black.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/backpacks/eva-black',
        price: 135,
      },
      {
        id: 104,
        title: 'eva-brown',
        name: 'EVA BROWN',
        imgUrl: require('../../assets/eva-brown.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/backpacks/eva-brown',
        price: 135,
      },
      {
        id: 105,
        title: 'frida-bp',
        name: 'FRIDA-BACKPACK',
        imgUrl: require('../../assets/frida-bp.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/backpacks/frida-bp',
        price: 140,
      },
      {
        id: 106,
        title: 'lila',
        name: 'LILA',
        imgUrl: require('../../assets/lila.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/backpacks/lila',
        price: 150,
      },
    ],
  },
  stachels: {
    id: 2,
    title: 'STACHELS',
    routeName: 'stachels',
    videoUrl: 'https://player.vimeo.com/video/369045160?background=1&autoplay=1&loop=1&byline=0&title=0',
    items: [
      {
        id: 201,
        title: 'will-satchel-s',
        name: 'WILL SATCHEL SMALL',
        imgUrl: require('../../assets/will-satchel-s.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/stachels/will-satchel-s',
        price: 180,
      },
      {
        id: 202,
        title: 'will-satchel-m',
        name: 'WILL SATCHEL MEDIUM',
        imgUrl: require('../../assets/will-satchel-m.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/stachels/will-satchel-m',
        price: 220,
      },
      {
        id: 203,
        title: 'will-satchel-l',
        name: 'WILL SATCHEL LARGE',
        imgUrl: require('../../assets/will-satchel-l.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/stachels/will-satchel-l',
        price: 280,
      },
      {
        id: 204,
        title: 'santa-anna-xs',
        name: 'SANTA ANNA EXTRA SMALL',
        imgUrl: require('../../assets/santa-anna-xs.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/stachels/santa-anna-xs',
        price: 145,
      },
      {
        id: 205,
        title: 'santa-anna-s',
        name: 'SANTA ANNA SMALL',
        imgUrl: require('../../assets/santa-anna-s.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/stachels/santa-anna-s',
        price: 155,
      },
      {
        id: 206,
        title: 'santa-anna-m',
        name: 'SANTA ANNA MEDIUM',
        imgUrl: require('../../assets/santa-anna-m.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/stachels/santa-anna-m',
        price: 165,
      },
    ],
  },
  handbags: {
    id: 3,
    title: 'HANDBAGS',
    routeName: 'handbags',
    videoUrl: 'https://player.vimeo.com/video/369042184?background=1&autoplay=1&loop=1&byline=0&title=0',
    items: [
      {
        id: 301,
        title: 'alex-hb-brn',
        name: 'ALEX HANDBAG BROWN',
        imgUrl: require('../../assets/alex-hb-brn.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/handbags/alex-hb-brn',
        price: 130,
      },
      {
        id: 302,
        title: 'alex-black',
        name: 'ALEX HANDBAG BLACK',
        imgUrl: require('../../assets/alex-black.jpg'), // eslint-disable-line global-require
        linkUrl: '/category/handbags/alex-black',
        price: 130,
      },
    ],
  },
  mens: {
    id: 4,
    title: 'MENS',
    routeName: 'mens',
    videoUrl: 'https://player.vimeo.com/video/369040833?background=1&autoplay=1&loop=1&byline=0&title=0',
    items: [],
  },
  laptopcases: {
    id: 5,
    title: 'LAPTOP CASES',
    routeName: 'laptopcases',
    videoUrl: 'https://player.vimeo.com/video/369038198?background=1&autoplay=1&loop=1&byline=0&title=0',
    items: [],
  },
  wallets: {
    id: 6,
    title: 'WALLETS',
    routeName: 'wallets',
    items: [],
  },
  other: {
    id: 7,
    title: 'OTHER',
    routeName: 'other',
    items: [],
  },
};

export default SHOP_DATA;
