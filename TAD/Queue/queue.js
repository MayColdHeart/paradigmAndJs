class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(elements) {
        this.items.push(elements);
    }

    dequeue(){
        if (this.Empty()) return "emptyQueue";
        return this.items.shift()
    }


}