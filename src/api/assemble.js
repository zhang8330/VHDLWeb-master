import request from "@/api/request";

//集成系统
export function assembleSystem(data){
    return request({
        url:"/assmblesystem",
        method:"post",
        data
    })
}