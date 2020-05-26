/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
***/

const li = document.getElementsByClassName('student-item');
const pageItems = 10;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
***/

function showPage(list, page) {
   const startIndex = (page * pageItems) - pageItems;
   const endIndex = page * pageItems;

   for(let i = 0; i <= list.length; i++) {
      if(i >= startIndex && i < endIndex) {
         list[i].style.display = 'block';
      }else {
         list[i].style.display = 'none';
      }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(list) {
   const numPages = Math.ceil(li.length/pageItems);
   
   const newDiv = document.createElement('div');
   newDiv.className = 'pagination';
   document.querySelector('.page').appendChild(newDiv);

   const newUl = document.createElement('ul');
   newUl.className = 'pageButtons';
   document.querySelector('.pagination').appendChild(newUl);

   for(let i = 0; i <= numPages; i++){
      let newLi = document.createElement('li');
      let newA = document.createElement('a');

      newA.href = '#';
      newA.innerText = i + 1;
      newLi.appendChild(newA);
      document.querySelector('.pageButtons').appendChild(newLi);
   }

   
}

// Remember to delete the comments that came with this file, and replace them with your own code comments.

showPage(li, 1);
appendPageLinks(li);