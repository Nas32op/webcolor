//@Author 绫_N
red = true
t = -1
f = (x) => {
    ling = false
    for (i of x.childNodes) {
        if (i.nodeType == 3 && i.textContent.trim()) {
            ling = true
            break
        }
    }
    if (ling && x.textContent.trim()) {
        ot = (x.getBoundingClientRect().bottom + x.getBoundingClientRect().top) / 2 + window.scrollY
        if (Math.abs(ot - t) > 6) {
            t = ot
            red = !red
        }
        if (red) {
            color = 'rgb(255, 0, 0)'
        } else {
            color = 'rgb(0, 0, 255)'
        }
        x.style.color = color
        x.style.setProperty('color', color, 'important')
    }
    if (x.children)
        for (i of x.children)
            f(i)
}
go = () => {
    red = true
    t = -1
    f(document.getElementsByTagName('body')[0])
}
setInterval(go, 1000)
