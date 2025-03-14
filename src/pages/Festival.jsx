import { lazy, Suspense } from "react";
import FallbackComponent from "../components/utils/FallbackComponent";


const EmpowerYourFestival = lazy(()=> import("../components/pages/festival/EmpowerYourFestival"));
const RevolutionizeYourFestival = lazy(()=> import("../components/pages/festival/RevolutionizeYourFestival"));
const GetYourEvent = lazy(()=> import("../components/common/GetYourNextEvent"));
const TrustedPartners = lazy(()=> import("../components/common/TrustedPartners"));
const RegistrationManagement = lazy(()=> import("../components/pages/festival/RegisterationManagment"));
const PaymentGateway = lazy(()=> import("../components/pages/festival/PaymentGateway"));
const BuyFromVendor = lazy(()=> import("../components/pages/festival/BuyFromVendor"));
const FloorPlans = lazy(()=> import("../components/pages/festival/FloorPlans"));
const KidsActivities = lazy(()=> import("../components/pages/festival/KidsActivities"));

const Festival = () => {
    return(
        <>
            <EmpowerYourFestival />
            <RevolutionizeYourFestival />
            <RegistrationManagement />

            <Suspense fallback={<FallbackComponent />}>
                <PaymentGateway />
                <BuyFromVendor />
                <FloorPlans />
            </Suspense>

            <Suspense fallback={<FallbackComponent />}>
                <KidsActivities />
                <GetYourEvent />
                <TrustedPartners />
            </Suspense>
        </>
    )
}


export default Festival;