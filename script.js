const movableBlock = document.getElementById('movable-block');
function handleMouseMove(event) {
  if (isDragging) {
    const newX = event.clientX - offsetX;
    const newY = event.clientY - offsetY;
    movableBlock.style.left = newX + 'px';
    movableBlock.style.top = newY + 'px';
  }
}
function handleMouseDown(event) {
  isDragging = true;
  offsetX = event.clientX - movableBlock.offsetLeft;
  offsetY = event.clientY - movableBlock.offsetTop;
  event.preventDefault();
}

function handleMouseUp() {
  isDragging = false;
}
movableBlock.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);