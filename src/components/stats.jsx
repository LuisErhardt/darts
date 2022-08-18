import React from "react";

function Stats(props) {
  const players = props.players;
  const mainPlayer = players[0];
  const sidePlayers = players.slice(1, players.length);
  const mPContent = function (mainPlayer) {
    return (
      <div className="gridRow row row-cols-2 m-0 h-100">
        <div className="col d-flex justify-content-center align-items-center">
          <span className="">{mainPlayer.name}</span>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          {mainPlayer.currentThrows.map((x, index) => (
            <span key={index} className="ms-1 me-1">
              {x}
            </span>
          ))}
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <span className="fs-1 text-success">{mainPlayer.points}</span>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <span className="">{mainPlayer.average}</span>
        </div>
      </div>
    );
  };

  const sPContent = sidePlayers.map(function (player, index) {
    return (
      <div key={index} className="d-flex flex-wrap justify-content-center align-items-center w-100">
        <div className="d-flex justify-content-center align-items-center w-100">{player.name}</div>
        <div className="d-flex justify-content-around align-items-center w-100">
          <div className="d-flex justify-content-center align-items-center">{player.points}</div>
          <div className="d-flex justify-content-center align-items-center">{player.average}</div>
        </div>
      </div>
    );
  });

  return (
    <div id="statsWrap">
      <div className="d-flex flex-nowrap justify-content-between w-100 h-100 fs-2 bg-light text-dark rounded">
        <div id="statsMain" className="border-end border-dark">
          {mPContent(mainPlayer)}
        </div>
        <div id="statsSide" className="d-flex flex-wrap justify-content-center align-items-stretch fs-5">
          <div id="heightSetter" className="d-flex flex-wrap justify-content-center align-items-stretch">
            {sPContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
