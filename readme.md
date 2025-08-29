## Some questions and answers about JavaScript.

---

### ❓ Question 1️⃣
  - What is the difference between **getElementById , getElementsByClassName , and querySelector / querySelectorAll ?**
### ✅ Ans :
  - **getElementById :** Select an element that contain a specific *Id*.
  - **getElementsByClassName :** Select all the elements that contain a same *class*.
  - **querySelector :** Select the first element that contain a specific *Id* , *class* , *tag name*.
  - **querySelectorAll :** Select all the element that contain a specific *class* , *tag name* , *Id*. It's return *NodeList*.

---

### ❓ Question 2️⃣
  - How do you **create and insert a new element into the DOM** ?
### ✅ Ans :
  - Step-1: I select the parent element containing a specific *Id* using *getElementById*.
  - Step-2: create a child element.
  - Step-3: set *innerText* or *innerHTML* of the child element.
  - Step-4: At last *appendChild* the child into the parent. 

---

### ❓ Question 3️⃣
  - What is Event Bubbling and how does it work ?
### ✅ Ans :
  - Event Bubbling is an **event propagation** method in JavaScript, where an event first occurs on the **target element** and then gradually bubbles up through its **parent elements**.

---

### ❓ Question 4️⃣
  -  What is **Event Delegation** in JavaScript? Why is it useful?
### ✅ Ans :
  - Event Delegation let us handle events efficiently by placing a single event listener on a parent element, instead of multiple listeners on child elements.  
- **Usefulness :**
  - 1. We don’t need to add separate listeners to each child.
  - 2. If a new child is added later, the parent’s listener will automatically work.
  - 3. Using fewer event listeners reduces memory usage and makes the website run faster.

--- 
### ❓ Question 5️⃣
  - What is the difference between **preventDefault() and stopPropagation()** methods?
### ✅ Ans :
  - **preventDefault() :** Stops the element’s default action.
  - **stopPropagation() :** Stops the event from bubbling up or capturing down the DOM tree.  


