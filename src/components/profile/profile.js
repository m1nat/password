import { removeToken, removeUserEmail } from "../../shared/ls-service";
import { routs } from "../../shared/constants/routs";

export const logoutBtnHandler = () => {
  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.onclick = () => {
    removeToken();
    removeUserEmail();
    window.location.href = routs.sign_in;
  };
};
