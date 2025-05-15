import React, { useEffect, useRef } from 'react';

const AnimatedGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    const resizeCanvas = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      ctx.scale(scale, scale);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };

    const drawGrid = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 50; // Increased grid size
      const lineWidth = 1;
      
      // Create gradient for lines
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.15)'); // Purple with increased opacity
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.15)'); // Blue with increased opacity
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth;

      // Offset based on time for animation
      const offset = (timestamp / 50) % gridSize; // Slower animation

      // Draw vertical lines
      for (let x = offset - gridSize; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x - gridSize/2, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = offset - gridSize; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y - gridSize/2);
        ctx.stroke();
      }

      // Draw diagonal lines (left to right)
      for (let pos = offset - gridSize * 2; pos < canvas.width + canvas.height; pos += gridSize) {
        ctx.beginPath();
        ctx.moveTo(pos, 0);
        ctx.lineTo(pos + gridSize, canvas.height);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawGrid(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full -z-10 opacity-90"
    />
  );
};

export default AnimatedGrid;