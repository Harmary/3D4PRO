import axios from "axios";
import jwtDecode from "jwt-decode";

export default class AuthServise {
    /**
     * login
     */
    public async login(login: string, password: string) {
        return await axios.post('https://api.3d4pro.team418.ru/auth/login',  {
            login: login,
            password: password
        }).then((res) => {
            localStorage.setItem('userToken', res.data.access_token);
            let tokenInfo: any = jwtDecode(res.data.access_token);
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
        localStorage.removeItem('userGuid');
    }

    /**
     * registration
     */
    public async registration(name: string, login: string, email: string, password: string, token?: string) {
        const headers = token !== undefined ? { Authorization: `Bearer ${token}` } : {};
        return await axios.post(`https://api.3d4pro.team418.ru/auth/register`, {
            "name": name,
            "login": login,
            "email": email,
            "password": password
        }, { headers: headers}
        )
            .then((res) => {
                localStorage.setItem('userToken', token ? token : res.data.token)
                let tokenInfo: any = jwtDecode(token ? token : res.data.token);
                localStorage.setItem('userRole', tokenInfo.role);
                localStorage.setItem('userGuid', res.data.sub);
            })
    }

    /**
     * sendRegistrationLink
     */
    public async sendRegistrationLink(email: string) {
        return await axios.post(`https://api.3d4pro.team418.ru/auth/sendRegisterMailToModeler/${email}`)
    }
}