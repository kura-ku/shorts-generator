import { SubtitleWord } from "./SubtitleEngine";

export interface SubtitlePhrase {
  text: string;
  start: number;
  end: number;
  words: SubtitleWord[];
}

export function buildPhrases(
  words: SubtitleWord[],
  maxWords = 4,
  maxCharacters = 22
): SubtitlePhrase[] {

  const phrases: SubtitlePhrase[] = [];

  let currentWords: SubtitleWord[] = [];
  let currentLength = 0;

  for (const word of words) {

    const nextLength =
      currentLength +
      word.word.length +
      (currentWords.length > 0 ? 1 : 0);

    const shouldBreak =
      currentWords.length >= maxWords ||
      nextLength > maxCharacters;

    if (shouldBreak && currentWords.length > 0) {

      phrases.push({

        text: currentWords
          .map(w => w.word)
          .join(" "),

        start: currentWords[0].start,

        end:
          currentWords[
            currentWords.length - 1
          ].end,

        words: [...currentWords],

      });

      currentWords = [];
      currentLength = 0;

    }

    currentWords.push(word);

    currentLength +=
      word.word.length +
      (currentWords.length > 1 ? 1 : 0);

  }

  if (currentWords.length > 0) {

    phrases.push({

      text: currentWords
        .map(w => w.word)
        .join(" "),

      start: currentWords[0].start,

      end:
        currentWords[
          currentWords.length - 1
        ].end,

      words: [...currentWords],

    });

  }

  return phrases;

}