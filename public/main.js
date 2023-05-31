const btn = document.getElementById("download-button");

let intervalId;

// button events
let buttonHovered = false;
btn.onmouseover = () => (buttonHovered = true);
btn.onmouseleave = () => (buttonHovered = false);

btn.onclick = () => {
    clearInterval(intervalId);
    btn.style.backgroundImage = "";
    btn.classList.add("clicked");
};
// \button events

// button style
let rotationDegrees = 0.0;
let color = {
    r: 0xab,
    g: 0x00,
    b: 0xef,

    toString() {
        return `#${toHex(this.r)}${toHex(this.g)}${toHex(this.b)}`;
    },
};
let additor = {
    r: 2,
    g: 3,
    b: 1,
};
// \button style

intervalId = setInterval(() => {
    const speed = buttonHovered ? 3 : 1;
    rotationDegrees += 1 * speed;

    if (color.r >= 0xff || color.r <= 0x00) additor.r *= -1;
    color.r += additor.r * speed;

    if (color.g >= 0xff || color.g <= 0x00) additor.g *= -1;
    color.g += additor.g * speed;

    if (color.b >= 0xff || color.b <= 0x00) additor.b *= -1;
    color.b += additor.b * speed;

    btn.style.backgroundImage = `linear-gradient(${rotationDegrees}deg, #ccc, ${color})`;
}, 10);

function toHex(n) {
    const hex = n.toString(16);
    return hex.length < 2 ? "0" + hex : hex;
}
