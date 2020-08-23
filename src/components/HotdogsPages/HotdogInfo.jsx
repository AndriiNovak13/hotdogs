import React from 'react';

const HotdogInfo = ({hotdog, onToggleInfo}) => {
    return (
        <div className="hotdog__info">
            <div className="hotdogs__title">
                {hotdog.title}
            </div>
            <div className="hotdogs__price">
                {hotdog.price}$
            </div>
            <div className="hotdogs__text">
                {hotdog.description}
            </div>
            <div className="hotdogs__btn">
                <button onClick={onToggleInfo} >
                    Edit
                </button>
            </div>
        </div>
    )
}


export default HotdogInfo;
