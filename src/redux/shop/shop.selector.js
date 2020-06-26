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

export const selectProduct = (categoryUrlParams, productUrlParams) =>createSelector(
    [selectCategory(categoryUrlParams)],
    items => items.items.find(item => item.title === productUrlParams )
);