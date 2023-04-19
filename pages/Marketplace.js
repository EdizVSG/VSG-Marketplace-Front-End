import { cardComponent } from "../components/cardComponent.js";
import { loadMarketplace } from "../src/itemsService.js";

const Marketplace = async () => {
    const main = document.querySelector('main');
    main.id = "marketplaceMain";
    main.innerHTML = '';
    let products = await loadMarketplace();
    products = await products.json();
    products.forEach((p) => {
        cardComponent(p.id, p.price, "10", p.category, p.image);
    });
};

export default Marketplace;
