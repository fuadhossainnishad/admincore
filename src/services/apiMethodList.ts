import axiosInstance from "@/config/axios.config";
import { AxiosHeaders } from "axios";

export enum TMethods {
    post = 'post',
    get = 'get',
    patch = 'patch',
    delete = 'delete',
    put = 'put'
}

const apiCall = async <T>(
    method: TMethods,
    url: string,
    data?: T,
    header?: AxiosHeaders
) => {
    console.log(data);

    const res = await axiosInstance(
        {
            method,
            url,
            data,
            headers: {
                "Content-Type": "application/json",
                ...header
            },
        }
    );
    return res.data;
};

export default apiCall
