function Header(props) {
  
  return(
    <div className='header'>
      <div className='header-title'>Memory game</div>
      <div className='header-scoreboard'>
        <p>Score: <span id='header-score'>{props.currentScore}</span></p>
        <p>High Score: <span id='header-highscore'>{props.highScore}</span></p>
      </div>
    </div>
  )
}

export default Header;