/// <reference types="astro/client" />

import type { VCalendar } from "node-ical"

declare global {
    namespace App {
        interface Locals {
            dscName: string;
            dscImg: string;
            dscDesc: string;
            schedule: CalendarEvent;
            welcomeTitle: string;
            orders: Map<string, object>;
        }
    }
}
