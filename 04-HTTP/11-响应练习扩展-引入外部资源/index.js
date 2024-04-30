//获取所有的 td
let tds = document.querySelectorAll('td');
//遍历
tds.forEach(item => {
  // item.addEventListener('click', function () {
  //   this.style.background = '#222';
  // })
  item.onclick = function () {
    this.style.background = '#222';
  }
})