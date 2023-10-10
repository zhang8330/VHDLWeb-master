import request from "@/api/request";

export function propertyVerification(){
    return request({
        url:"/oroperty",
        method:"post"
    })
}