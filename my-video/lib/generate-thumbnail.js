const { execSync } = require("child_process");

function generateThumbnail(episode){

    console.log("Generating thumbnail...");

    execSync(

`npx remotion still src/index.ts MyComp publish/${episode}/thumbnail.png --props='{"thumbnail":true}'`,

    {
        stdio:"inherit",
    }

    );

    console.log("Thumbnail completed");

}

module.exports=generateThumbnail;