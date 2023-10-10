import request from "@/api/request";

export function deleteDevice(data){
    return request({
        url:"/delete_device",
        method:"post",
        data
    })
}