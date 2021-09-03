import APIConfig from "../config/APIConfig.js";
import axios from "axios";

const BaseAPIConfig = axios.create({
    baseURL: APIConfig,
    headers: { "Content-type": "application/json", "Access-Control-Allow-Origin": "*" },
});

export default BaseAPIConfig;