import { useEffect } from "react"

const Redirect = ({ url }: { url: string }) => {
    useEffect(() => {
        window.location.href = url;
    }, [url]);
    
    return <div className="landing min-h-screen flex flex-row justify-center items-center"><h1>Redirecting...</h1></div>
}

export default Redirect
