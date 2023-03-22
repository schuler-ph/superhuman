import { defineAppConfig } from "#app";

export default defineAppConfig({
    nuxtIcon: {
        size: "24px", // default <Icon> size applied
        class: "icon", // default <Icon> class applied
        aliases: {
            vue: "logos:vue",
            nuxt: "logos:nuxt-icon",
            tailwind: "logos:tailwindcss-icon",
            netlify: "logos:netlify",
            express: "simple-icons:express",
            postgres: "logos:postgresql",
            awsrds: "logos:aws-rds",
            asw: "logos:aws",
        },
    },
});
