export class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  token: string;

  constructor(userInfo:any) {
    if(typeof userInfo == "undefined" || userInfo == null){
      userInfo = {id: null, first_name: null, last_name: null, email: null, token: null };
    }
    this.id = userInfo.id || null;
    this.first_name = userInfo.first_name || null;
    this.last_name = userInfo.last_name || null;
    this.email = userInfo.email || null;
    this.token = userInfo.token || null;
  }
  public exists(){
    if(this.id){
      return true;
    }
    return false;
  }
}
