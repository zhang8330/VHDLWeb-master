import store from '../store'
import request from "@/api/request";


export function uploadSpecification(data){
    return request({
        url: '/upload_specification',
        method: 'post',
        data
    })
}

export function complete_computer(data){
    return request({
        url: '/complete_computer',
        method: 'post',
        data
    })
}

export function atomtest(data){
    return request({
        url: '/atomtest',
        method: 'post',
        data
    })
}
//用户添加设备
export function uploadDevice(data){
    return request({
        url: '/upload_device',
        method: 'post',
        data
    })
}
