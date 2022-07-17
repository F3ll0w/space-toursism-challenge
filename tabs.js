const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});


let tabFocus = 0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    
        if (e.keyCode === keydownRight) {
            tabFocus++;
            if (tabFocus >= tabs.length) {
                tabFocus = 0;
            }
        } else if (e.keyCode === keydownLeft) {
            tabFocus--;
            if (tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
        }
        
        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    }
}


function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    
    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
        
    targetTab.setAttribute("aria-selected", true);

    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);
    
    hideContent(mainContainer, 'picture');
    showContent(mainContainer, [`#${targetImage}`]);
        
}

function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
    parent.querySelector(content).removeAttribute('hidden');
}


// json

/*async function getPlanets() {
    let url = 'data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

// Render json in div //
async function renderPlanets() {

    let planets= await getPlanets();
    console.log(planets);
    let html = '';
    let htmlSegment =  `<h2 class="uppercase fs-800 ff-serif">${planets.destinations[0].name}</h2>
                            <p>${planets.destinations[0].description}</p>

                            <div class="destsination-meta flex">

                            <div>
                                <h3 class="uppercase ff-sans-cond fs-300 letter-spacing-3 text-accent">Avg. distance</h3>
                                <p class="uppercase ff-serif">${planets.destinations[0].distance}</p>
                            </div>

                            <div>
                                <h3 class="uppercase ff-sans-cond fs-300 letter-spacing-3 text-accent">Est. travel time</h3>
                                <p class="uppercase ff-serif">${planets.destinations[0].travel}</p>
                            </div>

                            </div>`;                                    

        html += htmlSegment;

    let container = document.querySelector('article');
    container.innerHTML = html;
}

renderPlanets();
*/

    




