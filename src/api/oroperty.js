import request from "@/api/request";

export function oropertyTime(data){
    return request({
        url:"/oroperty_time",
        method:"post",
        data
    })
}
export function interfaceConsistencyValidation(){
    return request({
        url:"/oroperty",
        method:"post"
    })
}