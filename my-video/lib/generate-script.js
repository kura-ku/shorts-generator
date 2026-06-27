function generateScript(topic) {

  return {
    metadata: {
      title: topic,
      topic: topic,
      description: "",
      tags: [
        "motivation",
        "success"
      ]
    },

    scenes: [

      {
        narration:
          `Most people believe ${topic}.`,
        animation: "talk",
        background: "office"
      },

      {
        narration:
          "But they are completely wrong.",
        animation: "explain",
        background: "city"
      },

      {
        narration:
          "Here is the real reason.",
        animation: "think",
        background: "room"
      },

      {
        narration:
          "Now you know the truth.",
        animation: "point",
        background: "studio"
      }

    ]
  };

}

module.exports = generateScript;