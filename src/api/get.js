import request from "@/api/request";

export function getModule(data){
    return request({
        url:"/getmodule",
        method:"post",
        data
    })
}