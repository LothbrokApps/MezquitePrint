/* =========================================================
   PRINTLAB DATA
========================================================= */

const DEFAULT_DATA = {

    settings:{

        businessName:"PRINTLAB",

        whatsapp:"8440000000",

        email:"hola@printlab.mx",

        city:"Saltillo, Coahuila",

        facebook:"#",

        instagram:"#",

        website:"#"

    },


    hero:{

        title:"Tu idea,|en gran formato.",

        description:
        "Impresión de alta calidad, diseño, personalización y soluciones gráficas para empresas, emprendedores, eventos y proyectos."

    },


    categories:[

        "Todos",

        "Impresión",

        "Corte Láser",

        "Personalizados",

        "Promocionales",

        "Empaques"

    ],


    products:[

        {

            id:1,

            name:"Tarjetas de presentación",

            category:"Impresión",

            price:120,

            description:
            "Tarjetas profesionales para marcas y negocios.",

            image:
            "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=900&q=80",

            active:true,

            tag:"Popular"

        },


        {

            id:2,

            name:"Volantes publicitarios",

            category:"Impresión",

            price:180,

            description:
            "Material promocional para campañas y eventos.",

            image:
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80",

            active:true,

            tag:""

        },


        {

            id:3,

            name:"Lonas publicitarias",

            category:"Impresión",

            price:250,

            description:
            "Gran formato para exteriores, negocios y eventos.",

            image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",

            active:true,

            tag:"Gran formato"

        },


        {

            id:4,

            name:"Letreros en acrílico",

            category:"Corte Láser",

            price:350,

            description:
            "Letreros personalizados para negocios y espacios.",

            image:
            "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=900&q=80",

            active:true,

            tag:""

        },


        {

            id:5,

            name:"Reconocimientos en madera",

            category:"Corte Láser",

            price:420,

            description:
            "Reconocimientos y piezas especiales.",

            image:
            "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80",

            active:true,

            tag:""

        },


        {

            id:6,

            name:"Stickers personalizados",

            category:"Personalizados",

            price:90,

            description:
            "Stickers para productos, marcas y proyectos.",

            image:
            "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=900&q=80",

            active:true,

            tag:"Popular"

        },


        {

            id:7,

            name:"Termos personalizados",

            category:"Personalizados",

            price:320,

            description:
            "Personalización para regalos, empresas y eventos.",

            image:
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",

            active:true,

            tag:""

        },


        {

            id:8,

            name:"Cajas personalizadas",

            category:"Empaques",

            price:280,

            description:
            "Empaques personalizados para productos.",

            image:
            "https://images.unsplash.com/photo-1601598851547-4302969d7b87?auto=format&fit=crop&w=900&q=80",

            active:true,

            tag:""

        }

    ],


    services:[

        {

            id:1,

            icon:"🖨️",

            name:"Impresión digital",

            description:
            "Impresión profesional para proyectos comerciales y personales.",

            active:true

        },


        {

            id:2,

            icon:"✦",

            name:"Corte y grabado láser",

            description:
            "Corte y grabado de precisión en diferentes materiales.",

            active:true

        },


        {

            id:3,

            icon:"✎",

            name:"Diseño gráfico",

            description:
            "Diseño de piezas para comunicar y destacar tu marca.",

            active:true

        },


        {

            id:4,

            icon:"▣",

            name:"Empaques",

            description:
            "Soluciones personalizadas para productos y negocios.",

            active:true

        }

    ],


    gallery:[

        {

            id:1,

            image:
            "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&q=80",

            title:"Identidad visual"

        },

        {

            id:2,

            image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",

            title:"Diseño editorial"

        },

        {

            id:3,

            image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",

            title:"Material promocional"

        },

        {

            id:4,

            image:
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=80",

            title:"Packaging"

        },

        {

            id:5,

            image:
            "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=80",

            title:"Producción"

        },

        {

            id:6,

            image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",

            title:"Publicidad"

        },

        {

            id:7,

            image:
            "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80",

            title:"Personalizados"

        },

        {

            id:8,

            image:
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80",

            title:"Impresión"

        }

    ],

    orders:[]

};


/* =========================================================
   STATE
========================================================= */

let DATA;

let CART=[];

let currentFilter="Todos";

let adminAuthenticated=false;


/* =========================================================
   LOAD DATA
========================================================= */

function loadData(){

    try{

        const saved =
        localStorage.getItem(
            "PRINTLAB_DATABASE"
        );

        if(saved){

            DATA=JSON.parse(saved);

        }else{

            DATA=
            JSON.parse(
                JSON.stringify(DEFAULT_DATA)
            );

            saveData();

        }

    }catch(error){

        DATA=
        JSON.parse(
            JSON.stringify(DEFAULT_DATA)
        );

    }

}


function saveData(){

    localStorage.setItem(
        "PRINTLAB_DATABASE",
        JSON.stringify(DATA)
    );

}


/* =========================================================
   TOAST
========================================================= */

function toast(message){

    const element=
    document.getElementById("toast");

    element.innerText=message;

    element.classList.add("show");

    setTimeout(()=>{

        element.classList.remove("show");

    },2200);

}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

function imageFallback(){

    return `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600">

        <rect
            width="600"
            height="600"
            fill="#111"/>

        <circle
            cx="300"
            cy="300"
            r="180"
            fill="#1d1d1d"/>

        <text
            x="300"
            y="315"
            text-anchor="middle"
            fill="#ffe500"
            font-size="55"
            font-family="Arial"
            font-weight="900">

            PRINTLAB

        </text>

    </svg>
    `;

}


/* =========================================================
   PUBLIC RENDER
========================================================= */

function renderPublic(){

    renderHero();

    renderFilters();

    renderProducts();

    renderServices();

    renderGallery();

    renderFooter();

}


/* =========================================================
   HERO
========================================================= */

function renderHero(){

    const title=
    DATA.hero.title
    .split("|")
    .join("<br>");

    document.getElementById(
        "heroTitle"
    ).innerHTML=title;

    document.getElementById(
        "heroDescription"
    ).innerText=
    DATA.hero.description;

    const container = document.querySelector(".hero-image");
    if(DATA.hero.media){
        let url = DATA.hero.media;
        // Convert drive links
        const driveRegex = /drive\.google\.com\/file\/d\/([^/]+)/;
        const match = url.match(driveRegex);
        if(match){
            url = `https://drive.google.com/uc?export=download&id=${match[1]}`;
        }
        
        if(DATA.hero.media.match(/\.(mp4|webm|ogg)$/i) || DATA.hero.media.includes("video")){
            container.innerHTML = `<video src="${escapeAttr(url)}" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;opacity:0.3;"></video>`;
        } else {
            container.innerHTML = `<img src="${escapeAttr(url)}" style="width:100%;height:100%;object-fit:cover;opacity:0.3;">`;
        }
    }

}


/* =========================================================
   FILTERS
========================================================= */

