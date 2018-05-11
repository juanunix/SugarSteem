document.addEventListener('DOMContentLoaded', () => {

  const vpSlider = document.getElementById('vp-slider');
  const vpSliderValue = document.getElementById('vp-slider-value');

  let currentSliderValue = 0;

  vpSlider.addEventListener('input', e => {
    const slider = e.target;
    const value = slider.value;
    const sliderPosition = value / 100;
    const pixelPosition = slider.clientWidth * sliderPosition;

    if (value !== currentSliderValue) {
      vpSliderValue.innerText = `${value}%`;

      vpSliderValue.style.left = `${pixelPosition}px`;

      currentSliderValue = parseInt(value);
    }
  });

  const triggerInitialInput = new Event('input');
  vpSlider.dispatchEvent(triggerInitialInput);

});
