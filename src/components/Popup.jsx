import React from 'react';
import { reduxForm } from 'redux-form'
import NewHotDogForm from './NewHotDogForm';


const NewHotDogFormRedux = reduxForm({form: 'NewHotdogForm'})(NewHotDogForm);


const Popup = ({closePopup, onAddHotdog}) => {
    const addNewHotDog =(formData)=>{
        if(formData.title && formData.price && formData.description && formData.img){
            const newObj = {
                id: Math.floor(Math.random()*10000),
                title: formData.title,
                price: formData.price,
                description: formData.description,
                img: formData.img
            }
            onAddHotdog(newObj);
            closePopup();
        }
        else{
            alert('Fill in the required fields!')
        }
    }
    return (
        <div className="popup">
            <div className="popup__content">
                <div className="popup__inner">
                    <div className="popup__title-main">
                        Add new hot-dog
                    </div>

                    <NewHotDogFormRedux onSubmit={addNewHotDog} closePopup={closePopup} />

                </div>
            </div>
        </div> 
    )
}



export default Popup;
