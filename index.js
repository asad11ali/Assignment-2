const menu = document.getElementById('menu');

function showMenu() {
  menu.style.right = '0';
}
function hideMenu() {
  menu.style.right = '-200px';
}

showMenu();
hideMenu();

const data = [
  {
    buttonTitle: 'See Project',
  },
  {
    title: 'Data Dashboard <br> Healthcare',
    discription: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    item1: 'HTML',
    item2: 'Bootstrap',
    item3: 'Ruby',
  },
  {
    title: 'Website Portfolio',
    discription: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    item1: 'HTML',
    item2: 'Bootstrap',
    item3: 'Ruby',
  },

];
const main = document.querySelector('.card-desktop-item1');

main.innerHTML = `
      <div class="card-desktop-item1">
          <div class="block1">
            <button>${data[0].buttonTitle}</button>
          </div>
          <div class="block2">
                <h2>${data[1].title}</h2>
                <p>
                     ${data[1].discription}
                </p>
                <span class="card-item">
                    <div>${data[1].item1}</div>
                    <div>${data[1].item2}</div>
                    <div>${data[1].item3}</div>
                </span>
          </div>
          <div class="block3">
                <h2>${data[2].title}</h2>
                <p>
                     ${data[2].discription}
                </p>
                <span class="card-item">
                    <div>${data[2].item1}</div>
                    <div>${data[2].item2}</div>
                    <div>${data[2].item3}</div>
                </span>
          </div>
       </div>
`;

const data2 = [

  {
    title: 'Profesional Art <br>Printing Data More',
    discription: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    item1: 'HTML',
    item2: 'Bootstrap',
    item3: 'Ruby',
  },
  {
    title: 'Data Dashboard <br> Healthcare',
    discription: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    item1: 'HTML',
    item2: 'Bootstrap',
    item3: 'Ruby',
  },
  {
    title: 'Website Portfolio',
    discription: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    item1: 'HTML',
    item2: 'Bootstrap',
    item3: 'Ruby',
  },

];
const main2 = document.querySelector('.card-desktop-item2');

main2.innerHTML = `
    <div class="card-desktop-item1">
        <div class="block1">
              <h2>${data2[0].title}</h2>
              <p>
                   ${data2[0].discription}
              </p>
              <span class="card-item">
                  <div>${data2[0].item1}</div>
                  <div>${data2[0].item2}</div>
                  <div>${data2[0].item3}</div>
              </span>
        </div>
        <div class="block2">
              <h2>${data2[1].title}</h2>
              <p>
                   ${data2[1].discription}
              </p>
              <span class="card-item">
                  <div>${data2[1].item1}</div>
                  <div>${data2[1].item2}</div>
                  <div>${data2[1].item3}</div>
              </span>
        </div>
        <div class="block3">
              <h2>${data2[2].title}</h2>
              <p>
                   ${data2[2].discription}
              </p>
              <span class="card-item">
                  <div>${data2[2].item1}</div>
                  <div>${data2[2].item2}</div>
                  <div>${data2[2].item3}</div>
              </span>
        </div>
     </div>
`;

// const popup = document.querySelector('.popup');

// function showPopup() {
//   popup.style.display = 'flex';
// }
// function hidePopup() {
//   popup.style.display = 'none';
// }
// showPopup();
// hidePopup();

// let cardData = [
//   {
//     title : "Profesional Art <br>Printing Data",
//     discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     item1 : "HTML",
//     item2 : "Bootstrap",
//     item3 : "Ruby",
//     btn : "See project",
//   },  {
//     title : "Profesional Art <br>Printing Data",
//     discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     item1 : "HTML",
//     item2 : "Bootstrap",
//     item3 : "Ruby",
//     btn : "See project",
//   },  {
//     title : "Profesional Art <br>Printing Data",
//     discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     item1 : "HTML",
//     item2 : "Bootstrap",
//     item3 : "Ruby",
//     btn : "See project",
//   },  {
//     title : "Profesional Art <br>Printing Data",
//     discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     item1 : "HTML",
//     item2 : "Bootstrap",
//     item3 : "Ruby",
//     btn : "See project",
//   },  {
//     title : "Profesional Art <br>Printing Data",
//     discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     item1 : "HTML",
//     item2 : "Bootstrap",
//     item3 : "Ruby",
//     btn : "See project",
//   },  {
//     title : "Profesional Art <br>Printing Data",
//     discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     item1 : "HTML",
//     item2 : "Bootstrap",
//     item3 : "Ruby",
//     btn : "See project",
//   },
//   {
//     title : "Profesional Art <br>Printing Data",
//     discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     item1 : "HTML",
//     item2 : "Bootstrap",
//     item3 : "Ruby",
//     btn : "See project",
//   }
// ];


