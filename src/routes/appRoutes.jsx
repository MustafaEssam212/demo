import { Route } from "react-router-dom";
import Layout from "../layouts/layout";
import TicketingPage from "../pages/Ticketing";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import EventsHomepage from "../pages/EventsHomepage";
import Festival from "../pages/Festival";


const appRoutes = (
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/ticketing" element={<TicketingPage />} />
    <Route path="/events" element={<EventsHomepage />} />
    <Route path="/festival" element={<Festival />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);

export default appRoutes;
