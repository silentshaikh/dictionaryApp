let btn = document.querySelector(".btn");
let myResult = document.querySelector(".descrip");
let myUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// getResult();
btn.addEventListener("click",() => {
    let inp = document.getElementById("inp").value;
    fetch(`${myUrl}${inp}`).then((response) => response.json())
    .then((data) => {
        console.log(data);
        myResult.innerHTML = `<h1>${inp}</h1>
        <p><strong>Meaning</strong> : ${data[0].meanings[0].definitions[0].definition}</p>
        <img src="${data[0].license.url}" alt="mean">
        `;
    }).catch(() => {
        myResult.innerHTML =`Couldn't Find it`;
    });
});
{/* <p class="mean">If you need more  <a href="${data[0].sourceUrls[0]}" target="_blank">Click Here</a></p> */}