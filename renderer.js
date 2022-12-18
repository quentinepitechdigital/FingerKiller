document.addEventListener("keydown", function (ev) {
  console.log(ev.key);
});

for (const id of ["key1", "key2"]) {
  document.getElementById(id).addEventListener("keydown", function (ev) {
    ev.preventDefault();
    document.getElementById(id).value = ev.key;
  });
}
