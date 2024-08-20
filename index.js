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

const popup = document.querySelector('.popup');

function showPopup() {
  popup.style.display = 'flex';
}
function hidePopup() {
  popup.style.display = 'none';
}
showPopup();
hidePopup();
