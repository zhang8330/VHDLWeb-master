import request from "@/api/request";

export function showDevices(data){
    return request({
        url:"/show_device",
        method:"post",
        data
    })
}
export function showModule(data){
    return request({
        url:"/showmodule",
        method:"post",
        data
    })
}
export function showData(data){
    return request({
        url:"/showdata",
        responseType: "blob",
        method:"post",
        data
    })
}
export function showExternalModule(data){
    return request({
        url:"/showexternalmodule",
        method:"post",
        data
    })
}
export function showExternalData(data){
    return request({
        url:"/showexternaldata",
        method:"post",
        data
    })
}