function URLS() {
  function Login() {
    const URL = "http://localhost:8080/securitystarter/api/login";
    return URL;
  }
  function User() {
    const URL = "http://localhost:8080/securitystarter/api/info/user";
    return URL;
  }

  function Admin() {
    const URL = "https://www.tunoc.codes/sem3eksamenbackend/api/info/admin";
    return URL;
  }

  function AdminData() {
    const URL = "https://www.tunoc.codes/sem3eksamenbackend/api/fetch";
    return URL;
  }

  function Dog() {
    const URL = "https://www.tunoc.codes/sem3eksamenbackend/api/fetch/dogpic";
    return URL;
  }
  function Cat() {
    const URL = "https://www.tunoc.codes/sem3eksamenbackend/api/fetch/catpic";
    return URL;
  }
  function AllRecepies() {
    const URL = "https://www.tunoc.codes/sem3eksamenbackend/api/recepies/all";
    return URL;
  }
  function SpecificRecepieInfo() {
    const URL = "https://www.tunoc.codes/sem3eksamenbackend/api/recepies/id";
    return URL;
  }

  return {
    Login,
    User,
    Admin,
    AdminData,
    Dog,
    Cat,
    AllRecepies,
  };
}
export default new URLS();
