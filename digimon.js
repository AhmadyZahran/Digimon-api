const container = document.getElementById('container');


function Digimon(image, name, level) {
    this.image = image;
    this.name = name;
    this.level = level;

}



async function getDigimon() {
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            data.slice(0, 20).map(digimon => {
                const digimoObj = new Digimon(digimon.img, digimon.name, digimon.level);
                const card = document.createElement('div');
                card.innerHTML = `
                <div class="a-box">
                <div class="img-container">
                <div class="img-inner">
                <div class="inner-skew">
                    <img src="${digimoObj.image}">
                </div>
                </div>
                </div>
                <div class="text-container">
                    <h3>${digimoObj.name}      </h3>
                    <div>
                    ${digimoObj.level}
                </div>
                </div>
                </div>
                `;
                container.appendChild(card);
            });
        }
        )
        .catch(error => console.log(error))

}
getDigimon();
