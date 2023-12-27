import { val } from "https://esm.town/v/todepond/val";


const passwordInput = document.querySelector("#password")

const export handlePasswordInput = () => {
  localStorage.setItem("password", passwordInput.value)
};

passwordInput.value = localStorage.getItem("password") ?? ""

