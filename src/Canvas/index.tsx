import React, { useState, useRef, useCallback, useEffect } from "react";

interface CanvasProps {
  setOutputImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const Canvas: React.FC<CanvasProps> = ({ setOutputImage }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvasContext = canvasRef.current.getContext("2d");
      if (canvasContext) {
        setContext(canvasContext);
      }
    }
  }, []);

  const startDrawing = useCallback(() => {
    if (context) {
      context.beginPath();
      setDrawing(true);
    }
  }, [context]);

  const stopDrawing = useCallback(() => {
    setDrawing(false);
    console.log("Stop drawing on mouse leave event");
  }, []);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      if (!drawing || !context) return;

      const { offsetX, offsetY } = event.nativeEvent;
      context.lineTo(offsetX, offsetY);
      context.stroke();
    },
    [drawing, context]
  );

  const clearCanvas = useCallback(() => {
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

  // Función para simular la llamada a la API y la demora utilizando debounce con setTimeout
  const simulateAPICall = useCallback(
    (data: string) => {
      // Simulamos una demora de 1000ms utilizando setTimeout
      const delay = 4000;
      setTimeout(() => {
        // Aquí estaría la llamada real a la API con 'data' como el dibujo del usuario
        // Por ahora, solo simulamos la respuesta de la API con un tiempo de demora
        console.log("Simulating API call with data:", data);
        console.log("Received response from API.");

        // Aquí puedes actualizar el estado con la imagen devuelta por la API y mostrarla en la ventana de salida
        // Por ahora, solo mostramos una imagen aleatoria generada por la API para ilustrar
        const randomImageURL = `https://random.imagecdn.app/500/500?${Date.now()}`;
        setOutputImage(randomImageURL);
      }, delay);
    },
    [setOutputImage]
  );

  const handleMouseUp = useCallback(() => {
    console.log("On mouse up event");
    if (drawing && context) {
      context.closePath();
      setDrawing(false);

      // Obtenemos el contenido del canvas como una imagen base64
      const canvasData = canvasRef.current?.toDataURL();

      // Cancelamos el temporizador anterior
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Llamamos a la API solo si se dibujó algo después de 4 segundos
      if (canvasData) {
        timeoutRef.current = window.setTimeout(() => {
          simulateAPICall(canvasData);
        }, 4000);
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
      <button onClick={clearCanvas}>Limpiar dibujo</button>
    </div>
  );
};

const DrawingTool: React.FC = () => {
  const [outputImage, setOutputImage] = useState<string | null>(null);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <h2>Área de dibujo (lienzo)</h2>
          <Canvas setOutputImage={setOutputImage} />
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
};

export default DrawingTool;
