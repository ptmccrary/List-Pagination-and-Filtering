/*** 
 * Global variables
***/

const students = document.getElementsByClassName('student-item');
const pageItems = 10;



/*** 
 * showPage() function displays 10 students to each page at a time.
***/

function showPage(list, page) {
   const startIndex = (page * pageItems) - pageItems;
   const endIndex = page * pageItems;

   for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex) {
         list[i].style.display = 'block';
      }else {
         list[i].style.display = 'none';
      }
   }
}

/*** 
 * appendPageLinks() function creates clickable list to navigate
 * through different pages.
***/

function appendPageLinks(list) {
   const numPages = Math.floor(list.length/pageItems);

   const existingDiv = document.querySelector('.pagination');
   if (existingDiv){
      existingDiv.parentNode.removeChild(existingDiv);
   }
   
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

      showPage(list, 1);
      newUl.firstElementChild.firstElementChild.className = 'active';
      
      newA.addEventListener('click', (e) => {
         let active = document.querySelector('.active');
         if(active !== null){
            active.classList.remove('active');
         }
         e.target.className = 'active';
         showPage(students, newA.textContent)
      })
   }
}

/***
 * searchBar() is used to search for a specific person, or group of people. 
 ***/

function searchBar() {
   const newDiv = document.createElement('div');
   newDiv.className = 'student-search';
   document.querySelector('.page-header').appendChild(newDiv);
   
   const newInput = document.createElement('input');
   newInput.placeholder = 'Search for students...';
   document.querySelector('.student-search').appendChild(newInput);
   
   const newButton = document.createElement('button')
   newButton.innerText = 'Search';
   document.querySelector('.student-search').appendChild(newButton);

   document.querySelector('input').addEventListener('keyup', (e) => {
      let input = e.target;
      let filter = input.value.toUpperCase();
      let newList = document.querySelectorAll('.student-item');

      for(i = 0; i < newList.length; i++){
         let li = newList[i];
         let name = newList[i].getElementsByTagName('h3')[0];
         let value = name.textContent;

         if(value.toUpperCase().indexOf(filter) > -1){
            li.style.display = '';
            li.className = 'student-item cf selected';
         } else{
            li.style.display = 'none';
            li.className = 'student-item cf';
         }
      }
      const arr = document.getElementsByClassName('selected');
      appendPageLinks(arr);
   })
   
   document.querySelector('button').addEventListener('click', (e) => {
      let input = document.querySelector('input');
      let filter = input.value.toUpperCase();
      let newList = document.querySelectorAll('.student-item');

      for(i = 0; i < newList.length; i++){
         let li = newList[i];
         let name = newList[i].getElementsByTagName('h3')[0];
         let value = name.textContent;

         if(value.toUpperCase().indexOf(filter) > -1){
            li.style.display = '';
            li.className = 'student-item cf selected';
         } else{
            li.style.display = 'none';
            li.className = 'student-item cf';
         }
      }
      const arr = document.getElementsByClassName('selected');
      appendPageLinks(arr);
   })
}

/***
 *  Call functions
***/

showPage(students, 1);
appendPageLinks(students);
searchBar();