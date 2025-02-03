import Cookies from 'js-cookie'

// save the token and user into the Cookies
export const setUserSession = (token, user) => {
    Cookies.set('user', JSON.stringify(user));
    Cookies.set('token', JSON.stringify(token));
    localStorage.setItem('token', token);
}

// update user session
export const updateUserSession = (user) => {
    Cookies.remove('user');
    Cookies.set('user', JSON.stringify(user));
}

// return the user data from the Cookies
export const getUser = () => {
  const userStr = Cookies.get('user');
  if (userStr) return JSON.parse(userStr);
  return null;
}
  
// return the token from the Cookies
export const getToken = () =>  {
    // const token = Cookies.get('token');
    const token = localStorage.getItem('token');
    // if (token) return JSON.parse(token);
    if (token) return token;
    return null;
}
  
// remove the token and user from the Cookies
export const removeUserSession = () => {
    Cookies.remove('token');
    Cookies.remove('user');
    localStorage.removeItem("token");
}