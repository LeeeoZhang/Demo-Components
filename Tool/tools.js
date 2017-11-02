/*create a stack!*/
class Stack {
    constructor() {
        this.item = []
    }

    push(element) {
        this.item.push(element)
    }

    pop() {
        this.item.pop()
    }

    isEmpty() {
        return (this.item.length === 0)
    }

    size() {
        return (this.item.length)
    }

    peek() {
        return (this.item[this.item.length - 1])
    }

    clear() {
        this.item = []
    }
}


/*进制转换*/
function baseConverter(num, base) {
    let remStack = new Stack(),
        rem,
        baseString = '',
        dict = '0123456789ABCDEF'
    while (num > 0) {
        rem = Math.floor(num % base)
        remStack.push(rem)
        num = Math.floor(num / base)
    }
    while (!remStack.isEmpty()) {
        baseString += dict[remStack.pop()]
    }
    return baseString
}