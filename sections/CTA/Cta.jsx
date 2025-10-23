"use client";

import Button from "@/components/Buttons/BookAcall";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Cta({children}) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (

        <div className="" >
            {/* <Button data-cal-namespace="30min"
                data-cal-link="srijanpatel/30min"

                data-cal-config='{"layout":"month_view"}'
            >Book a call</Button> */}

            {children}

        </div>


    )
};



