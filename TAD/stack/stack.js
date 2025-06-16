class Stack {
    constructor() {
        this.items= [];
    }

    push(element) {
    this.items.push(element);
}

pop() {
    if(this.isEmpty()) return "empty stack!";
    return this.items.pop();
}

peek() {
    return this.items[this.items.length -1];
}

isEmpty(){
    return this.items.length === 0;
}

}


const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop());
console.log(stack.peek());