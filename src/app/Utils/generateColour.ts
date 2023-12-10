export function generatePastelColor() {
  // Definindo intervalos mínimos e máximos para os valores RGB
  const minRGB = 100; // Evita cores muito escuras
  const maxRGB = 256; // Máximo para valores RGB

  // Gerar componentes de cor aleatória dentro dos intervalos definidos
  let red = Math.floor(Math.random() * (maxRGB - minRGB) + minRGB);
  let green = Math.floor(Math.random() * (maxRGB - minRGB) + minRGB);
  let blue = Math.floor(Math.random() * (maxRGB - minRGB) + minRGB);

  // Opacidade (alpha) - mantendo-a relativamente alta
  let alpha = Math.random().toFixed(2);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
