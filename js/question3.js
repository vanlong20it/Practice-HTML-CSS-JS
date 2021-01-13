document.addEventListener("DOMContentLoaded", () => {
    const maxHeight = 500;
    const submit = document.getElementById("submit");
    const data = document.getElementById("data");
    const result = document.getElementById('result');
    submit.onclick = () => {
        try {
            result.innerHTML='';
            const arr = data.value.split(",");
            if(arr.length > 8){
                return;
            }
            const maxValue = Math.max(...arr);
            if(maxValue>500){
                return;
            }
            arr.forEach((item,index) => {
                result.insertAdjacentHTML('beforeend',`
                <div style="height:${item*maxHeight/maxValue}px" class="bar bar-${index}"><span class="number">${item}</span></div>`)
            });
        } catch (err) {
            console.log(err);
            return;
        }
    };
});
