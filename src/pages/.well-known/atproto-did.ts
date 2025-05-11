export const prerender = false;
import type { APIContext } from 'astro';

import { GET as getDIDs } from '../api/bsky-did';

export async function GET(context: APIContext) {
    // Get Hostname
    const hostname = new URL(context.request.url).hostname;
    console.log(hostname);

    // Fetch JSON API route
    try {
        const res = await getDIDs(context);
        const dids = await res.json();

        return new Response(dids[hostname], { status: 200, headers: { "Content-Type": "text/plain", } });
    } catch (err) {
        console.error(err);
        return new Response("Something went wrong!", { status: 500, headers: { "Content-Type": "text/plain", } });
    }
}
