//your code here
document.addEventListener('DOMContentLoaded', function () {
  const parent = document.getElementById('parent');
  let dragged;

  parent.addEventListener('dragstart', function (event) {
    dragged = event.target;
    event.dataTransfer.setData('text/plain', dragged.innerHTML);
  });

  parent.addEventListener('dragover', function (event) {
    event.preventDefault();
  });

  parent.addEventListener('drop', function (event) {
    event.preventDefault();
    if (event.target.classList.contains('image')) {
      const dropped = event.target;
      const temp = dragged.innerHTML;
      dragged.innerHTML = dropped.innerHTML;
      dropped.innerHTML = temp;
    }
  });
});

