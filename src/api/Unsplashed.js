import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KK_TY13-B2AIZ6_ywa-6cg8TmteMfKET2qxTO5VC2Fc'
    }
})