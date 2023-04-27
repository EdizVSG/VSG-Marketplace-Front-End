import { instance } from "../authConfig.ts";

export const imagePlaceholder = "/images/inventory/no-image-placeholder.png";

export const navStyling = (path: string) => {
    (document.querySelectorAll(".navButton") as NodeListOf<HTMLAnchorElement>).forEach((n: HTMLAnchorElement) => {
        const navPath = n.textContent?.trim().toLowerCase();
        if (path.includes("-")) {
            path = path.replace("-", " ");
        }

        const navItem = n.querySelector("path") as SVGPathElement;
        if (navPath === path) {
            n.className += " active";
            navItem.style.fill = "#F0F0F0";
        } else {
            n.className = "navButton";
            navItem.style.fill = "#ED1C25";
        }
    });
};

export const headerUpdate = (path: string) => {
    const titleElement = document.querySelector("#pageTitle") as HTMLElement;
    const root = document.querySelector("#root") as HTMLElement;

    if (path.includes("-")) {
        let [name1, name2]: string[] = path.split("-");
        name1 = name1.replace(name1[0], name1[0].toUpperCase());
        name2 = name2.replace(name2[0], name2[0].toUpperCase());
        titleElement.textContent = name1 + " " + name2;
    } else {
        const pageTitle: string = path.replace(path[0], path[0].toUpperCase());
        titleElement.textContent = pageTitle;
    }

    if (path === "/") {
        root.style.height = "100vh";
    } else {
        root.style.height = "calc(100vh - 60px)";
    }
};

export const closeModalHandler = (modal: HTMLElement) => {
    const overlay = modal.parentElement as HTMLElement;
    overlay.addEventListener("mousedown", (e: MouseEvent) => {
        if (e.target === overlay) {
            closing();
        }
    }, true);

    (modal.querySelector(".closeModal") as HTMLElement).addEventListener("click", closing, true);

    function closing() {
        modal.style.opacity = '0';
        overlay.style.opacity = '0';
        setTimeout(() => {
            modal.remove();
            overlay.style.display = "none";
        }, 500)
    }
};

export const closeContainerHandler = (container: HTMLElement) => {
    const yes = container.querySelector("yes") as HTMLElement;
    (container.querySelector("p") as HTMLElement).style.pointerEvents = "none";
    document.addEventListener("click", closeContainerClick, true);

    function closeContainerClick(e: MouseEvent) {
        e.preventDefault();
        if (yes !== e.target && container !== e.target) {
            container.style.opacity = "0";
            setTimeout(() => {
                container.remove();
            }, 500)

            document.removeEventListener("click", closeContainerClick);
        }
    }
};

export const imageHandler = (modal: HTMLElement) => {
    const imagePreview = modal.querySelector(".currentImg") as HTMLImageElement;
    const input = modal.querySelector(".inputImage") as HTMLInputElement;

    input.addEventListener("change", (e: Event) => {
        const files = (e.target as HTMLInputElement).files as FileList;
        const image = URL.createObjectURL(files[0]);
        imagePreview.src = image;
    });

    (modal.querySelector(".deleteImg") as HTMLElement).addEventListener("click", (e: MouseEvent) => {
        e.preventDefault();
        imagePreview.src = imagePlaceholder;
        input.value = "";
    });
};

export const responsiveHandler = (path: string) => {
    const header = document.querySelector('header') as HTMLElement;
    const hamburger = document.querySelector("#hamburger") as HTMLElement;
    const closeMenu = document.querySelector("#closeMenu") as HTMLElement;
    const main = document.querySelector("main") as HTMLElement;
    const aside = document.querySelector("aside") as HTMLElement;

    if (path === '/') {
        header.style.display = 'none';
        aside.style.position = 'fixed';
        aside.style.left = '-100%';
        return;
    }

    sidebar();
    header.style.display = 'flex';
    aside.style.position = 'static';

    window.addEventListener("resize", () => {
        if (window.innerWidth < 769) {
            mobileStyling();
        } else {
            webStyling();
        }
    });

    hamburger.addEventListener("click", () => {
        hamburger.style.display = "none";
        closeMenu.style.display = "block";
        main.style.right = '-100%';
        aside.style.left = '0';
    });

    closeMenu.addEventListener("click", () => {
        closeMenu.style.display = "none";
        hamburger.style.display = "block";
        aside.style.left = '-100%';
        main.style.right = '0';
    });

    if (window.innerWidth < 769) {
        mobileStyling();
    } else {
        webStyling();
    }

    function mobileStyling() {
        hamburger.style.display = "block";
        aside.style.position = 'fixed';
        aside.style.left = "-100%";
    }

    function webStyling() {
        hamburger.style.display = "none";
        closeMenu.style.display = "none";
        aside.style.left = "-100%";
        aside.style.position = 'static';
    }
};

export const sidebar = () => {
    const user = JSON.parse(sessionStorage.getItem("user") as string);
    const name = user ? user.name.split(" ")[0] : "User";
    (document.querySelector(".profileGreet span") as HTMLElement).textContent = `Hi, ${name} `;
    (document.querySelector(".profileGreet2 span") as HTMLElement).textContent = `Hi, ${name}`;
    (document.querySelector("#logout .navButton") as HTMLElement).addEventListener("click", async (e) => {
        e.preventDefault();
        await instance.logoutRedirect({
            postLogoutRedirectUri: "/",
        });
    });
};
