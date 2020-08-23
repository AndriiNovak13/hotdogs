import React from 'react'
import HotdogEdit from './HotdogEdit';
import HotdogInfo from './HotdogInfo';

const HotdogItem = ({hotdog, onUpdateHotdog, index, onDeleteHotdog}) => {
    const [toggleInfo, setToggleInfo] = React.useState(false);
    const onToggleInfo = () => {
        setToggleInfo(!toggleInfo);
    }
    return (
        <div className="hotdogs__item">
        <div className="hotdogs__photo">
            <img src={hotdog.img} alt="hotdogs" />
        </div>

        {
            toggleInfo ?
            <HotdogEdit
                hotdog={hotdog}
                onUpdateHotdog={onUpdateHotdog}
                index={index}
                onToggleInfo={onToggleInfo}
                onDeleteHotdog={onDeleteHotdog}
            />
            :
            <HotdogInfo 
                hotdog={hotdog} 
                onToggleInfo={onToggleInfo} 
            />
        }




    </div>
    )
}

export default HotdogItem
