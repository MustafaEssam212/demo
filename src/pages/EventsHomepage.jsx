

import TrustedPartners from "../components/common/TrustedPartners";
import GetYourEvent from "../components/common/GetYourNextEvent";
import CreateEventExperience from "../components/events-homepage/CreateEventExperience";
import IntroImageSlider from "../components/events-homepage/IntroImageSlider";



const EventsHomepage = () => {

    return(
        <>
            <IntroImageSlider />
            <CreateEventExperience />
            <GetYourEvent />
            <TrustedPartners />
        </>
    )
}


export default EventsHomepage;