//Add product to cart
export const addCart = (product) => {
return {
    type: "ADDITEM",
    payload : product
}
}

//Add Delete Item In cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload : product
    }
}

