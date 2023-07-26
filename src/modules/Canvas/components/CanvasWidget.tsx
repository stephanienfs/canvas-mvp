import React from "react";
interface CanvasWidgetProps {
  setOutputImage: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function CanvasWidget({ setOutputImage }: CanvasWidgetProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = React.useState(false);
  const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(
    null
  );
  const timerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      const canvasContext = canvasRef.current.getContext("2d");
      if (canvasContext) {
        setContext(canvasContext);
      }
    }
  }, []);

  const startDrawing = React.useCallback(() => {
    if (context) {
      context.beginPath();
      setDrawing(true);
    }
  }, [context]);

  const stopDrawing = React.useCallback(() => {
    setDrawing(false);
  }, []);

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      if (!drawing || !context) return;

      const { offsetX, offsetY } = event.nativeEvent;
      context.lineTo(offsetX, offsetY);
      context.stroke();
    },
    [drawing, context]
  );

  const clearCanvas = React.useCallback(() => {
    if (context && canvasRef.current) {
      context.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      setOutputImage(null); // Limpiar la salida si se limpia el canvas
    }
  }, [context, setOutputImage]);

  const simulateAPICall = () => {
    const randomImageURL = `https://random.imagecdn.app/500/500?${Date.now()}`;
    setOutputImage(randomImageURL);
  };

  const handleMouseUp = React.useCallback(() => {
    console.log("On mouse up event");
    if (drawing && context) {
      context.closePath();
      setDrawing(false);

      const canvasData = canvasRef.current?.toDataURL();

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      if (canvasData) {
        timerRef.current = window.setTimeout(() => {
          simulateAPICall();
        }, 3000);
      }
    }
  }, [drawing, context, simulateAPICall]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseUp={handleMouseUp}
        onMouseLeave={stopDrawing}
        onMouseMove={handleMouseMove}
        style={{ border: "1px solid black" }}
      />
      <button onClick={clearCanvas}>Clean it!</button>
    </div>
  );
}
