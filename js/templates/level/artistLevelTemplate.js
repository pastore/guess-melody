﻿import createArtistAnswers from '../../utils/createArtistAnswers';

const artistLevelTemplate = (level) => {
  return `<section class="main main--level main--level-artist">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
  <circle
    cx="390" cy="390" r="370"
    class="timer-line"
    style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

  <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
    <span class="timer-value-mins">02</span><!--
    --><span class="timer-value-dots">:</span><!--
    --><span class="timer-value-secs">00</span>
  </div>
  </svg>

  <div class="main-wrap">
  <div class="main-timer"></div>

  <h2 class="title main-title">Кто исполняет эту песню?</h2>
  <div class="player-wrapper" data-right-answer="${level.rightAnswer.id}"></div>
  <form class="main-list">

  ${createArtistAnswers(level)}

  </form>
  </div>
  </section>`;
};

export default artistLevelTemplate;

