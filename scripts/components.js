export async function loadComponent(selector, url) {
  const el = document.querySelector(selector);
  if (el) {
    const res = await fetch(url);
    el.innerHTML = await res.text();
  }
}