function renderFilters(){

    const container=
    document.getElementById(
        "productFilters"
    );

    container.innerHTML="";

    DATA.categories.forEach(
        category=>{

            const button=
            document.createElement(
                "button"
            );

            button.className=
            "filter "+
            (
                category===currentFilter
                ?
                "active"
                :
                ""
            );

            button.innerText=
            category;

            button.onclick=()=>{

                currentFilter=
                category;

                renderFilters();

                renderProducts();

            };

            container.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   PRODUCTS
========================================================= */

function renderProducts(){

    const grid=
    document.getElementById(
        "productsGrid"
    );

    grid.innerHTML="";

    let products=
    DATA.products.filter(
        product=>product.active
    );


    if(currentFilter!=="Todos"){

        products=
        products.filter(
            product=>
            product.category===
            currentFilter
        );

    }


    if(!products.length){

        grid.innerHTML=
        `<div class="empty">
        No hay productos disponibles.
        </div>`;

        return;

    }


    products.forEach(product=>{

        const card=
        document.createElement(
            "article"
        );

        card.className=
        "product-card";

        card.innerHTML=`

            <div class="product-image">

                ${
                    product.tag
                    ?
                    `<div class="product-tag">
                        ${escapeHTML(product.tag)}
                    </div>`
                    :
                    ""
                }

                <img
                    src="${escapeAttr(product.image)}"
                    alt="${escapeAttr(product.name)}"
                    onerror="this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(imageFallback())}'">

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${escapeHTML(product.category)}
                </div>

                <div class="product-name">
                    ${escapeHTML(product.name)}
                </div>

                <div class="product-description">
                    ${escapeHTML(product.description)}
                </div>


                <div class="product-bottom">

                    <div class="product-price">

                        $${formatMoney(product.price)}

                        <small>
                            Precio desde
                        </small>

                    </div>


                    <button
                        class="btn btn-yellow btn-small"
                        onclick="addToCart(${product.id})">

                        Cotizar

                    </button>

                </div>

            </div>
        `;

        card.onclick=
        function(event){

            if(
                event.target.tagName===
                "BUTTON"
            ) return;

            openProduct(product.id);

        };

        grid.appendChild(card);

    });

}


/* =========================================================
   SERVICES
========================================================= */

function renderServices(){

    const grid=
    document.getElementById(
        "servicesGrid"
    );

    grid.innerHTML="";

    DATA.services
    .filter(service=>service.active)
    .forEach(service=>{

        const card=
        document.createElement("div");

        card.className=
        "service-card";

        card.innerHTML=`

            <div class="service-icon">
                ${service.icon.startsWith('http') ? `<img src="${escapeAttr(service.icon)}" style="width:100%;height:100%;object-fit:cover;border-radius:13px;">` : escapeHTML(service.icon)}
            </div>

            <h3>
                ${escapeHTML(service.name)}
            </h3>

            <p>
                ${escapeHTML(service.description)}
            </p>

        `;

        grid.appendChild(card);

    });

}


/* =========================================================
   GALLERY
========================================================= */

function renderGallery(){

    const grid=
    document.getElementById(
        "galleryGrid"
    );

    grid.innerHTML="";

    DATA.gallery.forEach(item=>{

        const element=
        document.createElement("div");

        element.className=
        "gallery-item";

        element.innerHTML=`

            <img
                src="${escapeAttr(item.image)}"
                alt="${escapeAttr(item.title)}"
                onerror="this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(imageFallback())}'">

            <div class="gallery-overlay">

                <strong>
                    ${escapeHTML(item.title)}
                </strong>

            </div>

        `;

        grid.appendChild(element);

    });

}


/* =========================================================
   FOOTER
========================================================= */

function renderFooter(){

    const settings=
    DATA.settings;

    document.getElementById(
        "footerDescription"
    ).innerText=
    `${settings.businessName} - Impresión, diseño, personalización y soluciones gráficas.`;

    document.getElementById(
        "footerBusiness"
    ).innerText=
    `© ${new Date().getFullYear()} ${settings.businessName}`;

    document.getElementById(
        "topLocation"
    ).innerText=
    settings.city;

    const whatsapp=
    normalizePhone(
        settings.whatsapp
    );

    document.getElementById(
        "footerWhatsApp"
    ).href=
    `https://wa.me/52${whatsapp}`;

    document.getElementById(
        "footerFacebook"
    ).href=
    settings.facebook;

    document.getElementById(
        "footerInstagram"
    ).href=
    settings.instagram;

    document.getElementById(
        "footerEmail"
    ).href=
    `mailto:${settings.email}`;

}


/* =========================================================
   CART
========================================================= */

function addToCart(id){

    const product=
    DATA.products.find(
        product=>product.id===id
    );

    if(!product) return;

    CART.push(product);

    renderCart();

    openCart();

    toast(
        "Producto agregado a cotización"
    );

}


function removeFromCart(index){

    CART.splice(index,1);

    renderCart();

}


function renderCart(){

    const container=
    document.getElementById(
        "cartItems"
    );

    if(!CART.length){

        container.innerHTML=
        `<div class="cart-empty">

            Tu lista de cotización
            está vacía.

            <br><br>

            Agrega productos para
            solicitar información.

        </div>`;

        return;

    }

    container.innerHTML="";

    CART.forEach(
        (product,index)=>{

            const item=
            document.createElement(
                "div"
            );

            item.className=
            "cart-item";

            item.innerHTML=`

                <img
                    src="${escapeAttr(product.image)}"
                    onerror="this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(imageFallback())}'">

                <div class="cart-item-info">

                    <strong>
                        ${escapeHTML(product.name)}
                    </strong>

                    <small>
                        Desde $${formatMoney(product.price)} MXN
                    </small>

                    <button
                        class="remove-cart"
                        onclick="removeFromCart(${index})">

                        Eliminar

                    </button>

                </div>

            `;

            container.appendChild(item);

        }
    );

}


function openCart(){

    document.getElementById(
        "cartPanel"
    ).classList.add("open");

    document.getElementById(
        "globalOverlay"
    ).classList.add("show");

    document.body.classList.add(
        "no-scroll"
    );

}


function closeCart(){

    document.getElementById(
        "cartPanel"
    ).classList.remove("open");

    document.getElementById(
        "globalOverlay"
    ).classList.remove("show");

    document.body.classList.remove(
        "no-scroll"
    );

}


function sendCartWhatsApp(){

    if(!CART.length){

        toast(
            "Agrega al menos un producto"
        );

        return;

    }

    const list=
    CART
    .map(
        product=>
        `• ${product.name}`
    )
    .join("\n");

    const text=
`Hola ${DATA.settings.businessName} 👋

Quiero solicitar una cotización.

Productos:
${list}

¿Me pueden ayudar con cantidades, materiales y precio?`;

    openWhatsApp(text);

}


/* =========================================================
   PRODUCT DETAIL
========================================================= */

function openProduct(id){

    const product=
    DATA.products.find(
        product=>product.id===id
    );

    if(!product) return;

    const detail=
    document.getElementById(
        "productDetail"
    );

    detail.innerHTML=`

        <div class="product-detail-image">

            <img
                src="${escapeAttr(product.image)}"
                alt="${escapeAttr(product.name)}"
                onerror="this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(imageFallback())}'">

        </div>


        <div class="product-detail-info">

            <div class="eyebrow">
                ${escapeHTML(product.category)}
            </div>

            <h2>
                ${escapeHTML(product.name)}
            </h2>

            <div class="detail-price">
                Desde $${formatMoney(product.price)} MXN
            </div>

            <div class="detail-description">
                ${escapeHTML(product.description)}
            </div>

            <button
                class="btn btn-yellow"
                onclick="addToCart(${product.id});closeProductModal();">

                Agregar a cotización

            </button>

            <br>

            <button
                class="btn btn-outline"
                onclick="quoteSpecificProduct(${product.id})">

                Cotizar directamente

            </button>

        </div>

    `;

    document.getElementById(
        "productModal"
    ).classList.add("show");

    document.body.classList.add(
        "no-scroll"
    );

}


function closeProductModal(){

    document.getElementById(
        "productModal"
    ).classList.remove("show");

    document.body.classList.remove(
        "no-scroll"
    );

}


function quoteSpecificProduct(id){

    const product=
    DATA.products.find(
        product=>product.id===id
    );

    closeProductModal();

    openQuote();

    setTimeout(()=>{

        document.getElementById(
            "quoteProduct"
        ).value=
        product.name;

    },100);

}


/* =========================================================
   QUOTE
========================================================= */

function openQuote(){

    const select=
    document.getElementById(
        "quoteProduct"
    );

    select.innerHTML=
    `<option value="">
        Seleccionar producto
    </option>`;

    DATA.products
    .filter(product=>product.active)
    .forEach(product=>{

        const option=
        document.createElement(
            "option"
        );

        option.value=
        product.name;

        option.innerText=
        product.name;

        select.appendChild(option);

    });

    document.getElementById(
        "quoteModal"
    ).classList.add("show");

    document.body.classList.add(
        "no-scroll"
    );

}


function closeQuote(){

    document.getElementById(
        "quoteModal"
    ).classList.remove("show");

    document.body.classList.remove(
        "no-scroll"
    );

}


function submitQuote(){

    const name=
    document.getElementById(
        "quoteName"
    ).value.trim();

    const phone=
    document.getElementById(
        "quotePhone"
    ).value.trim();

    const email=
    document.getElementById(
        "quoteEmail"
    ).value.trim();

    const product=
    document.getElementById(
        "quoteProduct"
    ).value;

    const message=
    document.getElementById(
        "quoteMessage"
    ).value.trim();


    if(!name){

        toast(
            "Escribe tu nombre"
        );

        return;

    }


    if(!phone){

        toast(
            "Escribe tu WhatsApp"
        );

        return;

    }


    const quote={

        id:
        "COT-"+Date.now(),

        date:
        new Date().toISOString(),

        name,

        phone,

        email,

        product,

        message,

        status:"Nueva"

    };


    DATA.orders.push(quote);

    saveData();


    const text=
`Hola ${DATA.settings.businessName} 👋

Quiero solicitar una cotización.

Nombre:
${name}

WhatsApp:
${phone}

Correo:
${email || "No proporcionado"}

Producto:
${product || "Por definir"}

Proyecto:
${message || "Por definir"}

Folio:
${quote.id}`;

    closeQuote();

    openWhatsApp(text);

    toast(
        "Cotización preparada"
    );

}


/* =========================================================
   UPLOAD
========================================================= */

let filesToUpload = [];

function handleFileUpload(files){
    if(!files || files.length === 0) return;
    filesToUpload = files;
    document.getElementById("uploadModal").classList.add("show");
    document.body.classList.add("no-scroll");
}

function closeUploadModal(){
    document.getElementById("uploadModal").classList.remove("show");
    document.body.classList.remove("no-scroll");
    filesToUpload = [];
}

function confirmUpload(){
    const name = document.getElementById("upName").value.trim();
    const fileName = document.getElementById("upFileName").value.trim();
    const phone = document.getElementById("upPhone").value.trim();

    if(!name || !fileName || !phone){
        toast("Por favor completa todos los campos.");
        return;
    }

    // Lock inputs
    document.getElementById("upName").disabled = true;
    document.getElementById("upFileName").disabled = true;
    document.getElementById("upPhone").disabled = true;
    document.getElementById("btnConfirmUpload").style.display = "none";
    document.getElementById("uploadProgress").style.display = "block";

    document.getElementById("uploadPercentage").innerText = "0%";
    document.getElementById("uploadProgressBar").style.width = "0%";

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 12) + 5;
        if(progress > 100) progress = 100;
        
        document.getElementById("uploadPercentage").innerText = progress + "%";
        document.getElementById("uploadProgressBar").style.width = progress + "%";
        
        if(progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                closeUploadModal();
                toast("Tus archivos se cargarón correctamente");

                // Unlock for next time
                document.getElementById("upName").disabled = false;
                document.getElementById("upFileName").disabled = false;
                document.getElementById("upPhone").disabled = false;
                document.getElementById("btnConfirmUpload").style.display = "block";
                document.getElementById("uploadProgress").style.display = "none";
                
                // Reset form
                document.getElementById("upName").value = "";
                document.getElementById("upFileName").value = "";
                document.getElementById("upPhone").value = "";

                // Send WhatsApp
                const text = `*Nuevo Pedido / Archivos Cargados*\n\nNombre: ${name}\nArchivo/Proyecto: ${fileName}\nWhatsApp: ${phone}\n\nLos archivos han sido cargados a Google Drive.`;
                const url = `https://wa.me/528443626425?text=${encodeURIComponent(text)}`;
                window.open(url, "_blank");
            }, 600);
        }
    }, 350);
}


