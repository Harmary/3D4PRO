import axios from "axios";
import jwtDecode from "jwt-decode";

export default class AuthServise {
    /**
     * login
     */
    public async login(login: string, password: string) {
        await axios.post('https://api.3d4pro.team418.ru/auth/login',  {
            login: login,
            password: password
        }, {
            headers:{
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((res) => {
            localStorage.setItem('userToken', res.data.access_token);
            let tokenInfo:any = jwtDecode(res.data.access_token);
            localStorage.setItem('userRole', tokenInfo.role);
            localStorage.setItem('userGuid', res.data.guid);
        })
    }

    /**
     * logout
     */
    public logout() {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userRole');
    }
}