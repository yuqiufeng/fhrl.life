const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navigation");
menu?.addEventListener("click", () => {
  const expanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open", !expanded);
});
nav?.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }),
);
const tabs = [...document.querySelectorAll("[data-tab]")];
function selectTab(tab) {
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute("aria-controls")).hidden =
      !selected;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft")
      next = (index + tabs.length - 1) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectTab(tabs[next]);
      tabs[next].focus();
    }
  });
});
const notes = [
  {
    date: "11 月 6 日 · 17:42",
    text: "绕了一点路，走到湖边。风吹过来的时候，突然觉得，今天也很好。",
  },
  {
    date: "11 月 6 日 · 12:08",
    text: "午饭后的一杯热茶。什么也没做，坐了一小会儿。",
  },
  {
    date: "11 月 3 日 · 08:16",
    text: "发现楼下的银杏开始变黄了。想等叶子落下来的时候，再来走走。",
  },
];
const input = document.querySelector('input[type="search"]');
const results = document.querySelector(".search-results");
function renderNotes() {
  const value = input.value.trim();
  const matches = notes.filter((note) => note.text.includes(value));
  results.replaceChildren();
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "empty-result";
    empty.textContent = "没有找到这个片刻，试试「湖边」或「热茶」。";
    results.append(empty);
    return;
  }
  matches.forEach((note) => {
    const article = document.createElement("article");
    article.className = "result-note";
    const time = document.createElement("time");
    time.textContent = note.date;
    const text = document.createElement("p");
    text.textContent = note.text;
    article.append(time, text);
    results.append(article);
  });
}
input?.addEventListener("input", renderNotes);
document.querySelectorAll("[data-query]").forEach((button) =>
  button.addEventListener("click", () => {
    input.value = button.dataset.query;
    renderNotes();
  }),
);
if (input) renderNotes();