//   const cardContainer = document.querySelector(".card-tablate");
 
//       // Create card element using template literals
//       cardContainer.innerHTML = `
//       <div class="card-tablate-1">
//       <div class="block2" >
//             <h2>${cardData[0].title}</h2>
//                 <p>
//                    ${cardData[0].discription}
//                 </p>
//                 <span class="card-item">
//                     <div>${cardData[0].item1}</div>
//                     <div>${cardData[0].item2}</div>
//                     <div>${cardData[0].item3}</div>
//                 </span>
//                 <button class="btn-2">${cardData[0].btn}</button>
//         </div>
//           <div class="block2" >
//                 <h2>${cardData[1].title}</h2>
//                 <p>
//                    ${cardData[1].discription}
//                 </p>
//                 <span class="card-item">
//                     <div>${cardData[1].item1}</div>
//                     <div>${cardData[1].item2}</div>
//                     <div>${cardData[1].item3}</div>
//                 </span>
//                 <button class="btn-2">${cardData[1].btn}</button>
//         </div>
//         </div>
//         <div class="card-tablate-2">
//           <div class="block2" >
//                 <h2>${cardData[2].title}</h2>
//                 <p>
//                    ${cardData[2].discription}
//                 </p>
//                 <span class="card-item">
//                     <div>${cardData[2].item1}</div>
//                     <div>${cardData[2].item2}</div>
//                     <div>${cardData[2].item3}</div>
//                 </span>
//                 <button class="btn-2">${cardData[2].btn}</button>
//         </div>
//           <div class="block2" >
//                 <h2>${cardData[3].title}</h2>
//                 <p>
//                    ${cardData[3].discription}
//                 </p>
//                 <span class="card-item">
//                     <div>${cardData[3].item1}</div>
//                     <div>${cardData[3].item2}</div>
//                     <div>${cardData[3].item3}</div>
//                 </span>
//                 <button class="btn-2">${cardData[3].btn}</button>
//         </div>
//         </div>
//         <div class="card-tablate-3">
//           <div class="block2" >
//                 <h2>${cardData[4].title}</h2>
//                 <p>
//                    ${cardData[4].discription}
//                 </p>
//                 <span class="card-item">
//                     <div>${cardData[4].item1}</div>
//                     <div>${cardData[4].item2}</div>
//                     <div>${cardData[4].item3}</div>
//                 </span>
//                 <button class="btn-2">${cardData[4].btn}</button>
//         </div>
//          <div class="block2" >
//                 <h2>${cardData[5].title}</h2>
//                 <p>
//                    ${cardData[5].discription}
//                 </p>
//                 <span class="card-item">
//                     <div>${cardData[5].item1}</div>
//                     <div>${cardData[5].item2}</div>
//                     <div>${cardData[5].item3}</div>
//                 </span>
//                 <button class="btn-2">${cardData[5].btn}</button>
//         </div>
//         </div>
         
//       `;
// const popup = document.querySelector('.popup');

// function showPopup() {
//   popup.style.display = 'flex';
// }
// function hidePopup() {
//   popup.style.display = 'none';
// }
// showPopup();
// hidePopup();

