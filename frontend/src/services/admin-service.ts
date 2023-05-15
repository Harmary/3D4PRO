import axios from "axios";

export default class AdminService {
    /**
     * getAllUsers
     */
    public async getAllUsers() {
        return await axios.get('https://api.3d4pro.team418.ru/Admin/GetAllUsers')
    }

    /**
     * getUserByGuid
     */
    public async getUserByGuid(guid:string) {
        return await axios.get(`https://api.3d4pro.team418.ru/Admin/SelectUsers/${guid}`)
    }

    /**
     * deleteUser
     */
    public async deleteUser(guid: string) {
        return await axios.delete(`https://api.3d4pro.team418.ru/Admin/DeleteUser/${guid}`)
    }
}