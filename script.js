const reserveButton = document.getElementById("reserve-button");

reserveButton.addEventListener("click", function () {

  const name = document.getElementById("name").value.trim();
  const roomType = document.getElementById("room-type").value;
  const people = document.getElementById("people").value;
  const start = document.getElementById("start").value;
  const message = document.getElementById("reservation-message");

  // 入力内容の確認
  if (name === "" || roomType === "" || people === "" || start === "") {

    message.textContent = "入力していない項目があります";
    message.style.color = "#cc3333";
    return;
  }

  // 過去の日付を確認
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDate = new Date(start + "T00:00:00");

  if (selectedDate < today) {
    message.textContent = "過去の日付は選択できません。";
    message.style.color = "#cc3333";
    return;
  }

  // 予約内容を表示
  message.style.color = "#344b2b";
  message.innerHTML = `
    <h3>ご予約内容の確認</h3>
    <p>お名前：${name} 様</p>
    <p>お部屋タイプ：${roomType}</p>
    <p>宿泊人数：${people}匹</p>
    <p>宿泊日：${start}</p>
    <button type="button" id="confirm-button">この内容で予約する</button>
  `;

  document.getElementById("confirm-button").addEventListener("click", function () {
    message.innerHTML =
      "<h2>ご予約が完了しました</h2> <br>" +
      "<p>" + name + "様、ご予約ありがとうございます。" + "お待ちしております"
  });
});