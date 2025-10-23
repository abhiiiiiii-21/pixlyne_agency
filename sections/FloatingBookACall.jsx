/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
export function FloatingCall() {
    
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"pixlyne-meeting"});
      cal("floatingButton", {"calLink":"srijanpatel/pixlyne-meeting","config":{"layout":"month_view"}});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
};
  


export default function FloatingBookACall(){
const [showFloating, setShowFloating] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) setShowFloating(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        <>

        {showFloating && <FloatingCall />}
        
        </>
    )
}


    