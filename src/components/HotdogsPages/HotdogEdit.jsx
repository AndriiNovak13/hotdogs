import React from 'react';

const HotdogEdit = ({hotdog, onUpdateHotdog,index, onToggleInfo, onDeleteHotdog}) => {
    const [title, setTitle] = React.useState(hotdog.title);
    const [price, setPrice] = React.useState(hotdog.price);
    const [description, setDescription] = React.useState(hotdog.description);
    const [img, setImg] = React.useState(hotdog.img);

    const changeHotdog = () => {
        if(title && price && description && img){
            const newObj = {
                id: hotdog.id,
                title,
                price,
                description,
                img
            }
            onUpdateHotdog(newObj, index);
            onToggleInfo();
        }
        else{
            alert('Fill in the required fields!')
        }
    }

    const deleteHotdog = () => {
        onDeleteHotdog(hotdog.id);
    }

    return (
        <div className="hotdog__edit">
            <div className="hotdog__title-input">
                <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className="hotdog__price-input">
                <input type="text" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
            </div>
            <div className="hotdog__description-input">
                <textarea placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
            </div>
            <div className="hotdog__img-input">
                <input type="text" placeholder="Image" value={img} onChange={(e)=>setImg(e.target.value)} />
            </div>
            <div className="hotdog__btns">
                <button onClick={changeHotdog}>
                    Upgrate
                </button>
                <button onClick={deleteHotdog}>
                    Delete
                </button>
            </div>
        </div>
    )
}


export default HotdogEdit;
