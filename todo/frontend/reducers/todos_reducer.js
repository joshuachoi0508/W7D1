import { RECEIVE_TODOS } from '../actions/todo_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  let newState = {};
  switch(action.type) {
    
    case RECEIVE_TODOS:
      action.todos.forEach(todo => {
        let key = todo.id;
        newState[key] = todo;
      });
      return newState;
      
    case RECEIVE_TODO:
      newState = Object.assign({}, state);
      let key = action.todo.id;
      newState[key] =  action.todo;
      return newState;
      
    default:
      return state;
  }
};





export default todosReducer;

//lodash.merge => deep dup (do need to import lodash)
//Object.assign => shallow dup (dont need to import)