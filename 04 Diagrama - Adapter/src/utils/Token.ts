export default class Token{

    private token = " "
    getToken() : number{
        return Math.floor(Math.random() * 99999);;
    }
}