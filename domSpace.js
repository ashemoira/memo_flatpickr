function btn_click(){
  window.alert('ボタンがクリックされました');
}

function btn_result(){
  let result = confirm('次の処理を続けますか？');

  if(result){
    console.log('True');
  }else{
    console.log('False');
  }
}

var toJPN = {
  weekdays : ['日', '月', '火', '水', '木', '金', '土'],
  months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月',
           '8月', '9月', '10月', '11月', '12月'
         ]
};

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("flat").addEventListener("click", function(){
    let time = new Date;
    time.setDate(time.getDate() + 1);
    time.setMinutes(0);
    time.setHours(time.getHours() + 1);

    let interviewDate = flatpickr('#flat', {
      locale: 'ja',
      minDate: time,
      time_24hr: true,
      saveButton: true,
      enableTime: true,
      plugins: [new confirmDatePlugin({
        confirmIcon: '🔝',
        confirmText: '決定 ',
        showAlways: true,
      })]
    });
    console.log(interviewDate);
  });
}, false);

