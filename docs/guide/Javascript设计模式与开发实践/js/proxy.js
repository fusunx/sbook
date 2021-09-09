function myImage() {
    const imgNode = document.createElement('img')
    const proxyImg = new Proxy(imgNode, {
        set(obj, key, value) {
            if(key === 'src') {
                const img = new Image
                img.src = value
                obj[key] = 'loading.jpg'
                console.log('start', obj);
                img.onload = function() {
                    obj[key] = value
                    console.log('onload', obj);
                }
            }
        }
    })
    return proxyImg
}

const proxyImg = myImage()
proxyImg.src = 'xxx.png'
