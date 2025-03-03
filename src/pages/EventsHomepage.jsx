
import { Suspense, lazy } from "react";

const TrustedPartners = lazy(() => import("../components/common/TrustedPartners"));
const GetYourEvent = lazy(() => import("../components/common/GetYourNextEvent"));
const CreateEventExperience = lazy(() => import("../components/common/CreateEventExperience"));
const IntroImageSlider = lazy(() => import("../components/events-homepage/IntroImageSlider"));
const ChooseYourPath = lazy(() => import("../components/events-homepage/ChooseYourPath"));
const ClientsStatistics = lazy(() => import("../components/events-homepage/ClientsStatistics"));
const WhyChooseRescounts = lazy(() => import("../components/events-homepage/WhyChooseRescounts"));
const WhyOurCustomers = lazy(() => import("../components/events-homepage/WhyOurCustomers"));
const WhatEventOrganizer = lazy(() => import("../components/events-homepage/WhatEventOrganizer"));

const EventsHomepage = () => {

    return(
        <>
            <Suspense fallback={null}><IntroImageSlider /></Suspense>
            <Suspense fallback={null}><ChooseYourPath /></Suspense>
            <Suspense fallback={null}><ClientsStatistics /></Suspense>
            <Suspense fallback={null}><WhyChooseRescounts /></Suspense>
            <Suspense fallback={null}><WhyOurCustomers /></Suspense>
            <Suspense fallback={null}><WhatEventOrganizer /></Suspense>
            <Suspense fallback={null}><CreateEventExperience /></Suspense>
            <Suspense fallback={null}><GetYourEvent /></Suspense>
            <Suspense fallback={null}><TrustedPartners /></Suspense>
        </>
    )
}


export default EventsHomepage;