// const array = ["Duván" , "Norely" , "Nadie"]

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length++
        return this.data
    }

    pop(){
        if (this.length > 0) {
            this.length--
            delete this.data[this.length]
        }
        return this.data
    }

    delete (index) {
        const item = this.data[index]
        this.shiftIndex(index)
        return item
    }


    unshift(item){
        this.unShiftIndex(0 , item)
        return this.data
    }

    shift(){
        this.delete(0)
        return this.data 
    }

    unShiftIndex(index , item){
        for (let i = this.length-1; i >= index ; i--) {
            debugger
            this.data[i + 1] = this.data[i]
        }
        this.length++
        this.data[index] = item
    }


    shiftIndex(index){
        for (let i = index; i < this.length -1 ; i++) {
            this.data[i] = this.data[i + 1]
        }
        this.length--
        delete this.data[this.length ]
    }

}

let a = new MyArray()
a.push("Duvan")
a.push("Norely")
a.push("Daniel")
a.push("Otro")
a.push("Persona")