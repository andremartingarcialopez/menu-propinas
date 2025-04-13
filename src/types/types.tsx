export type MenuItems = {
    id: number;
    name: string;
    price: number;
}

export type MenuItemsQuantity = MenuItems & {
    quantity: number
}