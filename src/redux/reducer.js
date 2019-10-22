
const initialState = {
  page: 'login',
  clicks: 0,
  isLoggedIn: false,
  users:[
    {firstName: 'Iryna',
    lastName: 'Tru',
    login: 'itrusevich',
    password: 'test'},

    {firstName: 'Ivan',
      lastName: 'Ivanov',
      login: 'iivanov',
      password: 'test1'}
  ]
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

    case 'ADD_USER':
    return {
      ...state,
      users: state.users.push(action.user)
    }

    default:
      return state;
  }
};

export default reducer;