import axios from "axios";

export const GET_ALL_EVENTS_FOR_USER = 'GET_ALL_EVENTS_FOR_USER';
export const GET_ALL_EVENTS_FOR_USER_SUCCESS = 'GET_ALL_EVENTS_FOR_USER_SUCCESS';
export const GET_ALL_EVENTS_FOR_USER_FAIL = 'GET_ALL_EVENTS_FOR_USER_FAIL';

export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAIL = 'ADD_EVENT_FAIL';

export const TOGGLE_ACTIVATED = 'TOGGLE_ACTIVATED';
export const TOGGLE_ACTIVATED_SUCCESS = 'TOGGLE_ACTIVATED_SUCCESS';
export const TOGGLE_ACTIVATED_FAIL = 'TOGGLE_ACTIVATED_FAIL';

export const getAllEventsForUser = (sportCenter_id) => dispatch => {
    dispatch({ type: GET_ALL_EVENTS_FOR_USER });
    axios
        .get(`/api/events/sportCenter/${sportCenter_id}`)
        .then(res => {
            dispatch({
                type: GET_ALL_EVENTS_FOR_USER_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_EVENTS_FOR_USER_FAIL
            })
        });
}

export const addEvent = (event) => dispatch => {
    dispatch({ type: ADD_EVENT });
    axios
        .post("/api/events", { event })
        .then(res => {
            dispatch({
                type: ADD_EVENT_SUCCESS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch({
                type: ADD_EVENT_FAIL
            })
        );
}

export const toggleActivated = (eventId, newState) => dispatch => {
    dispatch({ type: TOGGLE_ACTIVATED });
    axios
        .patch("/api/events", { eventId, newState })
        .then(res => {
            dispatch({
                type: TOGGLE_ACTIVATED_SUCCESS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch({
                type: TOGGLE_ACTIVATED_FAIL
            })
        );
}
