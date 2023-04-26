const baseURL = "https://fakestoreapi.com/products/";

export const makeRequest = async ({
    path = "",
    method = "GET",
    data = {},
    headers = {},
}) => {
    try {
        const options = {
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        };

        if (Object.keys(data).length > 0) {
            options.body = JSON.stringify(data);
        }

        const res = await fetch(baseURL + path, {
            method,
            ...options,
        });

        if (!res.ok) {
            throw new Error('Something went wrong!');
        }

        return res;
    } catch (err) {
        throw Error(err);
    }
};
