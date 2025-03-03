

import { Suspense, lazy } from "react";

const SimplifyYourTicketing = lazy(() => import("../components/ticketing-page/SimplifyYourTicketing"));
const GameChanging = lazy(() => import("../components/ticketing-page/GameChanging"));
const ExpandYourEvent = lazy(() => import("../components/ticketing-page/ExpandYourEvent"));
const ScalableFlexibility = lazy(() => import("../components/ticketing-page/ScalableFlexibility"));
const UnforgettableExperiences = lazy(() => import("../components/ticketing-page/UnforgettableExperiences"));
const ElevateSeating = lazy(() => import("../components/ticketing-page/ElevateSeating"));
const StayInControl = lazy(() => import("../components/ticketing-page/StayInControl"));
const EnsureSecure = lazy(() => import("../components/ticketing-page/EnsureSecure"));
const QRCode = lazy(() => import("../components/ticketing-page/QRCode"));
const BeyondTickets = lazy(() => import("../components/ticketing-page/BeyondTickets"));
const AroundTheClock = lazy(() => import("../components/ticketing-page/AroundTheClock"));
const GetYourEvent = lazy(() => import("../components/common/GetYourNextEvent"));
const TrustedPartners = lazy(() => import("../components/common/TrustedPartners"));

const TicketingPage = () => {


    return (
      <>
        <Suspense fallback={null}><SimplifyYourTicketing /></Suspense>
        <Suspense fallback={null}><GameChanging /></Suspense>
        <Suspense fallback={null}><ExpandYourEvent /></Suspense>
        <Suspense fallback={null}><ScalableFlexibility /></Suspense>
        <Suspense fallback={null}><UnforgettableExperiences /></Suspense>
        <Suspense fallback={null}><ElevateSeating /></Suspense>
        <Suspense fallback={null}><StayInControl /></Suspense>
        <Suspense fallback={null}><EnsureSecure /></Suspense>
        <Suspense fallback={null}><QRCode /></Suspense>
        <Suspense fallback={null}><BeyondTickets /></Suspense>
        <Suspense fallback={null}><AroundTheClock /></Suspense>
        <Suspense fallback={null}><GetYourEvent /></Suspense>
        <Suspense fallback={null}><TrustedPartners /></Suspense>
      </> 
    );
}


export default TicketingPage;