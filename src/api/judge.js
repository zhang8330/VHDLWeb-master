import request from "@/api/request";
//判断BDomain是否需要补全
export function judgeWhetherToComplete(){
    return request({
        url: '/judge_B',
        method: 'post'
    })
}
//判断物理数据存储是否需要补全
export function judgePhysical(){
    return request({
        url: "/judge_PL",
        method:"post"
    })
}
export function judgeC(){
    return request({
        url:'/judge_C',
        method:"post"
    })
}