/* =========================================================
   SEARCH
========================================================= */

function openSearch(){

    document.getElementById(
        "searchModal"
    ).classList.add("show");

    document.body.classList.add(
        "no-scroll"
    );

    setTimeout(()=>{

        document.getElementById(
            "searchInput"
        ).focus();

    },100);

}


function closeSearch(){

    document.getElementById(
        "searchModal"
    ).classList.remove("show");

    document.body.classList.remove(
        "no-scroll"
    );

}


function performSearch(){

    const term=
    document.getElementById(
        "searchInput"
    ).value
    .toLowerCase()
    .trim();

    const results=
    document.getElementById(
        "searchResults"
    );

    if(!term){

        results.innerHTML=
        `<div class="empty">
            Escribe algo para buscar.
        </div>`;

        return;

    }


    const products=
    DATA.products.filter(
        product=>
        product.active &&
        (
            product.name
            .toLowerCase()
            .includes(term)
            ||
            product.category
            .toLowerCase()
            .includes(term)
            ||
            product.description
            .toLowerCase()
            .includes(term)
        )
    );


    if(!products.length){

        results.innerHTML=
        `<div class="empty">
            No encontramos resultados.
        </div>`;

        return;

    }


    results.innerHTML=
    products
    .map(
        product=>`

        <div
            style="
            display:flex;
            align-items:center;
            gap:12px;
            padding:12px 0;
            border-bottom:1px solid #222;
            cursor:pointer;
            "
            onclick="closeSearch();openProduct(${product.id})">

            <img
                src="${escapeAttr(product.image)}"
                style="
                width:55px;
                height:55px;
                object-fit:cover;
                border-radius:7px;
                "
                onerror="this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(imageFallback())}'">

            <div>

                <strong>
                    ${escapeHTML(product.name)}
                </strong>

                <small
                    style="
                    display:block;
                    color:#777;
                    ">

                    ${escapeHTML(product.category)}

                </small>

            </div>

        </div>

    `
    )
    .join("");

}


