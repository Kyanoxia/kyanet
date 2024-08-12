import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware (async (context, next) => {        
    console.log("MIDDLEWARE EXECUTING");
    if (context.url.pathname === "/about") {
        const res = await fetch(`https://discord.com/api/v10/invites/DVvGFXqpqH`);
        const data = await res.json();

        context.locals.dscName = data.guild.name;
        context.locals.dscImg = `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}`;
        context.locals.dscDesc = data.guild.description;

        console.log(data)

        //return Response.redirect(new URL("https://discord.com/invite/DVvGFXqpqH"), 302)
    }
    console.log("MIDDLEWARE FINISHED")
    return next();
});
