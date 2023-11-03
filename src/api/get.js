import request from "@/api/request";

export function getModule(data){
    return request({
        url:"/getmodule",
        method:"post",
        data
    })
}
export function runSimulation(){
    return request({
        url:"/run_simulation",
        method:"post"
    })
}
export function getExternalModule(){
    return request({
        url:"/getexternalmodule",
        method:"post"
    })
}