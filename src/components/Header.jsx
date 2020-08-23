import React from 'react'
import Popup from './Popup'

const Header = ({onAddHotdog}) => {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const togglePopup = () => {
        setVisiblePopup(!visiblePopup);
    }
    return (
        <header className="header">
            <div className="container">
                <div className="header__box">
                    <div className="header__logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKtGq1XoWc1XQgRiF56vY8T5VARwBoq2Vkg&usqp=CAU" alt="" />
                        <p>
                            crud
                        </p>
                    </div>
                    <div className="header__add-btn">
                        <button onClick={togglePopup}>
                            Add hot-dog
                        </button>
                    </div>
                </div>
            </div>

            {
                visiblePopup &&
                <Popup 
                    closePopup={togglePopup}
                    onAddHotdog={onAddHotdog}
                />
            }
        </header>
    )
}

export default Header;
