function URLS() {
  function Login() {
    const URL = "https://www.tunoc.codes/sem3eksamenbackend/api/login";
    return URL;
  }
  function User() {
    const URL = "https://www.tunoc.codes/sem3eksamenbackend/api/info/user";
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

  return { Login, User, Admin, AdminData, Dog, Cat };
}
export default new URLS();
