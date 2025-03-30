export function logout() {
  localStorage.removeItem("authorization");
  window.location.reload();
}
