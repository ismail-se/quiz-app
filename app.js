const res = () => {
    let obtain = 0, per;
    const q1 = document.querySelector("input[name='q1']:checked").value
    const q2 = document.querySelector("input[name='q2']:checked").value
    const q3 = document.querySelector("input[name='q3']:checked").value
    const q4 = document.querySelector("input[name='q4']:checked").value
    let r = document.querySelector('.r')
    if(q1 == '3'){
        obtain += 1
    }
    if(q2 == '1'){
        obtain += 1
    }
    if(q3 == '2'){
        obtain += 1
    }
    if(q4 == '1'){
        obtain += 1
    }
    per = obtain*100/4;
    console.log(per);
    r.innerText = per + "%";
}