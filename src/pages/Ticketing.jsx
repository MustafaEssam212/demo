

import { Suspense, lazy } from "react";
import FallbackComponent from "../components/utils/FallbackComponent";
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
        {/* Curtical Components */}
        <SimplifyYourTicketing />
        <GameChanging />
        <ExpandYourEvent />

        {/* Lazy Components */}
        <Suspense fallback={<FallbackComponent />}>
          <ScalableFlexibility />
          <UnforgettableExperiences />
          <ElevateSeating />
        </Suspense>

        <Suspense fallback={<FallbackComponent />}>
          <StayInControl />
          <EnsureSecure />
          <QRCode />
        </Suspense>

        <Suspense fallback={<FallbackComponent />}>
          <BeyondTickets />
          <AroundTheClock />
          <GetYourEvent />
          <TrustedPartners />
        </Suspense>
      </> 
    );
}


export default TicketingPage;