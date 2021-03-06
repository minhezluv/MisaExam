import BaseAPI from "@/api/base/BaseAPI.js";
import BaseAPIConfig from "../base/BaseAPIConfig.js";
class EmployeesAPI extends BaseAPI {
    constructor() {
        super();
        this.controller = "Employees";
    }
    getNewEmployeeCode() {
        return BaseAPIConfig.get(`${this.controller}/NewEmployeeCode`);
    }
}

export default new EmployeesAPI();