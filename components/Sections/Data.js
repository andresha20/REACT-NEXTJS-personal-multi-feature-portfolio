export const data = {
    projects: 
        [
            { 
                id: "01", 
                name: {
                    en: "MERN Real Estate",
                    es: "MERN Bienes Raíces"
                }, 
                link: '#', 
                src: "/images/error.png", 
                alt: "React Library", 
                description: {
                    en: "This Real Estate website has been built using the MERN stack. It includes user authentication with JWT and Google Auth, API calls, likes, image slider, single page, live-search, accordions, context API, custom drag and drop, among other functionalities. Material-UI has been used for the styling.",
                    es: "Este sitio web de bienes raíces ha sido construído utilizando el stack MERN. Incluye autenticación de usuario con JWT y Google Auth, API calls, reacciones, deslizador de imagenes, busca en tiempo real, acordeones, context API, drag y drop personalizado, entre otras funcionalidades. Se utilizó Material-UI para el diseño."
                },
                technologiesUsed: [
                    { name: "ChartJS", function: { en: "Generate graphics", es: "Generar gráficos" } }, 
                    { name: "Chat Engine", function: { en: "Blbla", es: "Blabla" } }
                ] 
            }, 
            { 
                id: "02", 
                name: {
                    en: "SECOND NAME",
                    es: "SEGUNDO NOMBRE"
                }, 
                link: '#', 
                src: "/images/error.png", 
                alt: "React Library", 
                description: {
                    en: 'blablala',
                    es: 'bablalbla'
                }, 
                technologiesUsed: [
                    { name: "ChartJS", function: "Generate graphics" }, 
                    { name: "Chat Engine", function: "Build upon a pre-made chat" }
                ] 
            }
        ],
    components: 
        [
            {
                id: "01", 
                name: {
                    en: "Selection Dropdown",
                    es: "Lista Desplegable"
                }, 
                link: '/components/custom-select/cs', 
                src: "/images/dropdown.png", 
                alt: "Custom Dropdown", 
                description: {
                    en: `Custom dropdown with core and new functionalities such as: color switching, image compatibility, keyboard events and a few additional details.`,
                    es: "Lista despegable personalizada con funcionalidades nuevas y bases como: cambio de color, compatibilidad de imagenes, eventos del teclado y algunos detalles adicionales."
                }
            },
            {
                id: "02", 
                name: {
                    en: "Coupon Generator",
                    es: "Generador de Cupones"
                }, 
                link: '/components/coupons/coupons', 
                src: "/images/coupons.png", 
                alt: "Coupon Generator", 
                description: {
                    en: `Quickly generate custom or random coupons using a one-page interface for both the client and the coupon creator. Furthermore, it includes coupon redemption and expiration.`,
                    es: `Rápidamente genera cupones aleatorios o personalizados utilizando una interfaz de una sola página tanto para el cliente como para el creador. Adicionalmente, incluye redención y expiración de cupones.`,
                }
            },
            {
                id: "03", 
                name: {
                    en: "Shopping Cart",
                    es: "Carrito de Compras"
                }, 
                link: '/components/ecommerce/cart', 
                src: "/images/error.png", 
                alt: "Shopping Cart", 
                description: {
                    en: `Shopping Cart with core functionalities.`,
                    es: "Carrito de compras con funcionalidades bases."
                },
            },
        ]
}