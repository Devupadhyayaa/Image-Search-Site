const apikey="yDOtiNmWeTNulAOT0x9I3fkj4jIM7O0Pvix8wxtvhb8";
const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const grid = document.querySelector(".grid");
const showmore = document.querySelector("#show-more");
let keyword="";
let page=1;
let count=1;
async function showimages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?query=${keyword}&page=${page}&per_page=16&client_id=${apikey}`;
    const resp = await fetch(url);
    const data = await resp.json();
    if(count===1)grid.innerHTML="";
    const results = data.results;
    // console.log(results);
    for(let result = 0;result<results.length;result++){
        const image = document.createElement('img');
        image.src=results[result].urls.small;
        const anchor = document.createElement('a');
        anchor.href=results[result].links.html;
        anchor.append(image);
        anchor.target="_blank";
        grid.append(anchor);
    }
    showmore.style.display="block";
}
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    count=1;
    showimages();
});
showmore.addEventListener('click',()=>{
    page++;
    count++;
    showimages();
})
