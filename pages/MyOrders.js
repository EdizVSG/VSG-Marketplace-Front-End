import { myOrderComponent } from "../components/myOrderComponent.js";
import { loadMyOrders } from "../src/itemsService.js";

const MyOrders = async () => {
    const main = document.querySelector('main');
    main.id = "myOrdersMain";
    main.innerHTML = `
    <div id="headingSection">
        <span class="nameColumn">Name</span>
        <span class="qtyColumn">QTY</span>
        <span class="priceColumn">Price</span>
        <span class="orderDateColumn">Order Date</span>
        <span class="orderStatus">Status</span>
    </div>
    `;

    const user = sessionStorage.getItem("user")
    const email = user ? user.username : "eredzhepov@vsgbg.com";
    let myProducts = await loadMyOrders(email);
    myProducts = await myProducts.json();
    myProducts.forEach((p) => {
        myOrderComponent(p.id, "10", "2022-12-12", "Pending", p.title, p.price);
    });
};

export default MyOrders;
