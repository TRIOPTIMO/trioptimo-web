// src/components/VantaGradientBackground.jsx
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function VantaGradientBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
    script.async = true;
    script.onload = () => {
      if (!vantaEffect && window.VANTA && vantaRef.current) {
        setVantaEffect(
          window.VANTA.NET({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x00bfff,             // LÍNEAS AZULES 🔵
            backgroundColor: 0x000,   // FONDO OSCURO OTRA OPCION VIOLETA: 0X581845
          })
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        top: 0,
        left: 0,
        overflow: 'hidden',
        opacity: 0.2,
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(195, 0, 255, 0.15) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />
    </div>
  );
}
