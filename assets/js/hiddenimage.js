function setupHiddenImage({ imageURL, position = { top: '50%', left: '50%' }, shouldDisappear = true, timeout = 150 }) {
  // Cria ou reutiliza o elemento
  let hiddenImage = document.getElementById('hidden-image');
  if (!hiddenImage) {
    hiddenImage = document.createElement('div');
    hiddenImage.id = 'hidden-image';
    hiddenImage.style.display = 'none';
    hiddenImage.style.position = 'fixed';
    hiddenImage.style.transform = 'translate(-50%, -50%)';
    hiddenImage.style.zIndex = '9999';

    const img = document.createElement('img');
    img.src = imageURL;
    img.alt = 'screenshot-protection';
    hiddenImage.appendChild(img);

    document.body.appendChild(hiddenImage);
  } else {
    // Se já existe, apenas atualiza imagem
    hiddenImage.querySelector('img').src = imageURL;
  }

  // Aplica posição customizada
  hiddenImage.style.top = position.top;
  hiddenImage.style.left = position.left;

  // Adiciona evento de PrintScreen
  document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
      hiddenImage.style.display = 'block';
      if (shouldDisappear) {
        setTimeout(() => {
          hiddenImage.style.display = 'none';
        }, timeout);
      }
    }
  });
}
