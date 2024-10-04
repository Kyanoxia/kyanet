import { defineMiddleware } from "astro:middleware";
import ical, { type CalendarComponent } from 'node-ical';

export const onRequest = defineMiddleware (async (context, next) => {        
    console.log("MIDDLEWARE EXECUTING");
    console.log(context.request.headers.get("user-agent"))

    if (context.url.pathname === "/join" || context.url.pathname === "/join/") {
        if (context.request.headers.get("user-agent")?.includes("bot", 0)) {
            // Await response and convert to json before continuing
            const res = await fetch(`https://discord.com/api/v10/invites/DVvGFXqpqH`);
            const data = await res.json();

            // Store in locals
            context.locals.dscName = data.guild.name;
            context.locals.dscImg = `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}`;
            context.locals.dscDesc = data.guild.description;

            return next();
        }

        return Response.redirect(new URL("https://discord.com/invite/DVvGFXqpqH"), 302)
    }

    if (context.url.pathname === "/schedule" || context.url.pathname === "/join/") {
        if (String(context.url).includes("#access_token=")) {

        }
        // Initialize the interface
        interface CalendarEvent {
            [index: string]: CalendarComponent;
        }
        
        var rawEvents = {} as CalendarEvent
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

        // Store API response in webEvents
        const webEvents = await ical.fromURL('https://api.twitch.tv/helix/schedule/icalendar?broadcaster_id=617052436');

        // For every event, as long as it's not a calendar header, store the event in rawEvents with the Weekday as key
        for (var k in webEvents) {
            if (webEvents.hasOwnProperty(k) && k != 'refresh-interval' && k != 'vcalendar') {
                var ev = webEvents[k];

                /*  @ts-expect-error  */
                rawEvents[days[ev.start.getDay()]] = ev;
            }
        }

        // Pass it to the schedule local
        context.locals.schedule = rawEvents;
    }
    
    console.log("MIDDLEWARE FINISHED")
    return next();
});
