import axios from "axios"
export default {
    getSong(store, id) {
        axios.get("/song/url?id=" + id).then(res => {
            store.commit("updateSong", {
                key: "playUrl",
                value: res.data.data[0].url
            })
        })
        axios.get("/song/detail?ids="+id).then(res=>{
            store.commit("updateSong", {
                key: "imgUrl",
                value:res.data.songs[0].al.picUrl
            })
            store.commit("updateSong", {
                key: "name",
                value:res.data.songs[0].al.name
            })
        })
    }
}