import { SubtitlePhrase } from "./PhraseEngine";

export interface PhraseState {

  previousPhrase: SubtitlePhrase | null;

  currentPhrase: SubtitlePhrase | null;

  nextPhrase: SubtitlePhrase | null;

  currentWordIndex: number;

}

export function getPhraseState(

  phrases: SubtitlePhrase[],

  currentTime: number

): PhraseState {

  const currentPhraseIndex = phrases.findIndex(

    (phrase) =>

      currentTime >= phrase.start &&
      currentTime <= phrase.end

  );

  if (currentPhraseIndex < 0) {

    return {

      previousPhrase: null,

      currentPhrase: null,

      nextPhrase: null,

      currentWordIndex: -1,

    };

  }

  const currentPhrase =
    phrases[currentPhraseIndex];

  const previousPhrase =
    currentPhraseIndex > 0
      ? phrases[currentPhraseIndex - 1]
      : null;

  const nextPhrase =
    currentPhraseIndex <
    phrases.length - 1
      ? phrases[currentPhraseIndex + 1]
      : null;

  const currentWordIndex =
    currentPhrase.words.findIndex(

      (word) =>

        currentTime >= word.start &&
        currentTime <= word.end

    );

  return {

    previousPhrase,

    currentPhrase,

    nextPhrase,

    currentWordIndex,

  };

}