import { makeRequest } from "./makeRequest.js";

export const loadMarketplace = async () => {
    const res = await makeRequest({});
    return await res.json();
};

export const loadInventory = async () => {
    const res = await makeRequest({});
    return await res.json();
};

export const loadPendingOrders = async () => {
    const res = await makeRequest({});
    return await res.json();
};

export const loadMyOrders = async () => {
    const res = await makeRequest({});
    return await res.json();
};

export const loadProduct = async (id) => {
    const res = await makeRequest({ path: id });
    return await res.json();
};

export const createProduct = async (data) => {
    // const res = await makeRequest({
    //     path: "",
    //     method: "POST",
    //     data,
    // });
    return data;
};

export const editProduct = async (id, data) => {
    // const res = await makeRequest({
    //     path: id,
    //     method: "PUT",
    //     data,
    // });
    return id, data;
};

export const deleteProduct = async (id) => {
    // const res = await makeRequest({
    //     path: id,
    //     method: "DELETE",
    // });
    return id;
};

export const createOrder = async (data) => {
    // const res = await makeRequest({
    //     path: "",
    //     method: "POST",
    //     data,
    // });
    return data;
};

export const completeOrder = async (id) => {
    // const res = await makeRequest({
    //     path: id,
    //     method: "PUT",
    // });
    return id;
};

export const rejectOrder = async (id) => {
    // const res = await makeRequest({
    //     path: id,
    //     method: "PUT",
    // });
    return id;
};

export const loadCategories = async () => {
    const category = [
        { categoryId: 1, type: "Laptop" },
        { categoryId: 2, type: "PC" },
        { categoryId: 3, type: "Mouse" },
        { categoryId: 4, type: "Keyboard" },
        { categoryId: 5, type: "Monitor" },
    ];
    return category;
};
