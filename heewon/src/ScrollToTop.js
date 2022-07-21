import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    window.addEventListener('reload', (e)=>{
        console.log(e)
    })
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};