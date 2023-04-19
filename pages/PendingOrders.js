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

    let pendingProducts = await loadPendingOrders();
    pendingProducts = await pendingProducts.json();
    console.log(pendingProducts);
    pendingProducts.forEach((p) => {
        pendingOrderComponent(p.id, p.id, "10", p.price, "eredzhepov@email.com", "2022-12-12", "Pending");
    });
};

export default PendingOrders;
