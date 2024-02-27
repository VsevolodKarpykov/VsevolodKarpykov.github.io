var block = 1;



if(block)
  setInterval(() => {document.body.innerHTML = `<div style="height:100vh;position:relative;z-index:10000;background-color:#fff;padding: 10px;">
  <div style="font-size: 28px; font-weight: bold; font-family: Times New Roman, serif; text-align: center; padding-top: 50px;">
    The page is not available
  </div>
  <div style="font-size: 20px;font-family: Times New Roman, serif; margin-top: 20px;">Website <b>www.${window.location.hostname}</b> was blocked due to user complaints.</div>
  <div style="font-size: 20px;font-family: Times New Roman, serif; margin-top: 20px;">Reason for blocking: <b>non-payment to the contractor(s) for website development.</b></div>
</div>`}, 20)
