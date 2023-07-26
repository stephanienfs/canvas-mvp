import React from "react";
import CanvasWidget from "./components/CanvasWidget";

export default function DrawingTool() {
  const [outputImage, setOutputImage] = React.useState<string | null>(null);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <h2>Área de dibujo (lienzo)</h2>
          <CanvasWidget setOutputImage={setOutputImage} />
        </div>
        <div>
          <h2>Área de salida</h2>
          {outputImage ? (
            <>
              <img
                src={outputImage}
                alt="Output"
                style={{ maxWidth: "100%" }}
              />
            </>
          ) : (
            <p>Esperando resultado...</p>
          )}
        </div>
      </div>
    </div>
  );
}
