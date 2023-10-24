import {createStore} from 'redux';

const initialState = {
  test: []
}

const testsReducer = (state = initialState, action) => {
  if(action.type === 'AddTest') {
    return {test: [...state.test, action.data]};
  } else if(action.type === ' ') {
    const id = action.data.id;
    const new_data= [];
    state.test.forEach(el => {
      if(el.id == id) {
        new_data.push(action.data);
      } else {
        new_data.push(action.data);
      }
    });
    return {test: new_data}
  } else {
    return state
  }
}

const store = createStore(testsReducer);

export default store;