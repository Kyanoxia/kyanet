/// <reference types="astro/client" />
declare namespace App {
    interface Locals {
        user: {
            name: string
        },

        dscName: string,
        dscImg: string,
        dscDesc: string,
        welcomeTitle: () => string,
        orders: Map<string, object>
    }
}
