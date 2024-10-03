import { defineMiddleware } from "astro:middleware";
import ical, { type CalendarComponent, type VEvent } from 'node-ical'

export const onRequest = defineMiddleware (async (context, next) => {        
    console.log("MIDDLEWARE EXECUTING");
    console.log(context.request.headers.get("user-agent"))

    if (context.url.pathname === "/join" || context.url.pathname === "/join/") {
        if (context.request.headers.get("user-agent")?.includes("bot", 0)) {
            const res = await fetch(`https://discord.com/api/v10/invites/DVvGFXqpqH`);
            const data = await res.json();

            context.locals.dscName = data.guild.name;
            context.locals.dscImg = `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}`;
            context.locals.dscDesc = data.guild.description;

            return next();
        }

        return Response.redirect(new URL("https://discord.com/invite/DVvGFXqpqH"), 302)
    }

    /* IMPLEMENT ICAL SUPPORT */
    interface CalendarEvent {
        [index: string]: CalendarComponent;
    }
    
    var rawEvents = {} as CalendarEvent

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const webEvents = await ical.fromURL('https://api.twitch.tv/helix/schedule/icalendar?broadcaster_id=617052436');
    //console.log(webEvents);

    for (var k in webEvents) {
        if (webEvents.hasOwnProperty(k) && k != 'refresh-interval' && k != 'vcalendar') {
            var ev = webEvents[k];

            /*  @ts-expect-error  */
            rawEvents[days[ev.start.getDay()]] = ev;
        }
    }

    context.locals.schedule = rawEvents;

    console.log(rawEvents);
    
    console.log("MIDDLEWARE FINISHED")
    return next();
});
