import { Outlet, useLocation  } from "react-router-dom";
import FullPageSpinner from "../components/utils/FullPageSpinner";
import { useEffect, useState } from "react";
import Header from "../components/navigations/Header";
import Footer from "../components/navigations/Footer";
import ScrollToTop from "../components/utils/ScrollToTop";
import { Suspense, lazy } from "react";
import { Slide } from "react-toastify";



// Import React Toastify as a lazy component to decrease the bundle size of loaded components
const ToastContainer = lazy(() => import("react-toastify").then((module) => ({ default: module.ToastContainer })));



const Layout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timeout);
    }, [location.pathname]);
    

    return (
        <>
            {loading && <FullPageSpinner />}
            <ScrollToTop />
            <Suspense fallback={null}>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Slide} />
            </Suspense>
            <Header />
            <main className="main-content"><Outlet /></main>
            <Footer />
        </>
    );
}

export default Layout;
