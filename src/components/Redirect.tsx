import { useEffect } from "react"

const Redirect = ({ url }: { url: string }) => {
    useEffect(() => {
        window.location.href = url;
    }, [url]);
    
    return <h1>Redirecting...</h1>
}

export default Redirect
