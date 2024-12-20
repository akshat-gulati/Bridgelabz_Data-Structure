

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


// Middle of the linked list ------------------------------


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
        
        return slow.data
    }


// Check Palindrome ------------------------------


    // Function to check whether the list is palindrome.
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

// Create first sorted linked list
const list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(5);
list1.add(7);

// Create second sorted linked list
const list2 = new LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);
list2.add(8);

// Merge the two lists
const mergedHead = mergeTwoLists(list1.head, list2.head);

// Print the merged list
let current = mergedHead;
while (current) {
    console.log(current.val);
    current = current.next;
}