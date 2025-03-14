import { lazy, Suspense } from "react";
import FallbackComponent from "../components/utils/FallbackComponent";

const WhyOurCustomers = lazy(() => import("../components/common/WhyOurCustomers"));
const DiscoverPopularEvents = lazy(() => import("../components/pages/home/DiscoverPopularEvents"));
const WhatIsYourPath = lazy(() => import("../components/pages/home/WhatIsYourPath"));
const CreateEventExperience = lazy(() => import("../components/common/CreateEventExperience"));
const GetYourNextEvent = lazy(() => import("../components/common/GetYourNextEvent"));
const TrustedPartners = lazy(() => import("../components/common/TrustedPartners"));
const Carousel = lazy(() => import("../components/pages/home/Carousel"));
const SeeWhatsHappenning = lazy(() => import("../components/common/SeeWhatsHappenning"));


const Home = () => {
    return(
        <>
            <WhatIsYourPath />
            <Carousel />
            <SeeWhatsHappenning />

            <Suspense fallback={<FallbackComponent />}>
                <DiscoverPopularEvents />
                <WhyOurCustomers />
                <CreateEventExperience />
            </Suspense>
            <Suspense fallback={<FallbackComponent />}>
                <GetYourNextEvent />
                <TrustedPartners />
            </Suspense>
        </>
    )
}


export default Home;