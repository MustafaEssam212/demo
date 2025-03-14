
import { Suspense, lazy } from "react";
import FallbackComponent from "../components/utils/FallbackComponent";
const TrustedPartners = lazy(() => import("../components/common/TrustedPartners"));
const GetYourEvent = lazy(() => import("../components/common/GetYourNextEvent"));
const CreateEventExperience = lazy(() => import("../components/common/CreateEventExperience"));
const IntroImageSlider = lazy(() => import("../components/pages/events-homepage/IntroImageSlider"));
const ChooseYourPath = lazy(() => import("../components/pages/events-homepage/ChooseYourPath"));
const ClientsStatistics = lazy(() => import("../components/pages/events-homepage/ClientsStatistics"));
const WhyChooseRescounts = lazy(() => import("../components/pages/events-homepage/WhyChooseRescounts"));
const WhyOurCustomers = lazy(() => import("../components/pages/events-homepage/WhyOurCustomers"));
const WhatEventOrganizer = lazy(() => import("../components/pages/events-homepage/WhatEventOrganizer"));

const EventsHomepage = () => {

    return(
        <>

            {/* Curtical Components*/}
            <IntroImageSlider />
            <ChooseYourPath />
            <ClientsStatistics />
            
            {/* Lazy Components */}
            <Suspense fallback={<FallbackComponent />}>
                <WhyChooseRescounts />
                <WhyOurCustomers />
                <WhatEventOrganizer />
            </Suspense>

            <Suspense fallback={<FallbackComponent />}>
                <CreateEventExperience />
                <GetYourEvent />
                <TrustedPartners />
            </Suspense>
        </>
    )
}


export default EventsHomepage;