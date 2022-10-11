import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER, FETCH_RECIPE } from "./reducers/actionType";

export const incrementCounter = () => async (dispatch) =>{
    console.log ("increment counter middleware requested");
    let newName = "counter incrementing";
    dispatch({
        type: INCREMENT_COUNTER,
        payload: newName
      });

};

export const decrementCounter = () => async (dispatch) =>{
    console.log ("decrement counter middleware requested");
    let newName = "counter decrementing";

    dispatch({
        type: DECREMENT_COUNTER,
        payload: newName
      });

};

export const thunkCounter = () => async (dispatch) =>{
    console.log ("reset counter middleware requested");
    dispatch({
        type: RESET_COUNTER
      });

};

export const fetchRecipe = (keyword) => async (dispatch) =>{
    console.log("Fetch recipe action")
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+keyword)
    let data = await response.json()
    console.log(data);
    dispatch({
        type:FETCH_RECIPE,
        payload:data.meals
    });
};