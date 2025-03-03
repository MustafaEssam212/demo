
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ResponsiveTypography from "./ResponsiveTypography";



// Use This Custom Component To Render a Dropmenu Of Choices
// defaultVal => Optional to make a placeholder to the Dropmenu
// Control The Height and Width of the Dropmenu by wrapping it with a parent Div 
// choices (Array of Strings) => Required => To Display The Container of choices
// sendDataToParent => !IMPORTANT! => Pass a Function Called sendDataToParent To Receive The Choice That The User Has Chosen and Return It To The Parent Component Who Used This Custom Component 

//Example =>  <DropMenu defaultVal="I am a(n)" choices={['Create events', 'Buy tickets', 'Sponsors', 'Vendors', 'Exhibitors', 'Speaker', 'Artist', 'Volunteer',]} sendDataToParent={getDataFromDropMenu} />


// Example of sendDataToParent =>   const getDataFromDropMenu = (param) => {alert(param)}




const DropMenu = ({defaultVal, choices, sendDataToParent}) => {

    // Initializing The Root Constants Of The DropMenu

    const [openDropMenu, setOpenDropMenu] = useState(false);
    const [defaultValue, setDefaultValue] = useState(defaultVal ? defaultVal : 'Please select');


    // Handling Clicking Outside The Choices Container
    const menuRef = useRef(null);
    
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenDropMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return(
        <div className="dropmenu">
            <div className="value-container" onClick={()=> setOpenDropMenu(!openDropMenu)}>
                <ResponsiveTypography txt={defaultValue} HTMLTag="p" startFontSizeInPX={18} endFontSizeInPX={15} />
                <IoIosArrowDown className="icon" />
            </div>
            {
                openDropMenu && (
                    <div ref={menuRef} className="dropmenu-choices">
                        {
                            choices.map((e, key) => {
                                return(
                                    <button key={key} onClick={()=> {setDefaultValue(e); sendDataToParent(e); setOpenDropMenu(false)}} aria-label={e} title={e}>{e}</button>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}


export default DropMenu;