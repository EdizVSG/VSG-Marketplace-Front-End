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
    const res = await makeRequest({
        path: "",
        method: "POST",
        data,
    });
    return await res.json();
};

export const editProduct = async (id, data) => {
    const res = await makeRequest({
        path: id,
        method: "PUT",
        data,
    });
    return res.json();
};

export const deleteProduct = async (id) => {
    const res = await makeRequest({
        path: id,
        method: "DELETE",
    });
    return res;
};

export const createOrder = async (data) => {
    const res = await makeRequest({
        path: "",
        method: "POST",
        data,
    });
    return res;
};

export const completeOrder = async (id) => {
    const res = await makeRequest({
        path: id,
        method: "PUT",
    });
    return res;
};

export const rejectOrder = async (id) => {
    const res = await makeRequest({
        path: id,
        method: "PUT",
    });
    return res;
};

export const loadCategories = async () => {
    const category = [{ categoryId: 1, type: "Laptop" }, { categoryId: 2, type: "PC" }]
    return category;
};
