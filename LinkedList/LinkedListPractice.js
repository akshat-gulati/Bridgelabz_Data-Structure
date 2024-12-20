// Detect Loop in a linkedList------------------------------

    function detectLoop(head) {
    
        let slow = head
        let fast = head
        
        while(fast != null && fast.next != null){
            slow = slow.next
            fast = fast.next.next
            
            if(fast === slow){
                return true
            }
        }
        return false
    }

// Remove Loop in a linkedList------------------------------

function removeLoop(head) {
        if (head == null || head.next == null) {
            return head;
        }

        let fast = head;
        let slow = head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            if (slow === fast) {
                break;
            }
        }
        if (slow === fast) {
            slow = head;

            if (slow === fast) {
                while (fast.next !== slow) {
                    fast = fast.next;
                }
            } else {
                while (slow.next !== fast.next) {
                    slow = slow.next;
                    fast = fast.next;
                }
            }
            fast.next = null;
        }

        return head;
    }

// Kth from End of Linked List ------------------------------

function getKthFromLast(head, k) {
        
        if(head == null){
            return head.data
        }
        if(head.next == null && k == 1){
            return head.data
        }
        
        // code here
        
        let fast = head
        let slow = head
        
        for(let i =0; i<k; i++){
            if(fast == null){
                return -1
            }
            fast = fast.next
        }
        while(fast != null){
            fast = fast.next
            slow = slow.next
        }
        return slow.data
    }

// Check Palindrome ------------------------------

    function isPalindrome(head) {
        let stack = [];
        
        let helper = head;
        while (helper !== null) {
            stack.push(helper.data);
            helper = helper.next;
        }
        
        helper = head;
        while (helper !== null) {
            if (stack.pop() !== helper.data) {
                return false;
            }
            helper = helper.next;
        }
        return true;
    }

// Merge 2 sorted LinkedList ---------------------------------

const {LinkedList,Node} = require('./LinkedList');

function mergeTwoLists(list1, list2) {
    let dummy = new Node(0);
    let temp = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) { 
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }

    if (list1 !== null) {
        temp.next = list1;
    } else {
        temp.next = list2;
    }

    return dummy.next;
}

const list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(5);
list1.add(7);

const list2 = new LinkedList();
list2.add(1);
list2.add(2);
list2.add(4);
list2.add(6);
list2.add(8);

const mergedHead = mergeTwoLists(list1.head, list2.head);
let current = mergedHead;
while (current) {
    // console.log(current.val); 
    current = current.next;
}

// Remove duplicate ---------------------------------------------------------------------------

function removeDuplicate(head) {
    if (head === null) return head;

    let temp = head;

    while (temp !== null && temp.next !== null) {
        if (temp.val === temp.next.val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }

    return head;
}

let head = removeDuplicate(mergedHead);
while (head != null) {
    // console.log(head.val);
    head = head.next;
}

// Middle of the linked list -------------------------------------------------------------


function getMiddle(head) {
        
    if(head == null && head.next == null){
        return head.data
    }
    
    // your code here
    let fast = head
    let slow = head
    
    while(fast != null && fast.next != null){
        fast = fast.next.next
        slow = slow.next
    }
    
    return slow.val
}

// console.log(getMiddle(mergedHead));

// delete middle ----------------------------------------------------------------------------

function deleteMiddle(head) {
    if (head == null || head.next == null) {
        return null }

    let fast = head.next.next;
    let slow = head;
    let prev = null;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    // Remove the middle node
    if (prev != null) {
        prev.next = slow.next;
    }

    return head;
}

head = deleteMiddle(mergedHead);
while (head != null) {
    // console.log(head.val);
    head = head.next;
}


// insert at -----------------------------------------------------------------------------------

function insertAt(head, index, data) {
    let dataNode = new Node(data);

    // If inserting at the head
    if (index === 0) {
        dataNode.next = head;
        return dataNode;
    }

    let temp = head;
    while (index > 1 && temp != null) {
        temp = temp.next;
        index--;
    }

    if (temp == null) {
        throw new Error("Index out of bounds");
    }

    dataNode.next = temp.next;
    temp.next = dataNode;

    return head;
}
head = insertAt(mergedHead, 2, 100);
while (head != null) {
    // console.log(head.val);
    head = head.next;
}

// delete at -----------------------------------------------------------

function deleteAt(head, index) {
    if (index === 0) {
        return head ? head.next : null;
    }

    let temp = head;
    while (index > 1 && temp && temp.next) {
        temp = temp.next;
        index--;
    }

    if (temp && temp.next) {
        temp.next = temp.next.next;
    }

    return head;
}


head = deleteAt(mergedHead, 4);
while (head != null) {
    console.log(head.val);
    head = head.next;
}

console.log("----------------------------------");


// reverse -----------------------------------------------------------------
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;  
        current.next = prev;  
        prev = current;   
        current = next;
    }

    return prev;
}

head = reverseLinkedList(mergedHead);
while (head != null) {
    console.log(head.val);
    head = head.next;
}