function showPage(pageId, el) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');

  document.getElementById(pageId).style.display = 'block';

  const menuItems = document.querySelectorAll('.sidebar li');
  menuItems.forEach(item => item.classList.remove('active'));

  if (el) {
    el.classList.add('active');
  }
}

function tambahTugas() {
  const select = document.getElementById("course");
  const value = select.value;

  if (value === "") {
    alert("Pilih mata kuliah dulu!");
    return;
  }

  const list = document.querySelector(".tugas-list");

  const item = document.createElement("p");
  item.textContent = "⏳ " + value;

  list.appendChild(item);

  select.value = "";
}