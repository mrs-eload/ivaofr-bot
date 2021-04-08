const rest = require ('./storage/rest')

const storage_map = new Map();

storage_map.set('rest', rest);

module.exports = (storage_interface) =>{

    if(storage_map.has(storage_interface)){
        return storage_map.get(storage_interface)
    }

    throw new Error("No valid storage interface provided!!")
}