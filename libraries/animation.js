var block = false;

if(block)
  document.body.innerHTML = `<div style="height:100vh;position:relative;z-index:10000;background-color:#fff;padding: 10px;">
  <div style="font-size: 28px; font-weight: bold; font-family: Times New Roman, serif; text-align: center; padding-top: 50px;">
    Страница недоступна
  </div>
  <div style="font-size: 20px;font-family: Times New Roman, serif; margin-top: 20px;">Веб-сайт <b>www.${window.location.hostname}</b> был заблокирован по жалобам пользователей.</div>
  <div style="font-size: 20px;font-family: Times New Roman, serif; margin-top: 20px;">Причина блокировки: <b>неуплата исполнителю(ям) за разработку сайта.</b></div>
</div>`
