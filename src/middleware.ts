import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware (async (context, next) => {        
    console.log("MIDDLEWARE EXECUTING");
    console.log(context.request.headers.get("user-agent"));

    if (/(?<=\/blog\/)./g.test(context.url.pathname))
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
