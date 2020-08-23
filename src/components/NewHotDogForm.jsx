import React from 'react';
import { Field } from 'redux-form'


const NewHotDogForm = ({handleSubmit, closePopup}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="popup__title-input">
                <Field type="text" placeholder="Title" name="title" component="input" />
            </div>
            <div className="popup__price-input">
                <Field type="text" placeholder="Price" name="price" component="input" />
            </div>
            <div className="popup__description-input">
                <Field placeholder="Description" name="description" component="textarea" ></Field>
            </div>
            <div className="popup__img-input">
                <Field type="text" placeholder="Image" name="img" component="input" />
            </div>
            <div className="popup__btns">
                <button onClick={closePopup} >
                    No Thanks
                </button>
                <button>
                    Add
                </button>
            </div>
        </form>
    )
}

export default NewHotDogForm
