import { useEffect } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

function Get(yourUrl: string){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

const VainDiscord = ({ inv, col }: { inv: string, col: string }) => {
    useEffect(() => {
        window.location.href = 'https://discord.com/invite/' + inv;
    }, [inv]);

    const request = `https://discordapp.com/api/v9/invites/${inv}`

    var response = JSON.parse(Get(request));

    var serverName = response.guild.name;
    var serverDesc = response.guild.description;

    var serverID = response.guild.id;
    var cdnIcon = response.guild.icon
    var serverIcon = `https://cdn.discordapp.com/icons/${serverID}/${cdnIcon}.png`

    console.log(serverName)
    console.log(serverDesc)
    console.log(serverIcon)
    
    return (
        <HelmetProvider>
            <Helmet>
                <meta property="og:site_name" content="VainDiscord by Kyanoxia" />
                <meta property="og:title" content={serverName} />
                <meta property="og:description" content={serverDesc} />
                <meta property="og:image" content={serverIcon} />
                <meta name="theme-color" content={col} />
            </Helmet>
            <div className="cursor-default min-h-screen flex flex-row justify-center items-center">
                <h1>Redirecting To Discord...</h1>
            </div>
        </HelmetProvider>
    )
}

export default VainDiscord
