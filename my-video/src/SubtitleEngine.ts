export interface SubtitleWord {
  word: string;
  start: number;
  end: number;
}

export interface SubtitleState {
  currentIndex: number;
  visibleWords: SubtitleWord[];
}

export function getSubtitleState(
  subtitles: SubtitleWord[],
  currentTime: number
): SubtitleState {

  const currentIndex = subtitles.findIndex(
    (word) =>
      currentTime >= word.start &&
      currentTime <= word.end
  );

  return {
    currentIndex,
    visibleWords: subtitles,
  };
}