/* =========================================================
   MOBILE
========================================================= */

function toggleMobileNav(){

    document.getElementById(
        "mobileNav"
    ).classList.toggle("show");

}


/* =========================================================
   HELPERS
========================================================= */

function scrollToProducts(){

    document.getElementById(
        "productos"
    ).scrollIntoView({
        behavior:"smooth"
    });

}


function normalizePhone(phone){

    return String(phone)
    .replace(/\D/g,"");

}


function openWhatsApp(text){

    const phone=
    normalizePhone(
        DATA.settings.whatsapp
    );

    const url=
    `https://wa.me/52${phone}?text=${encodeURIComponent(text)}`;

    window.open(
        url,
        "_blank"
    );

}


function formatMoney(value){

    return Number(value || 0)
    .toLocaleString(
        "es-MX",
        {
            minimumFractionDigits:2,
            maximumFractionDigits:2
        }
    );

}


function escapeHTML(value){

    return String(value ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


function escapeAttr(value){

    return escapeHTML(value);

}


function closeAllPanels(){

    closeCart();

}


/* =========================================================
   ADMIN
========================================================= */

function openAdmin(){

    document.getElementById(
        "publicApp"
    ).classList.add("hidden");

    document.getElementById(
        "adminRoot"
    ).classList.remove("hidden");

    renderAdmin();

}


function closeAdmin(){

    document.getElementById(
        "adminRoot"
    ).classList.add("hidden");

    document.getElementById(
        "publicApp"
    ).classList.remove("hidden");

    history.replaceState(
        null,
        "",
        location.pathname
    );

    renderPublic();

}


function renderAdmin(){

    if(!adminAuthenticated){

        renderAdminLogin();

        return;

    }

    renderAdminDashboard();

}


/* =========================================================
   ADMIN LOGIN
========================================================= */

function renderAdminLogin(){

    const root=
    document.getElementById(
        "adminRoot"
    );

    root.innerHTML=`

        <div class="admin-login">

            <div class="login-box">

                <div class="logo">
                    <img src="assets/logo.png" alt="Logo Mezquite" style="height: 55px; width: auto; object-fit: contain;">
                </div>

                <br>

                <h1>
                    Administración
                </h1>

                <p>
                    Acceso al centro de control
                    de PRINTLAB.
                </p>


                <div class="form-field">

                    <label>
                        Contraseña
                    </label>

                    <input
                        id="adminPassword"
                        type="password"
                        placeholder="Contraseña"
                        onkeydown="
                        if(event.key==='Enter')
                        loginAdmin()
                        ">

                </div>

                <br>

                <button
                    class="btn btn-yellow"
                    style="width:100%"
                    onclick="loginAdmin()">

                    Entrar al panel

                </button>

                <div
                    id="loginError"
                    class="login-error">
                </div>

                <br>

                <button
                    class="btn btn-outline"
                    style="width:100%"
                    onclick="closeAdmin()">

                    Volver al sitio

                </button>

            </div>

        </div>

    `;

}


function loginAdmin(){

    const password=
    document.getElementById(
        "adminPassword"
    ).value;

    if(password===atob("TUtU")){

        adminAuthenticated=true;

        renderAdmin();

        toast(
            "Bienvenido al panel"
        );

    }else{

        document.getElementById(
            "loginError"
        ).innerText=
        "Contraseña incorrecta.";

    }

}


/* =========================================================
   ADMIN DASHBOARD
========================================================= */

function renderAdminDashboard(){

    const root=
    document.getElementById(
        "adminRoot"
    );

    root.innerHTML=`

        <div class="admin-app">

            <aside class="admin-sidebar">

                <div class="admin-brand">

                    <div class="logo">
                        <img src="assets/logo.png" alt="Logo Mezquite" style="height: 55px; width: auto; object-fit: contain;">
                    </div>

                </div>


                <nav class="admin-menu">

                    <button
                        class="btn-yellow"
                        style="margin-bottom: 15px; color: #000; text-align: center; font-size: 13px; font-weight: 900; background: var(--yellow);"
                        onclick="alert('Subir Archivos - Función en desarrollo')">

                        📁 Subir Archivos

                    </button>

                    <button
                        class="active"
                        onclick="adminSection('dashboard')">

                        📊 Dashboard

                    </button>

                    <button
                        onclick="adminSection('products')">

                        📦 Productos

                    </button>

                    <button
                        onclick="adminSection('services')">

                        ⚙ Servicios

                    </button>

                    <button
                        onclick="adminSection('gallery')">

                        🖼️ Galería

                    </button>

                    <button
                        onclick="adminSection('content')">

                        🎨 Contenido

                    </button>

                    <button
                        onclick="adminSection('orders')">

                        🛒 Cotizaciones

                    </button>

                    <button
                        onclick="adminSection('settings')">

                        ⚙ Configuración

                    </button>

                    <button
                        onclick="openPublicFromAdmin()">

                        🌐 Ver sitio

                    </button>

                    <button
                        onclick="logoutAdmin()">

                        🚪 Salir

                    </button>

                </nav>

            </aside>


            <main
                class="admin-content"
                id="adminMain">

            </main>

        </div>

    `;

    adminSection("dashboard");

}


/* =========================================================
   ADMIN SECTION ROUTER
========================================================= */

function adminSection(section){

    const main=
    document.getElementById(
        "adminMain"
    );

    if(section==="dashboard")
        renderAdminDashboardSection(main);

    if(section==="products")
        renderAdminProductsSection(main);

    if(section==="services")
        renderAdminServicesSection(main);

    if(section==="gallery")
        renderAdminGallerySection(main);

    if(section==="content")
        renderAdminContentSection(main);

    if(section==="orders")
        renderAdminOrdersSection(main);

    if(section==="settings")
        renderAdminSettingsSection(main);

}


/* =========================================================
   ADMIN DASHBOARD SECTION
========================================================= */

function renderAdminDashboardSection(main){

    const activeProducts=
    DATA.products.filter(
        product=>product.active
    ).length;

    const activeServices=
    DATA.services.filter(
        service=>service.active
    ).length;

    const quotes=
    DATA.orders.length;

    const newQuotes=
    DATA.orders.filter(
        order=>order.status==="Nueva"
    ).length;


    main.innerHTML=`

        <div class="admin-header">

            <div>

                <div class="eyebrow">
                    PRINTLAB
                </div>

                <h1>
                    Dashboard
                </h1>

            </div>

            <div class="admin-actions">

                <button
                    class="btn btn-yellow btn-small"
                    onclick="openPublicFromAdmin()">

                    Ver sitio

                </button>

                <button
                    class="btn btn-outline btn-small"
                    onclick="exportData()">

                    Exportar

                </button>

            </div>

        </div>


        <div class="admin-stats">

            <div class="admin-stat">

                <strong>
                    ${activeProducts}
                </strong>

                <span>
                    Productos activos
                </span>

            </div>


            <div class="admin-stat">

                <strong>
                    ${activeServices}
                </strong>

                <span>
                    Servicios activos
                </span>

            </div>


            <div class="admin-stat">

                <strong>
                    ${quotes}
                </strong>

                <span>
                    Cotizaciones
                </span>

            </div>


            <div class="admin-stat">

                <strong>
                    ${newQuotes}
                </strong>

                <span>
                    Cotizaciones nuevas
                </span>

            </div>

        </div>


        <div class="admin-panel">

            <div class="admin-panel-header">

                <h2>
                    Actividad reciente
                </h2>

                <button
                    class="btn btn-outline btn-small"
                    onclick="adminSection('orders')">

                    Ver todas

                </button>

            </div>


            ${
                DATA.orders.length
                ?
                renderRecentOrders()
                :
                `
                <div class="empty">

                    Todavía no hay
                    cotizaciones.

                </div>
                `
            }

        </div>


        <div class="admin-panel">

            <div class="admin-panel-header">

                <h2>
                    Acciones rápidas
                </h2>

            </div>


            <div
                style="
                display:grid;
                grid-template-columns:
                repeat(auto-fit,minmax(180px,1fr));
                gap:10px;
                ">

                <button
                    class="btn btn-yellow"
                    onclick="adminSection('products');setTimeout(addProductAdmin,100)">

                    + Producto

                </button>

                <button
                    class="btn btn-outline"
                    onclick="adminSection('services')">

                    Servicios

                </button>

                <button
                    class="btn btn-outline"
                    onclick="adminSection('content')">

                    Editar contenido

                </button>

                <button
                    class="btn btn-outline"
                    onclick="adminSection('settings')">

                    Configuración

                </button>

            </div>

        </div>

    `;

}


function renderRecentOrders(){

    const recent=
    DATA.orders
    .slice(-6)
    .reverse();

    return `

        <div class="admin-table-wrap">

            <table class="admin-table">

                <thead>

                    <tr>

                        <th>
                            Folio
                        </th>

                        <th>
                            Cliente
                        </th>

                        <th>
                            Producto
                        </th>

                        <th>
                            Estado
                        </th>

                    </tr>

                </thead>

                <tbody>

                    ${

                        recent
                        .map(
                            order=>`

                            <tr>

                                <td>
                                    ${escapeHTML(order.id)}
                                </td>

                                <td>
                                    ${escapeHTML(order.name)}
                                </td>

                                <td>
                                    ${escapeHTML(order.product || "Por definir")}
                                </td>

                                <td>

                                    <span class="status active">
                                        ${escapeHTML(order.status)}
                                    </span>

                                </td>

                            </tr>

                            `
                        )
                        .join("")

                    }

                </tbody>

            </table>

        </div>

    `;

}


/* =========================================================
   ADMIN PRODUCTS
========================================================= */

function renderAdminProductsSection(main){

    main.innerHTML=`

        <div class="admin-header">

            <div>

                <div class="eyebrow">
                    Catálogo
                </div>

                <h1>
                    Productos
                </h1>

            </div>


            <div class="admin-actions">

                <button
                    class="btn btn-yellow btn-small"
                    onclick="addProductAdmin()">

                    + Nuevo producto

                </button>

            </div>

        </div>


        <div class="admin-panel">

            <div class="admin-panel-header">

                <h2>
                    Catálogo actual
                </h2>

                <span style="color:#777;font-size:11px;">
                    ${DATA.products.length}
                    productos
                </span>

            </div>


            <div
                class="admin-product-grid">

                ${

                    DATA.products
                    .map(
                        product=>
                        renderAdminProductCard(product)
                    )
                    .join("")

                }

            </div>

        </div>

    `;

}


function renderAdminProductCard(product){

    return `

        <div class="admin-product-card">

            <img
                src="${escapeAttr(product.image)}"
                alt="${escapeAttr(product.name)}"
                onerror="this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(imageFallback())}'">


            <div class="admin-product-body">

                <h3>
                    ${escapeHTML(product.name)}
                </h3>

                <p>
                    ${escapeHTML(product.category)}
                </p>

                <p>
                    Desde $${formatMoney(product.price)} MXN
                </p>


                <br>


                <label class="switch">

                    <input
                        type="checkbox"
                        ${
                            product.active
                            ?
                            "checked"
                            :
                            ""
                        }
                        onchange="
                        toggleProduct(
                            ${product.id}
                        )
                        ">

                    <span class="switch-ui"></span>

                    <small>
                        ${
                            product.active
                            ?
                            "Visible"
                            :
                            "Oculto"
                        }
                    </small>

                </label>


                <div
                    class="admin-product-actions">

                    <button
                        class="edit-button"
                        onclick="
                        editProductAdmin(
                            ${product.id}
                        )">

                        Editar

                    </button>

                    <button
                        class="delete-button"
                        onclick="
                        deleteProductAdmin(
                            ${product.id}
                        )">

                        Eliminar

                    </button>

                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   ADD PRODUCT
========================================================= */

function addProductAdmin(){

    const name=
    prompt(
        "Nombre del producto:"
    );

    if(!name) return;


    const category=
    prompt(
        "Categoría:",
        "Impresión"
    ) || "Impresión";


    const price=
    Number(
        prompt(
            "Precio desde:",
            "100"
        )
    ) || 0;


    const image=
    prompt(
        "URL de la imagen:"
    ) ||
    "";


    const description=
    prompt(
        "Descripción:"
    ) ||
    "";


    const tag=
    prompt(
        "Etiqueta opcional:",
        ""
    ) ||
    "";


    DATA.products.push({

        id:Date.now(),

        name,

        category,

        price,

        description,

        image,

        active:true,

        tag

    });


    if(
        !DATA.categories
        .includes(category)
    ){

        DATA.categories.push(
            category
        );

    }


    saveData();

    renderAdminProductsSection(
        document.getElementById(
            "adminMain"
        )
    );

    toast(
        "Producto creado"
    );

}


/* =========================================================
   EDIT PRODUCT
========================================================= */

function editProductAdmin(id){

    const product=
    DATA.products.find(
        p=>p.id===id
    );

    if(!product) return;


    const name=
    prompt(
        "Nombre:",
        product.name
    );

    if(name!==null)
        product.name=name;


    const category=
    prompt(
        "Categoría:",
        product.category
    );

    if(category!==null)
        product.category=category;


    const price=
    prompt(
        "Precio:",
        product.price
    );

    if(price!==null)
        product.price=
        Number(price) || 0;


    const description=
    prompt(
        "Descripción:",
        product.description
    );

    if(description!==null)
        product.description=
        description;


    const image=
    prompt(
        "URL de imagen:",
        product.image
    );

    if(image!==null)
        product.image=image;


    const tag=
    prompt(
        "Etiqueta:",
        product.tag
    );

    if(tag!==null)
        product.tag=tag;


    saveData();

    renderAdminProductsSection(
        document.getElementById(
            "adminMain"
        )
    );

    toast(
        "Producto actualizado"
    );

}


/* =========================================================
   DELETE PRODUCT
========================================================= */

function deleteProductAdmin(id){

    const product=
    DATA.products.find(
        p=>p.id===id
    );

    if(!product) return;


    if(
        !confirm(
            `¿Eliminar "${product.name}"?`
        )
    ) return;


    DATA.products=
    DATA.products.filter(
        p=>p.id!==id
    );


    saveData();

    renderAdminProductsSection(
        document.getElementById(
            "adminMain"
        )
    );

    toast(
        "Producto eliminado"
    );

}


/* =========================================================
   TOGGLE PRODUCT
========================================================= */

function toggleProduct(id){

    const product=
    DATA.products.find(
        p=>p.id===id
    );

    if(!product) return;

    product.active=
    !product.active;

    saveData();

    renderAdminProductsSection(
        document.getElementById(
            "adminMain"
        )
    );

}


/* =========================================================
   ADMIN SERVICES
========================================================= */

function renderAdminServicesSection(main){

    main.innerHTML=`

        <div class="admin-header">

            <div>

                <div class="eyebrow">
                    Servicios
                </div>

                <h1>
                    Servicios
                </h1>

            </div>

            <button
                class="btn btn-yellow btn-small"
                onclick="addServiceAdmin()">

                + Nuevo servicio

            </button>

        </div>


        <div class="admin-panel">

            <div class="admin-table-wrap">

                <table class="admin-table">

                    <thead>

                        <tr>

                            <th>
                                Icono
                            </th>

                            <th>
                                Servicio
                            </th>

                            <th>
                                Descripción
                            </th>

                            <th>
                                Estado
                            </th>

                            <th>
                                Acciones
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                    ${

                        DATA.services
                        .map(
                            service=>`

                            <tr>

                                <td>
                                    ${service.icon.startsWith('http') ? `<img src="${escapeAttr(service.icon)}" style="width:30px;height:30px;object-fit:cover;border-radius:5px;">` : escapeHTML(service.icon)}
                                </td>

                                <td>
                                    ${escapeHTML(service.name)}
                                </td>

                                <td>
                                    ${escapeHTML(service.description)}
                                </td>

                                <td>

                                    <span
                                        class="status ${
                                            service.active
                                            ?
                                            "active"
                                            :
                                            "inactive"
                                        }">

                                        ${
                                            service.active
                                            ?
                                            "Activo"
                                            :
                                            "Oculto"
                                        }

                                    </span>

                                </td>

                                <td>

                                    <button
                                        class="btn btn-yellow btn-small"
                                        onclick="
                                        editServiceAdmin(
                                            ${service.id}
                                        )">

                                        Editar

                                    </button>

                                    <button
                                        class="btn btn-danger btn-small"
                                        onclick="
                                        deleteServiceAdmin(
                                            ${service.id}
                                        )">

                                        Eliminar

                                    </button>

                                </td>

                            </tr>

                            `
                        )
                        .join("")

                    }

                    </tbody>

                </table>

            </div>

        </div>

    `;

}


function addServiceAdmin(){

    const name=
    prompt(
        "Nombre del servicio:"
    );

    if(!name) return;


    const icon=
    prompt(
        "Icono (Emoji o Enlace de imagen):",
        "✦"
    ) || "✦";


    const description=
    prompt(
        "Descripción:"
    ) || "";


    DATA.services.push({

        id:Date.now(),

        icon,

        name,

        description,

        active:true

    });


    saveData();

    renderAdminServicesSection(
        document.getElementById(
            "adminMain"
        )
    );

}


function editServiceAdmin(id){

    const service=
    DATA.services.find(
        s=>s.id===id
    );

    if(!service) return;


    const name=
    prompt(
        "Nombre:",
        service.name
    );

    if(name!==null)
        service.name=name;


    const icon=
    prompt(
        "Icono (Emoji o Enlace de imagen):",
        service.icon
    );

    if(icon!==null)
        service.icon=icon;


    const description=
    prompt(
        "Descripción:",
        service.description
    );

    if(description!==null)
        service.description=
        description;


    saveData();

    renderAdminServicesSection(
        document.getElementById(
            "adminMain"
        )
    );

}


function deleteServiceAdmin(id){

    if(
        !confirm(
            "¿Eliminar servicio?"
        )
    ) return;


    DATA.services=
    DATA.services.filter(
        s=>s.id!==id
    );


    saveData();

    renderAdminServicesSection(
        document.getElementById(
            "adminMain"
        )
    );

}


/* =========================================================
   ADMIN GALLERY
========================================================= */

function renderAdminGallerySection(main){

    main.innerHTML=`

        <div class="admin-header">

            <div>

                <div class="eyebrow">
                    Portafolio
                </div>

                <h1>
                    Galería
                </h1>

            </div>

            <button
                class="btn btn-yellow btn-small"
                onclick="addGalleryAdmin()">

                + Agregar imagen

            </button>

        </div>


        <div class="admin-panel">

            <div
                class="admin-product-grid">

                ${

                    DATA.gallery
                    .map(
                        item=>`

                        <div class="admin-product-card">

                            <img
                                src="${escapeAttr(item.image)}"
                                alt="${escapeAttr(item.title)}"
                                onerror="this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(imageFallback())}'">

                            <div
                                class="admin-product-body">

                                <h3>
                                    ${escapeHTML(item.title)}
                                </h3>

                                <div
                                    class="admin-product-actions">

                                    <button
                                        class="edit-button"
                                        onclick="
                                        editGalleryAdmin(
                                            ${item.id}
                                        )">

                                        Editar

                                    </button>

                                    <button
                                        class="delete-button"
                                        onclick="
                                        deleteGalleryAdmin(
                                            ${item.id}
                                        )">

                                        Eliminar

                                    </button>

                                </div>

                            </div>

                        </div>

                        `
                    )
                    .join("")

                }

            </div>

        </div>

    `;

}


function addGalleryAdmin(){

    const image=
    prompt(
        "URL de imagen:"
    );

    if(!image) return;


    const title=
    prompt(
        "Nombre del proyecto:"
    ) || "Proyecto PRINTLAB";


    DATA.gallery.push({

        id:Date.now(),

        image,

        title

    });


    saveData();

    renderAdminGallerySection(
        document.getElementById(
            "adminMain"
        )
    );

}


function editGalleryAdmin(id){

    const item=
    DATA.gallery.find(
        g=>g.id===id
    );

    if(!item) return;


    const image=
    prompt(
        "URL:",
        item.image
    );

    if(image!==null)
        item.image=image;


    const title=
    prompt(
        "Título:",
        item.title
    );

    if(title!==null)
        item.title=title;


    saveData();

    renderAdminGallerySection(
        document.getElementById(
            "adminMain"
        )
    );

}


function deleteGalleryAdmin(id){

    if(
        !confirm(
            "¿Eliminar imagen?"
        )
    ) return;


    DATA.gallery=
    DATA.gallery.filter(
        g=>g.id!==id
    );


    saveData();

    renderAdminGallerySection(
        document.getElementById(
            "adminMain"
        )
    );

}


/* =========================================================
   ADMIN CONTENT
========================================================= */

function renderAdminContentSection(main){

    main.innerHTML=`

        <div class="admin-header">

            <div>

                <div class="eyebrow">
                    Contenido
                </div>

                <h1>
                    Contenido principal
                </h1>

            </div>

        </div>


        <div class="admin-panel">

            <div class="admin-panel-header">

                <h2>
                    Hero principal
                </h2>
                
                <div style="display:flex;gap:10px;">
                    <button class="btn btn-outline btn-small" onclick="updateHeroMedia()">
                        Link de Imagen/Video
                    </button>
                    <button class="btn btn-outline btn-small" onclick="window.open('https://drive.google.com/drive/folders/1-UIQ_X_XDCu-uq3cKnEPfI2h0lMSaGyZ?usp=sharing', '_blank')">
                        Abrir Drive
                    </button>
                </div>

            </div>


            <div class="form-grid">

                <div class="form-field full">

                    <label>
                        Título
                    </label>

                    <input
                        id="adminHeroTitle"
                        value="${escapeAttr(DATA.hero.title)}">

                    <small
                        style="color:#666">

                        Utiliza | para separar
                        líneas.

                    </small>

                </div>


                <div class="form-field full">

                    <label>
                        Descripción
                    </label>

                    <textarea
                        id="adminHeroDescription">${escapeHTML(DATA.hero.description)}</textarea>

                </div>

            </div>

            <br>

            <button
                class="btn btn-yellow"
                onclick="saveAdminContent()">

                Guardar cambios

            </button>

        </div>


        <div class="admin-panel">

            <div class="admin-panel-header">

                <h2>
                    Categorías
                </h2>

                <button
                    class="btn btn-yellow btn-small"
                    onclick="addCategoryAdmin()">

                    + Categoría

                </button>

            </div>


            <div
                style="
                display:flex;
                gap:8px;
                flex-wrap:wrap;
                ">

                ${

                    DATA.categories
                    .map(
                        category=>`

                        <div
                            style="
                            padding:9px 13px;
                            border:1px solid #333;
                            border-radius:20px;
                            font-size:11px;
                            ">

                            ${escapeHTML(category)}

                        </div>

                        `
                    )
                    .join("")

                }

            </div>

        </div>

    `;

}


function saveAdminContent(){

    const title=
    document.getElementById(
        "adminHeroTitle"
    ).value;

    const description=
    document.getElementById(
        "adminHeroDescription"
    ).value;


    DATA.hero.title=title;

    DATA.hero.description=
    description;


    saveData();

    renderPublic();

    toast(
        "Contenido actualizado"
    );

}

function updateHeroMedia(){
    const url = prompt("Ingresa el enlace de la imagen o video (Soporta Google Drive):", DATA.hero.media || "");
    if(url !== null){
        DATA.hero.media = url;
        saveData();
        renderPublic();
        toast("Hero actualizado");
    }
}


function addCategoryAdmin(){

    const category=
    prompt(
        "Nombre de la categoría:"
    );

    if(!category) return;


    if(
        DATA.categories
        .includes(category)
    ){

        toast(
            "La categoría ya existe"
        );

        return;

    }


    DATA.categories.push(
        category
    );

    saveData();

    renderAdminContentSection(
        document.getElementById(
            "adminMain"
        )
    );

}


/* =========================================================
   ADMIN ORDERS
========================================================= */

function renderAdminOrdersSection(main){

    main.innerHTML=`

        <div class="admin-header">

            <div>

                <div class="eyebrow">
                    Clientes
                </div>

                <h1>
                    Cotizaciones
                </h1>

            </div>


            <button
                class="btn btn-outline btn-small"
                onclick="exportQuotes()">

                Exportar CSV

            </button>

        </div>


        <div class="admin-panel">

            ${
                DATA.orders.length
                ?
                `

                <div class="admin-table-wrap">

                    <table class="admin-table">

                        <thead>

                            <tr>

                                <th>
                                    Folio
                                </th>

                                <th>
                                    Fecha
                                </th>

                                <th>
                                    Cliente
                                </th>

                                <th>
                                    WhatsApp
                                </th>

                                <th>
                                    Producto
                                </th>

                                <th>
                                    Estado
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                        ${

                            DATA.orders
                            .slice()
                            .reverse()
                            .map(
                                order=>`

                                <tr>

                                    <td>
                                        ${escapeHTML(order.id)}
                                    </td>

                                    <td>
                                        ${new Date(order.date).toLocaleDateString("es-MX")}
                                    </td>

                                    <td>
                                        ${escapeHTML(order.name)}
                                    </td>

                                    <td>
                                        ${escapeHTML(order.phone)}
                                    </td>

                                    <td>
                                        ${escapeHTML(order.product || "Por definir")}
                                    </td>

                                    <td>

                                        <select
                                            onchange="
                                            updateOrderStatus(
                                                '${escapeAttr(order.id)}',
                                                this.value
                                            )"
                                            style="
                                            background:#080808;
                                            color:#fff;
                                            border:1px solid #333;
                                            padding:6px;
                                            border-radius:6px;
                                            ">

                                            <option
                                                ${
                                                    order.status==="Nueva"
                                                    ?
                                                    "selected"
                                                    :
                                                    ""
                                                }>
                                                Nueva
                                            </option>

                                            <option
                                                ${
                                                    order.status==="Contactada"
                                                    ?
                                                    "selected"
                                                    :
                                                    ""
                                                }>
                                                Contactada
                                            </option>

                                            <option
                                                ${
                                                    order.status==="Cotizada"
                                                    ?
                                                    "selected"
                                                    :
                                                    ""
                                                }>
                                                Cotizada
                                            </option>

                                            <option
                                                ${
                                                    order.status==="Cerrada"
                                                    ?
                                                    "selected"
                                                    :
                                                    ""
                                                }>
                                                Cerrada
                                            </option>

                                        </select>

                                    </td>

                                </tr>

                                `
                            )
                            .join("")

                        }

                        </tbody>

                    </table>

                </div>

                `
                :
                `
                <div class="empty">

                    No hay cotizaciones todavía.

                </div>
                `
            }

        </div>

    `;

}


function updateOrderStatus(id,status){

    const order=
    DATA.orders.find(
        o=>o.id===id
    );

    if(!order) return;

    order.status=status;

    saveData();

    toast(
        "Estado actualizado"
    );

}


function exportQuotes(){

    if(!DATA.orders.length){

        toast(
            "No hay cotizaciones"
        );

        return;

    }


    const header=
    [
        "Folio",
        "Fecha",
        "Nombre",
        "WhatsApp",
        "Correo",
        "Producto",
        "Mensaje",
        "Estado"
    ];


    const rows=
    DATA.orders.map(
        order=>[
            order.id,
            order.date,
            order.name,
            order.phone,
            order.email,
            order.product,
            order.message,
            order.status
        ]
    );


    const csv=
    [header,...rows]
    .map(
        row=>
        row
        .map(
            cell=>
            `"${String(cell ?? "")
            .replace(/"/g,'""')}"`
        )
        .join(",")
    )
    .join("\n");


    downloadFile(
        "printlab-cotizaciones.csv",
        csv,
        "text/csv;charset=utf-8"
    );

}


/* =========================================================
   ADMIN SETTINGS
========================================================= */

function renderAdminSettingsSection(main){

    main.innerHTML=`

        <div class="admin-header">

            <div>

                <div class="eyebrow">
                    Sistema
                </div>

                <h1>
                    Configuración
                </h1>

            </div>

        </div>


        <div class="admin-panel">

            <div class="admin-panel-header">

                <h2>
                    Información comercial
                </h2>

            </div>


            <div class="form-grid">

                <div class="form-field">

                    <label>
                        Nombre comercial
                    </label>

                    <input
                        id="settingBusinessName"
                        value="${escapeAttr(DATA.settings.businessName)}">

                </div>


                <div class="form-field">

                    <label>
                        Ciudad
                    </label>

                    <input
                        id="settingCity"
                        value="${escapeAttr(DATA.settings.city)}">

                </div>


                <div class="form-field">

                    <label>
                        WhatsApp
                    </label>

                    <input
                        id="settingWhatsApp"
                        value="${escapeAttr(DATA.settings.whatsapp)}">

                </div>


                <div class="form-field">

                    <label>
                        Correo
                    </label>

                    <input
                        id="settingEmail"
                        value="${escapeAttr(DATA.settings.email)}">

                </div>


                <div class="form-field">

                    <label>
                        Facebook
                    </label>

                    <input
                        id="settingFacebook"
                        value="${escapeAttr(DATA.settings.facebook)}">

                </div>


                <div class="form-field">

                    <label>
                        Instagram
                    </label>

                    <input
                        id="settingInstagram"
                        value="${escapeAttr(DATA.settings.instagram)}">

                </div>

            </div>


            <br>

            <button
                class="btn btn-yellow"
                onclick="saveAdminSettings()">

                Guardar configuración

            </button>

        </div>


        <div class="admin-panel">

            <div class="admin-panel-header">

                <h2>
                    Base de datos local
                </h2>

            </div>


            <p
                style="
                color:#777;
                font-size:12px;
                margin-bottom:20px;
                ">

                Esta versión utiliza
                localStorage para pruebas.
                Puedes exportar toda la configuración
                y posteriormente migrarla a una
                base de datos real.

            </p>


            <div
                style="
                display:flex;
                gap:10px;
                flex-wrap:wrap;
                ">

                <button
                    class="btn btn-outline"
                    onclick="exportData()">

                    Exportar JSON

                </button>


                <button
                    class="btn btn-outline"
                    onclick="
                    document
                    .getElementById('importFile')
                    .click()">

                    Importar JSON

                </button>


                <input
                    id="importFile"
                    type="file"
                    accept=".json"
                    style="display:none"
                    onchange="importData(event)">


                <button
                    class="btn btn-danger"
                    onclick="resetDatabase()">

                    Restaurar demo

                </button>

            </div>

        </div>


        <div class="admin-panel">

            <div class="admin-panel-header">

                <h2>
                    Seguridad
                </h2>

            </div>

            <p
                style="
                color:#777;
                font-size:12px;
                ">

                La contraseña actual de demostración
                es <strong style="color:#fff">
                PRINTLAB2026
                </strong>.

                <br><br>

                En producción deberá reemplazarse
                por autenticación real con servidor.

            </p>

        </div>

    `;

}


function saveAdminSettings(){

    DATA.settings.businessName=
    document.getElementById(
        "settingBusinessName"
    ).value;

    DATA.settings.city=
    document.getElementById(
        "settingCity"
    ).value;

    DATA.settings.whatsapp=
    document.getElementById(
        "settingWhatsApp"
    ).value;

    DATA.settings.email=
    document.getElementById(
        "settingEmail"
    ).value;

    DATA.settings.facebook=
    document.getElementById(
        "settingFacebook"
    ).value;

    DATA.settings.instagram=
    document.getElementById(
        "settingInstagram"
    ).value;


    saveData();

    renderPublic();

    toast(
        "Configuración guardada"
    );

}


/* =========================================================
   EXPORT DATABASE
========================================================= */

function exportData(){

    const json=
    JSON.stringify(
        DATA,
        null,
        2
    );

    downloadFile(
        "printlab-database.json",
        json,
        "application/json"
    );

    toast(
        "Configuración exportada"
    );

}


/* =========================================================
   IMPORT DATABASE
========================================================= */

function importData(event){

    const file=
    event.target.files[0];

    if(!file) return;


    const reader=
    new FileReader();


    reader.onload=
    function(){

        try{

            const imported=
            JSON.parse(
                reader.result
            );

            DATA=imported;

            saveData();

            renderPublic();

            renderAdmin();

            toast(
                "Base importada"
            );

        }catch(error){

            alert(
                "El archivo no es válido."
            );

        }

    };


    reader.readAsText(file);

}


/* =========================================================
   RESET
========================================================= */

function resetDatabase(){

    if(
        !confirm(
            "Esto restaurará todos los datos demo. ¿Continuar?"
        )
    ) return;


    DATA=
    JSON.parse(
        JSON.stringify(DEFAULT_DATA)
    );

    saveData();

    renderPublic();

    renderAdmin();

    toast(
        "Base restaurada"
    );

}


/* =========================================================
   DOWNLOAD
========================================================= */

function downloadFile(
    filename,
    content,
    type
){

    const blob=
    new Blob(
        [content],
        {
            type
        }
    );

    const url=
    URL.createObjectURL(blob);

    const a=
    document.createElement("a");

    a.href=url;

    a.download=filename;

    document.body.appendChild(a);

    a.click();

    a.remove();

    URL.revokeObjectURL(url);

}


/* =========================================================
   ADMIN PUBLIC
========================================================= */

function openPublicFromAdmin(){

    adminAuthenticated=false;

    document.getElementById(
        "adminRoot"
    ).classList.add("hidden");

    document.getElementById(
        "publicApp"
    ).classList.remove("hidden");

    history.replaceState(
        null,
        "",
        location.pathname
    );

    renderPublic();

}


/* =========================================================
   ADMIN LOGOUT
========================================================= */

function logoutAdmin(){

    adminAuthenticated=false;

    renderAdminLogin();

}


/* =========================================================
   INIT
========================================================= */

loadData();

renderPublic();


/* =========================================================
   KEYBOARD LISTENERS (SECRET ADMIN & ESCAPE)
========================================================= */

const SECRET_CODE = atob("TUtUMjAyNg==");
let keySequence = "";

document.addEventListener(
    "keydown",
    function(event){

        if (event.key.length === 1) {
            keySequence += event.key.toUpperCase();
            if (keySequence.length > SECRET_CODE.length) {
                keySequence = keySequence.substring(keySequence.length - SECRET_CODE.length);
            }
            if (keySequence === SECRET_CODE) {
                openAdmin();
                keySequence = "";
            }
        }

        if(event.key==="Escape"){
            closeCart();
            closeQuote();
            closeSearch();
            closeProductModal();
        }

    }
);


/* =========================================================
   CLICK OUTSIDE MODALS
========================================================= */

document
.getElementById("quoteModal")
.addEventListener(
    "click",
    function(event){

        if(
            event.target===
            this
        ){

            closeQuote();

        }

    }
);


document
.getElementById("productModal")
.addEventListener(
    "click",
    function(event){

        if(
            event.target===
            this
        ){

            closeProductModal();

        }

    }
);


document
.getElementById("searchModal")
.addEventListener(
    "click",
    function(event){

        if(
            event.target===
            this
        ){

            closeSearch();

        }

    }
);