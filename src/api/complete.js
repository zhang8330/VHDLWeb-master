import request from "@/api/request";
//补全BDomain
export function completeBDomain(data){
    return request({
        url:'/complete_B',
        method:'post',
        data
    })
}

export function completePhysical(data){
    return request({
        url:'/complete_PL',
        method:'post',
        data
    })
}

//补全控制器vhdl代码
export function completeController(data){
    return request({
        url:'/complete_dependency',
        method:'post',
        data
    })
}
export function completeTB(){
    return request({
        url:'/complete_tb',
        method:'post'
    })
}