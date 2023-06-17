import axios from "axios";

export default class AdminService {
    /**
     * getCategories
     */
    public getCategories() {
        return axios.get('https://api.3d4pro.team418.ru/Admin/GetCategories');
    }
    /**
     * getAllUsers
     */
    public async getAllUsers() {
        return await axios.get('https://api.3d4pro.team418.ru/Admin/GetAllUsers')
    }

    /**
     * getUserByGuid
     */
    public async getUserByGuid(guid: string, role: string) {
        return await axios.get(`https://api.3d4pro.team418.ru/Admin/SelectUsers/${guid}/${role}`)
    }

    /**
     * deleteUser
     */
    public async deleteUser(guid: string) {
        return await axios.delete(`https://api.3d4pro.team418.ru/Admin/DeleteUser/${guid}`)
    }

    /**
     * sendModel
     */
    public async sendModel(data: any) {
        return await axios.post(
            'https://api.3d4pro.team418.ru/Upload/Model',
            data,
            {headers: {Authorization: `Bearer ${localStorage.getItem('userToken')}`}}
        )
    }
}