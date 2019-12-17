import axios from 'axios'



// interface 

const URL = "https://l6dsq4pcp4.execute-api.ap-northeast-2.amazonaws.com"

const api = axios.create({
    baseURL: URL,
    validateStatus: function (status) {
        if ((status >= 200 && status < 300) || status === 502) return true;
        else return false;
    }
});

export const brApi = {
    getRandomOne: async () => {
        const res = await api.get("/dev/jua")
        const data = res.data.slice(0, 31)
        console.log(data)
        return data
    }
}