import type { APIContext } from 'astro';

export async function GET({ params, request }: APIContext) {
    const res = await fetch(`https://discord.com/api/v10/invites/DVvGFXqpqH`);
    const data = await res.json();

    const dscName = data.guild.name;
    const dscImg = `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}`;
    const dscDesc = data.guild.description;

    console.log(data)


    return new Response(
        `<head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <meta property="og:site_name" content="VainDiscord by Kyanoxia" />
    <meta property="og:title" content=${dscName} />
    <meta property="og:description" content=${dscDesc} />
    <meta property="og:image" content=${dscImg} />
    <meta name="theme-color" content=#D4CBE5 />
    <title>Join Us</title>
</head>
        `);
}
