import request from "@/api/request";

export function generateBdomain(){
    return request({
        url:"/generateBdomain",
        method:"post"
    })
}
export function generatePhysical(){
    return request({
        url:"/generatePLdomain",
        method:"post"
    })
}
//生成控制器vhdl代码
export function generateController(data){
    return request({
        url:"/generaterootvhdl",
        method:"post",
        data
    })
}

//生成控制器IP核
export function generateControllerIP(data){
    return request({
        url:"/generatedependency",
        method:"post",
        data
    })
}
export function generateCDomain(){
    return request({
        url:"/gemerateCdomain",
        method:"post",
    })
}