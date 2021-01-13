document.addEventListener("DOMContentLoaded", () => {
    const color = "#F9BE0A";
    const boxRadius = "15px";
    const circleRadius = "50%";
    const submit = document.getElementById("submit");
    const error = document.getElementById("error");
    const result = document.getElementById("shape");
    const width = document.getElementById("width");
    const height = document.getElementById("height");
    const box = document.getElementById("box");
    const circle = document.getElementById("circle");
    submit.onclick = (e) => {
        try {
            e.preventDefault();
            if (width.value <= 0 || width.value >= 800) {
                error.innerHTML = "Width is bigger than 0 and smaller than 800";
                return;
            } else if (height.value <= 0 || height.value >= 1000) {
                error.innerHTML =
                    "Height is bigger than 0 and smaller than 1000";
                return;
            }
            let radiusShape = "";
            if (box.checked) {
                radiusShape = boxRadius;
            } else if (circle.checked) {
                radiusShape = circleRadius;
            } else {
                error.innerHTML = "You must check on type shape";
                return;
            }
            error.innerHTML = "";
            result.style.height = height.value + "px";
            result.style.width = width.value + "px";
            result.style.backgroundColor = color;
            result.style.borderRadius = radiusShape;
        } catch (err) {
            error.innerHTML = "Can not draw your shape!";
        }
    };
});
