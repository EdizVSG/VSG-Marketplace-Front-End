const baseURL = "https://fakestoreapi.com/products/";

export const loadPendingOrders = async () => {
    try {
        const data = await fetch(baseURL);
        return data;
    } catch (err) {
        console.error(err);
    }
};

export const loadMyOrders = async (email) => {
    try {
        const data = await fetch(baseURL);
        return data;
    } catch (err) {
        console.error(err);
    }
};

export const createOrder = async (data) => {
    try {
        const res = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        return res;
    } catch (err) {
        console.error(err);
    }
};

export const loadMarketplace = async () => {
    try {
        const data = await fetch(baseURL);
        return data;
    } catch (err) {
        console.error(err);
    }
};

export const loadInventory = async () => {
    try {
        const data = await fetch(baseURL);
        return data;
    } catch (err) {
        console.error(err);
    }
};

export const loadProduct = async (id) => {
    try {
        const data = await fetch(baseURL + id);;
        return await data.json();
    } catch (err) {
        console.error(err);
    }
};

export const createProduct = async (data) => {
    try {
        const res = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return res;
    } catch (err) {
        console.error(err);
    }
};

export const editProduct = async (id, data) => {
    try {
        const res = await fetch(baseURL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return res;
    } catch (err) {
        console.error(err);
    }
};

export const deleteProduct = async (id) => {
    try {
        const res = await fetch(baseURL + id, {
            method: "DELETE"
        });

        return res;
    } catch (err) {
        console.error(err);
    }
};

export const createImage = async (id, file) => {
    try {
        const res = await fetch(baseURL + id, {
            method: "POST",
            body: file,
        });

        return res;
    } catch (err) {
        console.error(err);
    }
};

export const editImage = async (id, file) => {
    try {
        const res = await fetch(baseURL + id, {
            method: "PUT",
            body: file,
        });

        return res;
    } catch (err) {
        console.error(err);
    }
};

export const completeOrder = async (id) => {
    try {
        const res = await fetch(baseURL + id, {
            method: "PUT",
        });

        return res;
    } catch (err) {
        console.error(err);
    }
}

export const rejectOrder = async (id) => {
    try {
        const res = await fetch(baseURL + id, {
            method: "PUT",
        });

        return res;
    } catch (err) {
        console.error(err);
    }
}