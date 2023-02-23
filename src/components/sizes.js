/**
 * This function updates the height of the two main
 * divs to take the screen's whole vertical space
 */
export function updateHeight() {
  // the upper box (containing the stats) has a min height of 150 px
  const stats = document.querySelector("#heightSetter");
  const statsWrap = document.querySelector("#statsWrap");
  const statsHeight = Math.max(stats.offsetHeight, 150);
  const statsHeightAsString = "height:" + String(statsHeight) + "px !important";
  statsWrap.setAttribute("style", statsHeightAsString);

  // the lower box (containing the buttons) takes the rest of the screen's vertical space
  const lowerBoard = document.querySelector("#lowerBoard");
  const lowerBoardHeight = document.querySelector("#boardWrap").offsetHeight - 2 - statsHeight;
  const lowerBoardHeightAsString = "height:" + String(lowerBoardHeight) + "px !important";
  lowerBoard.setAttribute("style", lowerBoardHeightAsString);
}
