export interface SubtitleWord {
  word: string;
  start: number;
  end: number;
}

export interface SubtitleState {

  currentIndex:number;

  currentTime:number;

  previousWords:SubtitleWord[];

  currentWord:SubtitleWord | null;

  nextWords:SubtitleWord[];

}

export function getSubtitleState(

  subtitles:SubtitleWord[],

  currentTime:number

):SubtitleState{

  const currentIndex=

    subtitles.findIndex(

      (word)=>

        currentTime>=word.start&&

        currentTime<=word.end

    );

  return{

    currentIndex,

    currentTime,

    previousWords:

      currentIndex>0

      ?subtitles.slice(0,currentIndex)

      :[],

    currentWord:

      currentIndex>=0

      ?subtitles[currentIndex]

      :null,

    nextWords:

      currentIndex>=0

      ?subtitles.slice(currentIndex+1)

      :subtitles,

  };

}