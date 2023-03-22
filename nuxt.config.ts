// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false,
        typeCheck: true,
        strict: true,
    },
    modules: ["@nuxtjs/tailwindcss"],
    // buildModules: ["@nuxtjs/svg"],
    app: {
        head: {
            title: "Superhuman",
            meta: [
                {
                    name: "description",
                    content: "Self-improvement and self-tracking app.",
                },
                {
                    name: "msapplication-TileColor",
                    content: "#333333",
                },
                {
                    name: "theme-color",
                    content: "#ffffff",
                },
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png",
                },
                {
                    rel: "manifest",
                    href: "/site.webmanifest",
                },
                {
                    rel: "mask-icon",
                    href: "/safaro-pinned-tab.svg",
                    color: "#5bbad5",
                },
            ],
        },
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY,
        public: {
            //
        },
    },
});
