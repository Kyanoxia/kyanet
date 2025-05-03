import { defineMiddleware } from "astro:middleware";
import dids from "./bsky-did.json";

export const onRequest = defineMiddleware (async (context, next) => {        
    console.log("MIDDLEWARE EXECUTING");
    console.log(context.request.headers.get("user-agent"));

    // Get Subdomain
    const subdomain = context.url.hostname;
    console.log(subdomain);

    if (context.url.pathname === "/join" || context.url.pathname === "/join/") {
        const inv: string = "DVvGFXqpqH";

        if (context.request.headers.get("user-agent")?.includes("bot", 0)) {
            // Await response and convert to json before continuing
            const res = await fetch(`https://discord.com/api/v10/invites/${inv}`);
            const data = await res.json();

            // Store in locals
            context.locals.dscName = data.guild.name;
            context.locals.dscImg = `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}`;
            context.locals.dscDesc = data.guild.description;
            context.locals.dscURL = `https://discord.com/invite/${inv}`;

            return next();
        }

        return Response.redirect(new URL(`https://discord.com/invite/${inv}`), 302)
    }
    else if (context.url.pathname === "/.well-known/atproto-did" || context.url.pathname === "/.well-known/atproto-did/") {
        //@ts-expect-error
        return new Response(dids[subdomain] + "\n", {
            status: 200,
            headers: {
                "content-type": "text/plain"
            }
        });
    }
    else if (/(?<=\/blog\/)./g.test(context.url.pathname))
    {
        const did = "did:plc:cocpebhxzqhh2vxsp4ivzdbr";
        const rkey = context.url.pathname.replace(/\/blog\//g, '');
        const res = await fetch(`https://blewit.us-west.host.bsky.network/xrpc/com.atproto.repo.getRecord?repo=${did}&collection=com.whtwnd.blog.entry&rkey=${rkey}`);
        const data = await res.json();

        if (data.hasOwnProperty("value"))
        {
            console.log(data.value.visibility);
            if (data.value.visibility === 'author')
            {
                return next("/404");
            }
        }
        else {
            return next("/404");
        }
    }
    
    console.log("MIDDLEWARE FINISHED")
    return next();
});
