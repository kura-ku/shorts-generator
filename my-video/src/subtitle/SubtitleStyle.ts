export const SubtitleStyle = {

  container: {

    maxWidth: 860,

    textAlign: "center" as const,

    fontSize: 66,

    fontWeight: "bold" as const,

    lineHeight: 1.25,

    display: "flex",

    flexWrap: "wrap" as const,

    justifyContent: "center",

    alignItems: "center",

    gap: 8,

  },

  currentWord: {

    color: "#FFD400",

    textShadow:

      "4px 4px 8px rgba(0,0,0,0.8)",

  },

  previousWord: {

    color: "#999999",

    textShadow:

      "4px 4px 8px rgba(0,0,0,0.8)",

  },

  nextWord: {

    color: "#FFFFFF",

    textShadow:

      "4px 4px 8px rgba(0,0,0,0.8)",

  },

};