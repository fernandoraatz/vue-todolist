/*
|--------------------------------------------------------------------------
| Database
|--------------------------------------------------------------------------
*/

let request;
let db;

export class Database{

    constructor(){
        this.name = 'toDo',
        this.table = 'ToDoItems'
    }


    // Init Database

    start(){
        return new Promise(resolve =>{
            request = indexedDB.open(this.name, 1);
            request.onsuccess = (event) => { db = request.result; resolve(this);}
            request.onupgradeneeded = (event) => {
                db = event.target.result;
                db.createObjectStore(this.table, { keyPath: 'id' });
            }
        })
    } 

    // Get Item

    find(id){
        return new Promise(resolve => {
            var request = this.getObjectStore().get(+id);
            request.onsuccess = (event) => {
                this.selectedItem = request.result;
                resolve(request.result);
            }
        })
    }

    // Get All Item

    findAll(){
        return new Promise(resolve => {
            var request = this.getObjectStore().getAll();
            request.onsuccess = (event) => {
                resolve(request.result);
            }
        })
    }

    // Insert Item

    insert(item){
        return new Promise(resolve => {
            item.id = (new Date()).getTime();
            item.isChecked = false;
            var request = this.getObjectStore().add(item);
            request.onsuccess = (event) => {
                resolve(this.findAll())
                }
        })
    }

    // Update Item

    update(item){
        return new Promise(resolve => {
            var updatedItem = Object.assign(this.selectedItem, item);
            var request = this.getObjectStore().put(updatedItem);
            request.onsuccess = (event) => { resolve(this.findAll()) }
        })

    }

    // Remove Item

    remove(item){
        return new Promise(resolve => {
            var request = this.getObjectStore().delete(item);
            request.onsuccess = (event) => { resolve(this.findAll()) }
        })
    }

    // HELPER DATABASE FUNCTION 

    // Get Store/Table

    getObjectStore(){
        return db.transaction([this.table], 'readwrite').objectStore(this.table);
    }

}
