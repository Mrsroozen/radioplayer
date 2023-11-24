// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const channelsContainer = document.querySelector("#channels");

async function getRadio() {
    const response = await fetch('https://api.sr.se/api/v2/channels/?format=json');
    const data = await response.json();

    data.channels.forEach((channel) => {
        const listItem = document.createElement("div");
        listItem.innerHTML = `<img src="${channel.image}" width="100" height="100"> ${channel.name} <br> <audio controls> <source src="${channel.liveaudio.url}" type="audio/mpeg"/></audio>` 
        listItem.style.marginTop = '50px';
        listItem.style.backgroundColor = `#${channel.color}`;

        channelsContainer.appendChild(listItem);

    })
}

getRadio();



// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.


// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
 
