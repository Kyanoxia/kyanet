import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware (async (context, next) => {        
    console.log("MIDDLEWARE EXECUTING");
    console.log(context.request.headers.get("user-agent"))

    if (context.url.pathname === "/join") {
        if (context.request.headers.get("user-agent") === "Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)") {
            const res = await fetch(`https://discord.com/api/v10/invites/DVvGFXqpqH`);
            const data = await res.json();

            context.locals.dscName = data.guild.name;
            context.locals.dscImg = `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}`;
            context.locals.dscDesc = data.guild.description;

            return next();
        }

        return Response.redirect(new URL("https://discord.com/invite/DVvGFXqpqH"), 302)
    }
    
    console.log("MIDDLEWARE FINISHED")
    return next();
});
