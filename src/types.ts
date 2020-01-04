export type ScoreboardAction =
  | 'CHANGE_LEFT_FENCER_NAME'
  | 'CHANGE_LEFT_FENCER_COLOR'
  | 'CHANGE_RIGHT_FENCER_NAME'
  | 'CHANGE_RIGHT_FENCER_COLOR'
  | 'CHANGE_CONFIG_VISIBILITY'
  | 'SET_MAIN_CLOCK_STATUS'
  | 'SET_BREAK_CLOCK_STATUS'
  | 'SET_BOUT_INDEX'
  | 'SET_HOURS'
  | 'SET_MINUTES'
  | 'SET_SECONDS'
  | 'SET_TENTHS'
  | 'SET_SHOW_TENTHS'
  | 'ADD_TO_MAIN_CLOCK_TIME'
  | 'SUBTRACT_FROM_MAIN_CLOCK_TIME'
  | 'SET_MAIN_CLOCK_TIME'
  | 'SET_LEFT_FENCER_SCORE'
  | 'RESET_LEFT_FENCER_SCORE'
  | 'DECREASE_LEFT_FENCER_SCORE'
  | 'INCREASE_LEFT_FENCER_SCORE'
  | 'RESET_LEFT_FENCER_DOUBLES'
  | 'DECREASE_LEFT_FENCER_DOUBLES'
  | 'INCREASE_LEFT_FENCER_DOUBLES'
  | 'RESET_LEFT_FENCER_CARDS'
  | 'HIDE_LEFT_FENCER_CARDS'
  | 'SHOW_LEFT_FENCER_CARDS'
  | 'SET_RIGHT_FENCER_SCORE'
  | 'RESET_RIGHT_FENCER_SCORE'
  | 'DECREASE_RIGHT_FENCER_SCORE'
  | 'INCREASE_RIGHT_FENCER_SCORE'
  | 'RESET_RIGHT_FENCER_DOUBLES'
  | 'DECREASE_RIGHT_FENCER_DOUBLES'
  | 'INCREASE_RIGHT_FENCER_DOUBLES'
  | 'RESET_RIGHT_FENCER_CARDS'
  | 'HIDE_RIGHT_FENCER_CARDS'
  | 'SHOW_RIGHT_FENCER_CARDS'
  | 'TOGGLE_LEFT_FENCER_YELLOW_CARD'
  | 'TOGGLE_LEFT_FENCER_RED_CARD'
  | 'TOGGLE_RIGHT_FENCER_YELLOW_CARD'
  | 'TOGGLE_RIGHT_FENCER_RED_CARD'
  | 'RESET_LEFT_FENCER'
  | 'RESET_RIGHT_FENCER'