let cardData = [
  {
    title : "Profesional Art <br>Printing Data",
    discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    item1 : "HTML",
    item2 : "Bootstrap",
    item3 : "Ruby",
    btn : "See project",
  },  {
    title : "Profesional Art <br>Printing Data",
    discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    item1 : "HTML",
    item2 : "Bootstrap",
    item3 : "Ruby",
    btn : "See project",
  },  {
    title : "Profesional Art <br>Printing Data",
    discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    item1 : "HTML",
    item2 : "Bootstrap",
    item3 : "Ruby",
    btn : "See project",
  },  {
    title : "Profesional Art <br>Printing Data",
    discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    item1 : "HTML",
    item2 : "Bootstrap",
    item3 : "Ruby",
    btn : "See project",
  },  {
    title : "Profesional Art <br>Printing Data",
    discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    item1 : "HTML",
    item2 : "Bootstrap",
    item3 : "Ruby",
    btn : "See project",
  },  {
    title : "Profesional Art <br>Printing Data",
    discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    item1 : "HTML",
    item2 : "Bootstrap",
    item3 : "Ruby",
    btn : "See project",
  },
  {
    title : "Profesional Art <br>Printing Data",
    discription : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    item1 : "HTML",
    item2 : "Bootstrap",
    item3 : "Ruby",
    btn : "See project",
  }
];


  // const cardContainer = document.querySelector(".card-tablate");
 
  //     // Create card element using template literals
  //     cardContainer.innerHTML = `
  //     <div class="card-tablate-1">
  //     <div class="block2" >
  //           <h2>${cardData[0].title}</h2>
  //               <p>
  //                  ${cardData[0].discription}
  //               </p>
  //               <span class="card-item">
  //                   <div>${cardData[0].item1}</div>
  //                   <div>${cardData[0].item2}</div>
  //                   <div>${cardData[0].item3}</div>
  //               </span>
  //               <button class="btn-2">${cardData[0].btn}</button>
  //       </div>
  //         <div class="block2" >
  //               <h2>${cardData[1].title}</h2>
  //               <p>
  //                  ${cardData[1].discription}
  //               </p>
  //               <span class="card-item">
  //                   <div>${cardData[1].item1}</div>
  //                   <div>${cardData[1].item2}</div>
  //                   <div>${cardData[1].item3}</div>
  //               </span>
  //               <button class="btn-2">${cardData[1].btn}</button>
  //       </div>
  //       </div>
  //       <div class="card-tablate-2">
  //         <div class="block2" >
  //               <h2>${cardData[2].title}</h2>
  //               <p>
  //                  ${cardData[2].discription}
  //               </p>
  //               <span class="card-item">
  //                   <div>${cardData[2].item1}</div>
  //                   <div>${cardData[2].item2}</div>
  //                   <div>${cardData[2].item3}</div>
  //               </span>
  //               <button class="btn-2">${cardData[2].btn}</button>
  //       </div>
  //         <div class="block2" >
  //               <h2>${cardData[3].title}</h2>
  //               <p>
  //                  ${cardData[3].discription}
  //               </p>
  //               <span class="card-item">
  //                   <div>${cardData[3].item1}</div>
  //                   <div>${cardData[3].item2}</div>
  //                   <div>${cardData[3].item3}</div>
  //               </span>
  //               <button class="btn-2">${cardData[3].btn}</button>
  //       </div>
  //       </div>
  //       <div class="card-tablate-3">
  //         <div class="block2" >
  //               <h2>${cardData[4].title}</h2>
  //               <p>
  //                  ${cardData[4].discription}
  //               </p>
  //               <span class="card-item">
  //                   <div>${cardData[4].item1}</div>
  //                   <div>${cardData[4].item2}</div>
  //                   <div>${cardData[4].item3}</div>
  //               </span>
  //               <button class="btn-2">${cardData[4].btn}</button>
  //       </div>
  //        <div class="block2" >
  //               <h2>${cardData[5].title}</h2>
  //               <p>
  //                  ${cardData[5].discription}
  //               </p>
  //               <span class="card-item">
  //                   <div>${cardData[5].item1}</div>
  //                   <div>${cardData[5].item2}</div>
  //                   <div>${cardData[5].item3}</div>
  //               </span>
  //               <button class="btn-2">${cardData[5].btn}</button>
  //       </div>
  //       </div>
         
  //     `;
// Select the card container and popup elements
// Select the card container and popup elements
const cardContainer = document.querySelector(".card-tablate");
const popup = document.querySelector('.popup');

// Function to show the popup
function showPopup(card) {
  popup.innerHTML = `
    <div class="popup-content block2">
      <h2>${card.title}</h2>
      <p>${card.discription}</p>
      <span class="card-item">
        <div>${card.item1}</div>
        <div>${card.item2}</div>
        <div>${card.item3}</div>
      </span>
      <button class="btn-close btn-2">Close</button>
    </div>
  `;
  popup.style.display = 'flex';

  // Add event listener to the close button
  const closeButton = popup.querySelector('.btn-close');
  closeButton.addEventListener('click', hidePopup);
}

// Function to hide the popup
function hidePopup() {
  popup.style.display = 'none';
}

// Loop through cardData to generate the cards
cardData.forEach((card, index) => {
  // Create card element using template literals
  const cardElement = document.createElement('div');
  cardElement.classList.add('block2');
  cardElement.innerHTML = `
    <h2>${card.title}</h2>
    <p>${card.discription}</p>
    <span class="card-item">
      <div>${card.item1}</div>
      <div>${card.item2}</div>
      <div>${card.item3}</div>
    </span>
    <button class="btn-2" data-index="${index}">${card.btn}</button>
  `;
  cardContainer.appendChild(cardElement);
});

// Add event listeners to all "See project" buttons
const buttons = document.querySelectorAll('.btn-2');
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const cardIndex = event.target.getAttribute('data-index');
    showPopup(cardData[cardIndex]);
  });
});
