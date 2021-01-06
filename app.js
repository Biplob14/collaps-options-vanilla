// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         // parent element used twice to catch question class
//         // console.log(question);
//         question.classList.toggle('show-text');
//     });
// });

// second method

// using selectors inside the element
const questions = document.querySelectorAll('.question');

// questions.forEach()