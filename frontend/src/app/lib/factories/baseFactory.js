export class BaseFactory{
    async create(data){
        throw new Error("Method 'create()' must be implemented")
    }
}