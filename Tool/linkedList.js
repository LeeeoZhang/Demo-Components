/*单向链表*/
class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    //从头或尾部插入节点
    append(element) {
        function Node(element) {
            this.element = element
            this.next = null
        }
        var node = new Node(element)
        var current
        if (!this.head) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    //从指定位置插入节点
    insert(position, element) {
        function Node(element) {
            this.element = element
            this.next = null
        }
        var current = this.head
        var previous = null
        var index = 0
        var node = new Node(element)
        if (position === 0) {
            node.next = current
            this.head = node
            this.length++
                return node
        } else if (position > 0 && position < this.length) {
            while (index < position) {
                previous = current
                current = current.next
                index++
            }
            previous.next = node
            node.next = current
            this.length++
                return node
        } else {
            return false
        }

    }

    //从指定位置删除一个节点
    removeAt(position) {
        var current = this.head
        var previous = null
        var index =
            if (position === 0) {
                this.head = current.next
                this.length--
                    return current.element
            } else
        if (position > 0 && position < this.length) {
            while (index < position) {
                previous = current
                current = current.next
                index++
            }
            previous.next = current.next
            this.length--
                return current.element
        } else {
            return false
        }
    }

    //返回字符串
    toString() {
        var string = ''
        var current = this.head
        while (current) {
            string += `${current.element},`
            current = current.next
        }
        return string
    }

    indexOf(element) {
        var current = this.head
        var index = 0
        while (current) {
            if (element === current.element) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    isEmpty() {
        return this.length === 0
    }
    size() {
        return this.length
    }
    getHead() {
        return this.head
    }
}