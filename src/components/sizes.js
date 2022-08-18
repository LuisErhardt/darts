export function updateHeight() {
  let stats = document.querySelector("#heightSetter");
  let statsWrap = document.querySelector("#statsWrap");
  let statsHeight = Math.max(stats.offsetHeight, 150);
  let statsHeightAsString = "height:" + String(statsHeight) + "px !important";
  statsWrap.setAttribute("style", statsHeightAsString);

  let lowerBoard = document.querySelector("#lowerBoard");
  let lowerBoardHeight = document.querySelector("#boardWrap").offsetHeight - 2 - statsHeight;
  let lowerBoardHeightAsString = "height:" + String(lowerBoardHeight) + "px !important";
  lowerBoard.setAttribute("style", lowerBoardHeightAsString);
}
