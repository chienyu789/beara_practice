import { createSelector } from 'reselect';

// const CATEGORY_ID_MAP = {
//     backpacks:1,
//     stachels:2,
//     handbags:3,
//     mens:4,
//     laptopcases:5,
//     wallets:6,
//     other:7
// };

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map( key => collections[key])
)

export const selectCategory = categoryUrlParams =>createSelector(
    [selectCollections],
    collections => collections[categoryUrlParams]
);

export const selectProduct = productUrlParams =>createSelector(
    [selectCategory],
    items => items.find(product => product.id === [productUrlParams])
    // items => Object.keys(items).find(item => item.id.endWith(productUrlParams) )
    // product => product.find(item => item.id === item.endWith(productUrlParams) )
);