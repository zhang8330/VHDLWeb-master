export default {
    namespaced: true,

    // 存储的数据
    state: ()=> ({
        computervhdl:{},
        tbtestdict:[],
        drawer:false,//控制Step显示
    }),

    mutations: {
        setComputervhdl(state, computervhdl) {
            state.computervhdl = computervhdl
        },
        setTbtestdict(state, tbtestdict) {
            state.tbtestdict = tbtestdict
        },
        changeDrawer(state){
            state.drawer = !state.drawer;
            // console.log( state.drawer);
        }
    },

    actions:{
        setComputervhdl({commit}, computervhdl) {
            commit('setComputervhdl', computervhdl)
        },
        setTbtestdict({commit}, tbtestdict) {
            commit('setTbtestdict', tbtestdict)
        }
    }
}
