import { IProduct } from "../src/types";

export const productModal = (product: IProduct): HTMLElement => {
    product.quantityForSale = 10;
    const modalContent = document.createElement("div") as HTMLElement;
    modalContent.id = "productModal";
    modalContent.className = "modalContent";
    modalContent.innerHTML = `
    <a class="closeModal">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.7305 2.02734L10.7578 9L17.7305 15.9727L15.9727 17.7305L9 10.7578L2.02734 17.7305L0.269531 15.9727L7.24219 9L0.269531 2.02734L2.02734 0.269531L9 7.24219L15.9727 0.269531L17.7305 2.02734Z"
            fill="black" />
        </svg>
    </a>
    <a id="modalImage">
        <img src="${product.image}">
    </a>
    <div id="modalFrameOne">
        <div id="modalFrameTwo">
            <div id="productName">
                <b>${product.title}</b>
                <small>${product.category}</small>
            </div>
            <div id="priceAndQty">
                <b>${product.price} BGN</b>
                <small>Qty: ${product.quantityForSale}</small>
            </div>
        </div>
        <p>
        ${product.description}
        </p>
        </div>
    </div>
    `;

    (document.querySelector("#addItemOverlay") as HTMLElement).appendChild(modalContent);
    setTimeout(() => {
        (document.querySelector("#addItemOverlay") as HTMLElement)
        modalContent.style.opacity = "1";
    }, 10);
    return modalContent;
};
