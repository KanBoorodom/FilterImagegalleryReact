import { v4 as uuid_v4 } from "uuid";

export const imagesdata = [
    {
        type:'all',
        select:true,
        id:uuid_v4()
    },
    {
        type:'camera',
        select:false,
        id:uuid_v4()
    },
    {
        type:'headphone',
        select:false,
        id:uuid_v4()
    },
    {
        type:'watch',
        select:false,
        id:uuid_v4()
    },
    {
        type:'shoe',
        select:false,
        id:uuid_v4()
    },
    {
        type:'glasses',
        select:false,
        id:uuid_v4()
    }
]