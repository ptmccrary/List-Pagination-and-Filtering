/*** 
 * Global variables
***/

const studentList = document.querySelector('.student-list');
const students = studentList.children;
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
   const numPages = Math.floor(students.length/pageItems);
   
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
 }

/***
 *  Call functions
***/

showPage(students, 1);
appendPageLinks(students);
searchBar();