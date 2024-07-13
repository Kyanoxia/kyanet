import { useEffect } from "react"
import { Helmet } from "react-helmet"

import logo from "../assets/Kyanoxia.svg"

const Redirect = ({ url }: { url: string }) => {
    useEffect(() => {
        window.location.href = url;
    }, [url]);
    
    return (
        <div className="landing min-h-screen flex flex-row justify-center items-center">
            <Helmet>
                <meta name="Redirect Page..." content="If you're seeing this, Helmet works well but the redirection element is broken!  Contact Kyanoxia to fix it!" />
                <meta property="og:title" content="This is the OpenGraph Title" />
                <meta property="og:description" content="This is the OpenGraph Description" />
                <meta property="og:image" content={logo} />
            </Helmet>
            <h1>Redirecting...</h1>
        </div>
    )
}

export default Redirect
