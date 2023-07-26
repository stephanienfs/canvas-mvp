import React from "react";
import CanvasWidget from "./components/CanvasWidget";
import * as Styled from "./index.styles";

export default function DrawingTool() {
  const [outputImage, setOutputImage] = React.useState<string | null>(null);

  return (
    <Styled.DrawingTool>
      <Styled.CanvasContainer>
        <h2>You can draw on this Canvas</h2>
        <CanvasWidget setOutputImage={setOutputImage} />
      </Styled.CanvasContainer>
      <Styled.OutputContainer>
        <h2>Output</h2>
        {outputImage ? (
          <>
            <img src={outputImage} alt="Output" style={{ maxWidth: "100%" }} />
          </>
        ) : (
          <p>Waiting results..</p>
        )}
      </Styled.OutputContainer>
    </Styled.DrawingTool>
  );
}
