import actionTypes from '../actionTypes';


const initialState = {
    hotdogs: JSON.parse(localStorage.getItem("hotdogs")) || [
        {
            id: Math.floor(Math.random()*10000),
            title: 'Hot diggedy dogs',
            price: 3,
            description: 'Bonfire night wouldn’t be complete without bangers - here sausages and onion roast together in the oven',
            img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-614_12-4ddd7ac.jpg?quality=90&resize=440,400'
        }
    ]
}

const Announcement = (state=initialState, action)=> {
    switch (action.type) {

        case actionTypes.ADD_HOTDOG: {
            localStorage.setItem("hotdogs", JSON.stringify([...state.hotdogs].concat(action.payload)))
            return {
                ...state,
                hotdogs: [...state.hotdogs].concat(action.payload)
            }
        }
        case actionTypes.UPDATE_HOTDOG: {
            const newHotdogs = [...state.hotdogs];
            newHotdogs[action.id] = action.obj;
            localStorage.setItem("hotdogs", JSON.stringify(newHotdogs))
            return {
                ...state,
                hotdogs: newHotdogs
            }
        }

        case actionTypes.DELETE_HOTDOG: {
            const newHotdogs = state.hotdogs.filter(item => item.id !== action.payload);
            localStorage.setItem("hotdogs", JSON.stringify(newHotdogs))
            return {
                ...state,
                hotdogs: newHotdogs
            }
        }
            
        default: return state;
    }
}

export default Announcement;