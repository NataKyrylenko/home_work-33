//1
document.body.addEventListener("keydown", editStart);
function editStart(e) {
  if ((e.code === "NumpadAdd" || e.code === "KeyE") && e.ctrlKey) {
    e.preventDefault();
    let el = document.getElementById('editText');
    let newEl = document.createElement("textarea");
    let newElem = document.createElement("div");
    let textArea=document.querySelector("textarea");
    if (e.code === "NumpadAdd") {
       let val = e.target.value;
       newElem.textContent = val;
       textArea.replaceWith(newElem);
    }
    if (e.code === "KeyE") {
      newEl.textContent = el.textContent;
      el.replaceWith(newEl);
    }
  }
}


//2
let table = document.getElementById("myTable");
let rows = table.getElementsByTagName("TR");
let titleRows = document.getElementById("titleRows")
function sortTable() {   
    switching = true;
    while (switching) {
      switching = false;      
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}
titleRows.onclick = function() {
  sortTable()
}
//3
let textBlock = document.getElementById('textBlock');
let newBlock = document.createElement('div');
newBlock.className = 'newBlock';
textBlock.appendChild(newBlock);
newBlock.addEventListener('mousedown', initResive, false);

function initResive(e) {
  window.addEventListener('mousemove', Resize, false);
  window.addEventListener('mouseup', stopResize, false);
}
function Resize(e) {
  textBlock.style.width = (e.clientX - textBlock.offsetLeft) + 'px';
  textBlock.style.height = (e.clientY - textBlock.offsetTop) + 'px';
}
function stopResize(e) {
  window.removeEventListener('mousemove', Resize, false);
  window.removeEventListener('mouseup', stopResize, false);
}

