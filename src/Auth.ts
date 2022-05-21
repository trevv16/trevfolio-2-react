class Auth {
  static getToken() {
    return localStorage.getItem('authToken');
  }
}

export default Auth;
