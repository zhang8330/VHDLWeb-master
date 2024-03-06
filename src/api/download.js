import request from "@/api/request";
//下载原子系统VHDL代码
export function downloadAtomSystemVHDLCode(){
    return request({
        url: '/downloadatomvhdl',
        responseType: "blob",
        method: 'post'
    })
}
export function downloadAtomProject(){
    return request({
        url:"/downloadatomproject",
        method:"post"
    })
}