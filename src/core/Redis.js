const redisCli = require("redis");
class Redis {
    constructor(){
        if (!Redis.instance) {
            Redis.instance = this;
        }
        return Redis.instance;
    }

    static connect(){
        if(!Redis.client){
            Redis.client = redisCli.createClient(process.env.REDIS_URL);
        }
        return Redis.client;
    }

    static set client(val){
        Redis._client = val;
    }
    static get client(){
        return Redis._client;
    }
}

const redis = new Redis();
module.exports = Redis;