const SHOP_DATA = {
    backpacks:{
        id: 1,
        title: 'BACKPACKS',
        routeName: 'backpacks',
        items: [
            {
                id: '101',
                name: 'YOYO BLACK',
                imgUrl: require('../../assets/yoyo-black.jpg'),
                linkUrl:'/category/backpacks/101',
                price: 135
              },
            {
                id: '102',
                name: 'YOYO BROWN',
                imgUrl: require('../../assets/yoyo-brown.jpg'),
                linkUrl:'/category/backpacks/102',
                price: 135
              },
            {
                id: '103',
                name: 'EVA BLACK',
                imgUrl: require('../../assets/eva-black.jpg'),
                linkUrl:'/category/backpacks/103',
                price: 135
              },
            {
                id: '104',
                name: 'EVA BROWN',
                imgUrl: require('../../assets/eva-brown.jpg'),
                linkUrl:'/category/backpacks/104',
                price: 135
              },
            {
                id: '105',
                name: 'FRIDA-BACKPACK',
                imgUrl: require('../../assets/frida-bp.jpg'),
                linkUrl:'/category/backpacks/105',
                price: 140
              },
            {
                id: '106',
                name: 'LILA',
                imgUrl: require('../../assets/lila.jpg'),
                linkUrl:'/category/backpacks/106',
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
                id: '201',
                name: 'WILL SATCHEL SMALL',
                imgUrl: require('../../assets/will-satchel-s.jpg'),
                linkUrl:'/category/stachels/201',
                price: 180
              },
            {
                id: '202',
                name: 'WILL SATCHEL MEDIUM',
                imgUrl: require('../../assets/will-satchel-m.jpg'),
                linkUrl:'/category/stachels/202',
                price: 220
                },
            {
                id: '203',
                name: 'WILL SATCHEL LARGE',
                imgUrl: require('../../assets/will-satchel-l.jpg'),
                linkUrl:'/category/stachels/203',
                price: 280
                },
            {
                id: '204',
                name: 'SANTA ANNA EXTRA SMALL',
                imgUrl: require('../../assets/santa-anna-xs.jpg'),
                linkUrl:'/category/stachels/204',
                price: 145
                },
            {
                id: '205',
                name: 'SANTA ANNA SMALL',
                imgUrl: require('../../assets/santa-anna-s.jpg'),
                linkUrl:'/category/stachels/205',
                price: 155
                },
            {
                id: '206',
                name: 'SANTA ANNA MEDIUM',
                imgUrl: require('../../assets/santa-anna-m.jpg'),
                linkUrl:'/category/stachels/206',
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
                id: '301',
                name: 'ALEX HANDBAG BROWN',
                imgUrl: require('../../assets/alex-hb-brn.jpg'),
                linkUrl:'/category/handbags/301',
                price: 130
                },
            {
                id: '302',
                name: 'ALEX HANDBAG BLACK',
                imgUrl: require('../../assets/alex-black.jpg'),
                linkUrl:'/category/handbags/302',
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