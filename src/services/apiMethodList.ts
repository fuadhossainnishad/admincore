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
    header?: AxiosHeaders,
    json: boolean = true,  // Default to true (JSON)
    isFormData: boolean = false  // Explicitly false if FormData is used
) => {
    console.log(data);

    // Prepare headers
    const headers: AxiosHeaders = header ? AxiosHeaders.from(header) : new AxiosHeaders();

    if (isFormData) {
        // If FormData is being sent, remove Content-Type for proper handling
        headers.delete("Content-Type"); // Let axios set the correct boundary for FormData
    } else if (json) {
        // If JSON is being sent, set the Content-Type to application/json
        headers.set("Content-Type", "application/json");
    }

    const res = await axiosInstance({
        method,
        url,
        data,
        headers: headers.toJSON() // Convert headers to plain object before sending
    });

    return res.data;
};

export default apiCall;
