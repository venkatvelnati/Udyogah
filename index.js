let List =[];

const url = document.getElementById("urlBox"); 
const addBtn = document.getElementById("addButton");
const saved = document.getElementById("links");



addBtn.addEventListener("click", function() {
    List.push(url.value);
    url.value="";
    renderList();
})

function renderList(){
    let listItems = ""
    for(let i=0;i<List.length;i++){
        listItems+= `
            <li>
                <a href='${List[i]}' target='_blank'>${List[i]}</a>
            </li>
        `
    }
    saved.innerHTML = listItems;
}

