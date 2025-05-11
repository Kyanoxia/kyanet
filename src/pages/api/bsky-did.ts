export const prerender = false;
import type { APIContext } from 'astro';

export async function GET({ params, request }: APIContext) {
    return new Response(JSON.stringify(
        {
            "kyanoxia.com": "did:plc:cocpebhxzqhh2vxsp4ivzdbr",
            "lyssa.kyanoxia.com": "did:plc:szroyyl5sbivkrdhlxhqlm2t",
            "localhost": "did:plc:cocpebhxzqhh2vxsp4ivzdbr",
            "lyssa.localhost": "did:plc:szroyyl5sbivkrdhlxhqlm2t"
        }
    ), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        }
    });
}
