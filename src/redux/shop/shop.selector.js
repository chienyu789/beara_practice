import { createSelector } from 'reselect';

const CATEGORY_ID_MAP = {
    backpacks:1,
    stachels:2,
    handbags:3,
    mens:4,
    laptopcases:5,
    wallets:6,
    other:7
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCategory = categoryUrlParams =>createSelector(
    [selectCollections],
    collections => collections.find(category => category.id === CATEGORY_ID_MAP[categoryUrlParams])
);