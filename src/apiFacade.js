import URLS from "./Settings";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a latter step (d) here (REMEMBER to uncomment in the returned object when you do)*/

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const login = (user, password, setUsername, setRoles) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(URLS.Login(), options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
        setUsername(res.username);
        setRoles(res.role);
        console.log(res.role);
      });
  };

  const fetchData = (URL) => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL, options).then(handleHttpErrors);
  };

  const SpecificRecepieInfo = (listOfIDs, username) => {
    const options = makeOptions("POST", false, {
      //We have it false here because i didn't get the login to work with the rest of the system,
      //That results in not being ablt to use Roles allowed for the time being.
      //user: username,
      listOfIDs,
    });
    return fetch(URLS.AddRating(), options).then(handleHttpErrors);
  };

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData,
    SpecificRecepieInfo,
  };
}
const facade = apiFacade();
export default facade;
