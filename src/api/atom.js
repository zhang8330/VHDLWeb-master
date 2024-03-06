import store from '../store'
import request from "@/api/request";


export function generateatom(){
    return request({
        url: '/generateatom',
        method: 'post'
    })
}
export function atomTest(){
    return request({
        url:'/atomtest',
        method:'post'
    })
}