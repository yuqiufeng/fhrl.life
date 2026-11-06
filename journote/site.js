const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navigation");
menu?.addEventListener("click", () => {
  const next = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(next));
  nav.classList.toggle("open", next);
});
nav?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }),
);
const examples = [
  "午饭后，沿着小路散了会儿步。\n阳光很好，决定把今天记下来。",
  "楼下的银杏开始变黄了。\n原来，秋天已经走到身边。",
  "给自己泡了一杯热茶。\n什么也不做，坐了一小会儿。",
];
let exampleIndex = 0;
document.querySelector(".change-sample")?.addEventListener("click", () => {
  exampleIndex = (exampleIndex + 1) % examples.length;
  document.querySelector(".sample-text").textContent = examples[exampleIndex];
});
const postcard = document.querySelector(".postcard");
postcard?.addEventListener("click", () => {
  const flipped = postcard.getAttribute("aria-pressed") !== "true";
  postcard.setAttribute("aria-pressed", String(flipped));
  postcard.setAttribute(
    "aria-label",
    flipped ? "翻回照片正面" : "翻到照片背面",
  );
});
const notes = [
  {
    date: "11 月 6 日 · 17:42",
    text: "绕了一点路，走到湖边。风一吹，就觉得今天也很好。",
  },
  {
    date: "11 月 5 日 · 20:16",
    text: "给自己泡了一杯热茶。忙里偷闲，也是一件正经事。",
  },
  {
    date: "11 月 3 日 · 08:16",
    text: "楼下的银杏开始变黄了。原来秋天已经走到身边。",
  },
];
const input = document.querySelector('input[type="search"]');
const results = document.querySelector(".search-results");
function render() {
  const query = input.value.trim();
  const list = notes.filter((n) => n.text.includes(query));
  results.replaceChildren();
  if (!list.length) {
    const p = document.createElement("p");
    p.className = "empty";
    p.textContent = "没有找到，试试其他词吧。";
    results.append(p);
    return;
  }
  list.forEach((n) => {
    const article = document.createElement("article");
    const t = document.createElement("time");
    t.textContent = n.date;
    const p = document.createElement("p");
    p.textContent = n.text;
    article.append(t, p);
    results.append(article);
  });
}
input?.addEventListener("input", render);
document.querySelectorAll("[data-query]").forEach((b) =>
  b.addEventListener("click", () => {
    input.value = b.dataset.query;
    render();
  }),
);
if (input) render();
