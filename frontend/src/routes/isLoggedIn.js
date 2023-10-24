export const isLoggedIn = () => {
  const item = localStorage.getItem("auth");
  if (localStorage.getItem("auth")) return true;
  return false;
};
