//Diego Quintos Cabeza-21200625
document.addEventListener("DOMContentLoaded", function () {
    const redRange = document.getElementById("red");
    const greenRange = document.getElementById("green");
    const blueRange = document.getElementById("blue");

    const redInput = document.getElementById("red-input");
    const greenInput = document.getElementById("green-input");
    const blueInput = document.getElementById("blue-input");

    const colorPicker = document.getElementById("color-picker");
    const colorBox = document.getElementById("color-box");
    const hexCode = document.getElementById("hex-code");

    function rgbToHex(r, g, b) {
        return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
    }

    function updateColor() {
        const r = parseInt(redRange.value);
        const g = parseInt(greenRange.value);
        const b = parseInt(blueRange.value);

        const hex = rgbToHex(r, g, b);

        colorBox.style.backgroundColor = hex;
        hexCode.textContent = hex;
        colorPicker.value = hex;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function updateFromInput() {
        let r = Math.min(255, Math.max(0, parseInt(redInput.value) || 0));
        let g = Math.min(255, Math.max(0, parseInt(greenInput.value) || 0));
        let b = Math.min(255, Math.max(0, parseInt(blueInput.value) || 0));

        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;

        updateColor();
    }

    function updateFromColorPicker() {
        const hex = colorPicker.value;
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);

        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        colorBox.style.backgroundColor = hex;
        hexCode.textContent = hex;
    }

    redRange.addEventListener("input", updateColor);
    greenRange.addEventListener("input", updateColor);
    blueRange.addEventListener("input", updateColor);

    redInput.addEventListener("input", updateFromInput);
    greenInput.addEventListener("input", updateFromInput);
    blueInput.addEventListener("input", updateFromInput);

    colorPicker.addEventListener("input", updateFromColorPicker);

    updateColor();
});
