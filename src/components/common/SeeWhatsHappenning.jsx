
import SeeWhatsHappeningImage from '../../assets/static/svg/home/see-whats-happenning.svg';
import ResponsiveTypography from '../reusable/ResponsiveTypography'; 
import { useState } from 'react';
import DatePicker from '../reusable/DatePicker';
import Button from '../reusable/Button';

const SeeWhatsHappenning = () => {


    const [text, setText] = useState('');

    const getDateFromPicker = (param) => {
        alert(param)
    }

    return(
        <div className="see-whats-happenning-container">
            <div className='see-whats-happenning-headline-svg'>
                <ResponsiveTypography txt="See what’s happenning near you!" startFontSizeInPX={56} endFontSizeInPX={16} HTMLTag="h1" />
                <img loading='lazy' src={SeeWhatsHappeningImage} alt='See what’s happenning near you!' title='See what’s happenning near you!' />
            </div>

            <div className='see-whats-happenning-inputs'>
                <ResponsiveTypography txt="15,500+ Events Hosted on Rescounts" startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="p" />
                <div className='inputs'>
                    <input placeholder='Search (by location, event name, artist)' type='text' onChange={(s)=> setText(s.target.value)} />
                    <div className='date-picker'>
                        <DatePicker additionalClassNames='date-picker-btn' sendDataToParent={getDateFromPicker} />
                    </div>
                    <div className='btn-container'>
                        <Button backgroundColor='var(--yellow-color)' txt="Explore Events" borderRadius={4} startFontSizeInPX={18} endFontSizeInPX={14} txtColor='var(--second-black-text-color)' />
                    </div>
                </div>
            </div>  
        </div>
    )
}


export default SeeWhatsHappenning;