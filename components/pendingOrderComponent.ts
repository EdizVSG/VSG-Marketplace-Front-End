import { completeOrder } from "../src/itemsService.js";
import { IOrder } from "../src/types";

export const pendingOrderComponent = (product: IOrder) => {
    product.quantity = 1;
    product.email = "name@mail.com";
    product.date = "2022-12-12 12:12";

    const cardDiv = document.createElement("div");
    cardDiv.className = "pendingOrders";
    cardDiv.id = `${product.id}`;
    cardDiv.innerHTML = `
    <div class="firstThree">
        <span class="codeColumn">${product.id}</span>
        <span class="qtyColumn">${product.quantity}</span>
        <span class="priceColumn">${product.price} BGN</span>
    </div>
    <span class="orderedByColumn">${product.email}</span>
    <span class="orderDateColumn">${product.date}</span>
    <button class="actionColumn completeButton">Complete</button>
    `;

    (cardDiv.querySelector(".completeButton") as HTMLElement).addEventListener(
        "click",
        async (e) => {
            e.preventDefault();

            const res = await completeOrder(product.id);
            console.log(res);
            const currentElement = e.target as HTMLElement;
            const parentElement = currentElement.parentElement as HTMLElement;
            parentElement.remove();
        }
    );

    (document.querySelector("#pendingOrdersMain") as HTMLElement).appendChild(cardDiv);
};
