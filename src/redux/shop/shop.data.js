const SHOP_DATA = [
{
        id: 1,
        title: 'BACKPACKS',
        routeName: 'backpacks',
        items: [
            {
                id: 101,
                name: 'YOYO BLACK',
                imgUrl: require('../../assets/yoyo-black.jpg'),
                linkUrl:'/category/backpacks/yoyo-black',
                price: 135
              },
            {
                id: 102,
                name: 'YOYO BROWN',
                imgUrl: require('../../assets/yoyo-brown.jpg'),
                linkUrl:'/category/backpacks/yoyo-brown',
                price: 135
              },
            {
                id: 103,
                name: 'EVA BLACK',
                imgUrl: require('../../assets/eva-black.jpg'),
                linkUrl:'/category/backpacks/eva-black',
                price: 135
              },
            {
                id: 104,
                name: 'EVA BROWN',
                imgUrl: require('../../assets/eva-brown.jpg'),
                linkUrl:'/category/backpacks/eva-brown',
                price: 135
              },
            {
                id: 105,
                name: 'FRIDA-BACKPACK',
                imgUrl: require('../../assets/frida-bp.jpg'),
                linkUrl:'/category/backpacks/frida-bp',
                price: 140
              },
            {
                id: 106,
                name: 'LILA',
                imgUrl: require('../../assets/lila.jpg'),
                linkUrl:'/category/backpacks/lila',
                price: 150
              }
        ]
    },
{
        id: 2,
        title: 'STACHELS',
        routeName: 'stachels',
        items: [
            {
                id: 201,
                name: 'WILL SATCHEL SMALL',
                imgUrl: require('../../assets/will-satchel-s.jpg'),
                linkUrl:'/category/stachels/will-satchel-s',
                price: 180
              },
            {
                id: 202,
                name: 'WILL SATCHEL MEDIUM',
                imgUrl: require('../../assets/will-satchel-m.jpg'),
                linkUrl:'/category/stachels/will-satchel-m',
                price: 220
                },
            {
                id: 203,
                name: 'WILL SATCHEL LARGE',
                imgUrl: require('../../assets/will-satchel-l.jpg'),
                linkUrl:'/category/stachels/will-satchel-l',
                price: 280
                },
            {
                id: 204,
                name: 'SANTA ANNA EXTRA SMALL',
                imgUrl: require('../../assets/santa-anna-xs.jpg'),
                linkUrl:'/category/stachels/santa-anna-xs',
                price: 145
                },
            {
                id: 205,
                name: 'SANTA ANNA SMALL',
                imgUrl: require('../../assets/santa-anna-s.jpg'),
                linkUrl:'/category/stachels/santa-anna-s',
                price: 155
                },
            {
                id: 206,
                name: 'SANTA ANNA MEDIUM',
                imgUrl: require('../../assets/santa-anna-m.jpg'),
                linkUrl:'/category/stachels/santa-anna-m',
                price: 165
                },
        ]
    },
{
        id: 3,
        title: 'HANDBAGS',
        routeName: 'handbags',
        items: [
            {
                id: 301,
                name: 'ALEX HANDBAG BROWN',
                imgUrl: require('../../assets/alex-hb-brn.jpg'),
                linkUrl:'/category/handbags/alex-hb-brn',
                price: 130
                },
            {
                id: 302,
                name: 'ALEX HANDBAG BLACK',
                imgUrl: require('../../assets/alex-black.jpg'),
                linkUrl:'/category/handbags/alex-black',
                price: 130
                }
        ]
    },
{
        id: 4,
        title: 'MENS',
        routeName: 'mens',
        items: []
    },
{
        id: 5,
        title: 'LAPTOP CASES',
        routeName: 'laptopcases',
        items: []
    },
{
        id: 6,
        title: 'WALLETS',
        routeName: 'wallets',
        items: []
    },
{
        id: 7,
        title: 'OTHER',
        routeName: 'other',
        items: []
    }
]

export default SHOP_DATA;