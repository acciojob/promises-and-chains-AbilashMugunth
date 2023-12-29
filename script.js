let userName = document.querySelector("#name");
let age = document.querySelector("#age");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  onSubmit();
});

async function onSubmit() {
  let ageVal = age.value;
  let userNameVal = userName.value;

  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        ageVal > 18
          ? alert(`Welcome, ${userNameVal}. You can vote.`)
          : alert(`Oh sorry ${userNameVal}. You aren't old enough.`)
      );
    }, 4000);
  });
}
