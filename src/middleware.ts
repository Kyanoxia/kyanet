import { defineMiddleware } from "astro:middleware";
import ical, { type CalendarComponent } from 'node-ical';

export const onRequest = defineMiddleware (async (context, next) => {        
    console.log("MIDDLEWARE EXECUTING");
    console.log(context.request.headers.get("user-agent"))

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
    
    console.log("MIDDLEWARE FINISHED")
    return next();
});
