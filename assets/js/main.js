async function inject(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  const res = await fetch(url);
  el.innerHTML = await res.text();
}

inject("#header", "/partials/header.html");
inject("#footer", "/partials/footer.html");
