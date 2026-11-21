// Shared helpers for every admin page. No framework — plain fetch calls
// against the JWT-protected /api/admin/* endpoints.

const TOKEN_KEY = "portfolio_admin_token";

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

// Redirect to login if there's no token. Call this at the top of every
// admin page except the login page itself.
function requireAuth() {
  if (!getToken()) {
    window.location.href = "/admin/login";
  }
}

// fetch() wrapper that attaches the bearer token and bounces to login on 401.
async function authFetch(url, options = {}) {
  const headers = { ...(options.headers || {}), Authorization: `Bearer ${getToken()}` };
  const response = await fetch(url, { ...options, headers });
  if (response.status === 401) {
    clearToken();
    window.location.href = "/admin/login";
    throw new Error("Not authenticated");
  }
  return response;
}

function logout() {
  clearToken();
  window.location.href = "/admin/login";
}

// Turns a textarea's newline-separated value into a clean string array,
// used for the list-like fields (tech badges, skill items, bullet points, tags).
function linesToArray(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

function arrayToLines(items) {
  return (items || []).join("\n");
}

function showStatus(el, message, isError = false) {
  el.textContent = message;
  el.style.color = isError ? "#c0392b" : "#2e7d32";
  if (!isError) {
    setTimeout(() => { el.textContent = ""; }, 2500);
  }
}
