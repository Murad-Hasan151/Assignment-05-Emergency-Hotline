### Some questions and answers about JavaScript.

## ❓ Question 1️⃣
  - What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
## ✅ Ans:
  - **getElementById:** Select an element that contain a specific *Id*.
  - **getElementsByClassName:** Select all the elements that contain a same *class*.
  - **querySelector:** Select the first element that contain a specific *Id* , *class* , *tag name*.
  - **querySelectorAll:** Select all the element that contain a specific *class* , *tag name* , *Id*. It's return *NodeList*.
     
## ❓ Question 2️⃣
  - How do you **create and insert a new element into the DOM**?
## ✅ Ans:
  - Step-1: I select the parent element containing a specific *Id* using *getElementById*.
  - Step-2: create a child element.
  - Step-3: set *innerText* or *innerHTML* of the child element.
  - Step-4: At last *appendChild* the child into the parent. 

## ❓ Question 3️⃣
  - What is Event Bubbling and how does it work?
## ✅ Ans:
   