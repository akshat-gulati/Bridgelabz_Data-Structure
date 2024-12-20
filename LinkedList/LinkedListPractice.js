// Detect Loop in a linkedList------------------------------

class Solution {
    detectLoop(head) {
    
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
}


// Remove Loop in a linkedList------------------------------

class Solution {
    removeLoop(head) {
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
}


// Kth from End of Linked List ------------------------------

class Solution {
    getKthFromLast(head, k) {
        
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
}

// Middle of the linked list ------------------------------

class Solution {
    getMiddle(head) {
        
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
}

// Check Palindrome ------------------------------

class Solution {
    // Function to check whether the list is palindrome.
    isPalindrome(head) {
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
}

// Merge 2 sorted LinkedList ---------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
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
};