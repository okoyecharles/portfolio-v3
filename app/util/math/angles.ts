export function getAngleFromCenter(x: number, y: number, width = 300, height = 300) {
  const centerX = width / 2;
  const centerY = height / 2;
  // Translate point relative to center
  const dx = x - centerX;
  const dy = y - centerY;
  // atan2 normally starts at right (0°) and goes CCW
  // We swap dx/dy so 0° starts at top
  let angle = Math.atan2(dx, -dy) * (180 / Math.PI);
  // Convert negative angles to 0–360
  if (angle < 0) angle += 360;
  return angle;
}

export function getReverseAngleFromCenter(x: number, y: number, width = 300, height = 300) {
  const centerX = width / 2;
  const centerY = height / 2;
  // Translate point relative to center
  const dx = x - centerX;
  const dy = y - centerY;
  // atan2 normally starts at right (0°) and goes CCW
  // We swap dx/dy so 0° starts at top
  const angle = Math.atan2(-dx, dy) * (180 / Math.PI);
  return angle;
}
