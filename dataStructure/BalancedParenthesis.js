/**
  * @Purpose   :To check the paranthesis balanced or not by using stack.
  * @author    : ANUJ
  * @version   : 1.0
  * @since     : 29-04-2019
  **/

 var stackaccess = require('./Stack');
 var readline = require('readline-sync');

 function stack() {
     try {
     var st = new stackaccess.Stack;
     var str = readline.question("Enter your mathematical expression with parantheses ");
     var ch, i;

     for (i = 0; i <= str.length; i++) {
         ch = str.charAt(i);

         if (ch == '(' || ch == '[' || ch == '{') {
             st.push(ch); //push '(','['and '{' in to the stack if its occure in expression

         }
         else {
             switch (ch) {
                 case ')': if (st.pop() != '(') { //Pop '(', if case have a choice ')'.

                     return false;
                 }
                     break;
                 case ']': if (st.pop() != '[') { //Pop '[' , if case have a choice ']'.
                     return false;
                 }
                     break;
                 case '}': if (st.pop() != '{') {//Pop '{', if case have a choice '}'.
                     return false;
                 } break;
             }
         }


     }
     // To check the stack is empty or not
     if (st.isEmpty()) {
         console.log("expression  is balanced");
     }
     else {
         console.log("Not balanced");
         }
     }
     catch (err) {
         console.log(err);
     }
 } stack();
