function calculateWithdrawal1() {
  let currentAsset = parseFloat(document.getElementById("currentAsset1").value);
  let baseAsset = parseFloat(document.getElementById("baseAsset1").value);
  if (isNaN(currentAsset) || isNaN(baseAsset)) {
    alert("数値を入力してください。");
    return;
  }
  let withdrawal = (currentAsset - baseAsset) / 4;
  withdrawal = withdrawal > 0 ? withdrawal : 0;
  document.getElementById(
    "result1"
  ).innerText = `四半期ごとの取り崩し額: ${withdrawal.toFixed(2)} 円`;
}

function calculateWithdrawal2() {
  let currentAsset = parseFloat(document.getElementById("currentAsset2").value);
  let baseAsset = parseFloat(document.getElementById("baseAsset2").value);
  let month = parseInt(document.getElementById("month").value);
  if (isNaN(currentAsset) || isNaN(baseAsset)) {
    alert("数値を入力してください。");
    return;
  }
  let divisor = 1;
  if (month === 3) divisor = 4;
  else if (month === 6) divisor = 3;
  else if (month === 9) divisor = 2;
  else if (month === 12) divisor = 1;

  let withdrawal = (currentAsset - baseAsset) / divisor;
  withdrawal = withdrawal > 0 ? withdrawal : 0;
  document.getElementById(
    "result2"
  ).innerText = `${month}月の取り崩し額: ${withdrawal.toFixed(2)} 円`;
}
