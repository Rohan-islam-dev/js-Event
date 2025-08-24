document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log('btn clicked')
    const pagetitleElemenet = document.getElementById("page-title");
    console.log(pagetitleElemenet);
    pagetitleElemenet.innerText = "Update page title";
  });

//user login
document.getElementById("login").addEventListener("click", function () {
  const userInfoEl = document.getElementById("users");
  userInfoEl.innerText = "User login Succesful";
});
