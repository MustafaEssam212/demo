import ResponsiveTypography from "../reusable/ResponsiveTypography";
import DropMenu from "../reusable/DropMenu";


const ChooseYourPath = () => {

    const getDataFromDropMenu = (param) => {
        alert(param)
    }

    return(
        <div className="choose-your-path-container">
            <ResponsiveTypography startFontSizeInPX={32} endFontSizeInPX={18} txt="We make events easy - choose your path" HTMLTag="h1" />

            <div className="dropmenu-btn-container">
                <div className="choose-your-path-dropmenu">
                    <DropMenu defaultVal="I am a(n)" choices={['Create events', 'Buy tickets', 'Sponsors', 'Vendors', 'Exhibitors', 'Speaker', 'Artist', 'Volunteer',]} sendDataToParent={getDataFromDropMenu} />
                </div>

                <button aria-label="Go" title="Go">Go</button>
            </div>
        </div>
    )
}


export default ChooseYourPath;