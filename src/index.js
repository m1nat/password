import { routs, paths } from "./shared/constants/routs.js";
import { renderPosts, postFormHandler } from "./dom-hanlers/posts-renderer";
import { signInHandler } from "./components/sign-in/sign-in";
import { getToken } from "./shared/ls-service.js";
import { logoutBtnHandler } from "./components/profile/profile.js";
import { signUpHandler } from "./components/sign-up/sign-up.js";
import "./styles/styles.scss";
import { passwordStrengthController } from "./shared/validators.js";

window.onload = () => {
  const pathname = Object.values(paths).find(
    (path) => path === window.location.pathname
  );

  switch (pathname) {
    case paths.home:
      const token = getToken();

      if (!token) {
        window.location.href = routs.sign_in;
      } else {
        renderPosts();
        postFormHandler();
        logoutBtnHandler();
      }
      break;
    case paths.sign_in:
      signInHandler();
      passwordStrengthController();
      break;
      case paths.sign_up:
        signUpHandler()
        break;
    default:
      break;
  }
};
