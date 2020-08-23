import actionTypes from '../actionTypes';

export const setLoaded = val => ({
    type: actionTypes.SET_LOADED,
    payload: val
});

export const addHotdog = obj => ({
    type: actionTypes.ADD_HOTDOG,
    payload: obj
});

export const updateHotdog = (obj, id) => ({
    type: actionTypes.UPDATE_HOTDOG,
    obj,
    id
});

export const deleteHotdog = id => ({
    type: actionTypes.DELETE_HOTDOG,
    payload: id
})