const SHOP_DATA = {
    backpacks:{
        id: 1,
        title: 'BACKPACKS',
        routeName: 'backpacks',
        items: [
            {
                id: 'yoyo-black',
                name: 'YOYO BLACK',
                imgUrl: require('../../assets/yoyo-black.jpg'),
                linkUrl:'/category/backpacks/yoyo-black',
                price: 135
              },
            {
                id: 'yoyo-brown',
                name: 'YOYO BROWN',
                imgUrl: require('../../assets/yoyo-brown.jpg'),
                linkUrl:'/category/backpacks/yoyo-brown',
                price: 135
              },
            {
                id: 'eva-black',
                name: 'EVA BLACK',
                imgUrl: require('../../assets/eva-black.jpg'),
                linkUrl:'/category/backpacks/eva-black',
                price: 135
              },
            {
                id: 'eva-brown',
                name: 'EVA BROWN',
                imgUrl: require('../../assets/eva-brown.jpg'),
                linkUrl:'/category/backpacks/eva-brown',
                price: 135
              },
            {
                id: 'frida-bp',
                name: 'FRIDA-BACKPACK',
                imgUrl: require('../../assets/frida-bp.jpg'),
                linkUrl:'/category/backpacks/frida-bp',
                price: 140
              },
            {
                id: 'lila',
                name: 'LILA',
                imgUrl: require('../../assets/lila.jpg'),
                linkUrl:'/category/backpacks/lila',
                price: 150
              }
        ]
    },
    stachels:{
        id: 2,
        title: 'STACHELS',
        routeName: 'stachels',
        items: [
            {
                id: 'will-satchel-s',
                name: 'WILL SATCHEL SMALL',
                imgUrl: require('../../assets/will-satchel-s.jpg'),
                linkUrl:'/category/stachels/will-satchel-s',
                price: 180
              },
            {
                id: 'will-satchel-m',
                name: 'WILL SATCHEL MEDIUM',
                imgUrl: require('../../assets/will-satchel-m.jpg'),
                linkUrl:'/category/stachels/will-satchel-m',
                price: 220
                },
            {
                id: 'will-satchel-l',
                name: 'WILL SATCHEL LARGE',
                imgUrl: require('../../assets/will-satchel-l.jpg'),
                linkUrl:'/category/stachels/will-satchel-l',
                price: 280
                },
            {
                id: 'santa-anna-xs',
                name: 'SANTA ANNA EXTRA SMALL',
                imgUrl: require('../../assets/santa-anna-xs.jpg'),
                linkUrl:'/category/stachels/santa-anna-xs',
                price: 145
                },
            {
                id: 'santa-anna-s',
                name: 'SANTA ANNA SMALL',
                imgUrl: require('../../assets/santa-anna-s.jpg'),
                linkUrl:'/category/stachels/santa-anna-s',
                price: 155
                },
            {
                id: 'santa-anna-m',
                name: 'SANTA ANNA MEDIUM',
                imgUrl: require('../../assets/santa-anna-m.jpg'),
                linkUrl:'/category/stachels/santa-anna-m',
                price: 165
                },
        ]
    },
    handbags:{
        id: 3,
        title: 'HANDBAGS',
        routeName: 'handbags',
        items: [
            {
                id: 'alex-hb-brn',
                name: 'ALEX HANDBAG BROWN',
                imgUrl: require('../../assets/alex-hb-brn.jpg'),
                linkUrl:'/category/handbags/alex-hb-brn',
                price: 130
                },
            {
                id: 'alex-black',
                name: 'ALEX HANDBAG BLACK',
                imgUrl: require('../../assets/alex-black.jpg'),
                linkUrl:'/category/handbags/alex-black',
                price: 130
                }
        ]
    },
    mens:{
        id: 4,
        title: 'MENS',
        routeName: 'mens',
        items: []
    },
    laptopcases:{
        id: 5,
        title: 'LAPTOP CASES',
        routeName: 'laptopcases',
        items: []
    },
    wallets:{
        id: 6,
        title: 'WALLETS',
        routeName: 'wallets',
        items: []
    },
    other:{
        id: 7,
        title: 'OTHER',
        routeName: 'other',
        items: []
    }
}

export default SHOP_DATA;