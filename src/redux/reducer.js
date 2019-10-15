
const initialState = {
  page: 'login',
  clicks: 0,
  isLoggedIn: false

};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'PAGE':
      return {
        ...state,
        page: action.payload
      };
    case 'CLICK':
      return {
        ...state,
        clicks: state.clicks+1
      };
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        page: 'loggedIn'
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        page: 'login'
      }


    default:
      return state;
  }
};

export default reducer;