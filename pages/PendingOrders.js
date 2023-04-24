import { pendingOrderComponent } from "../components/pendingOrderComponent.js";
import { loadPendingOrders } from "../src/itemsService.js";

const PendingOrders = async () => {
    const main = document.querySelector('main');
    main.id = "pendingOrdersMain";
    main.innerHTML = `
    <div id="headingSection">
        <span class="codeColumn">Code</span>
        <span class="qtyColumn">QTY</span>
        <span class="priceColumn">Price</span>
        <span class="orderedByColumn">Ordered By</span>
        <span class="orderDateColumn">Order Date</span>
        <span class="actionColumn">Action</span>
    </div>
    `;

    const orders = await loadPendingOrders();
    orders.forEach(p => {
        pendingOrderComponent(p.id, p.id, 10, p.price, "name@mail.com", "2022.12.12 22:22");
    });
};

export default PendingOrders;
