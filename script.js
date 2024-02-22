document.addEventListener('DOMContentLoaded', ()=>{
    makeDiv();
    let items = document.querySelectorAll('.product')
    let cartBoxes = []
    let newBox;
    let selectedItems = [];
    let cartButton = document.querySelector('.cart-button')
    let contents = document.querySelector('.contents')
    
    class cartBox {
        constructor (newBoxBottom, newBoxLeft, item){
            this.bottom = newBoxBottom
            this.left = newBoxLeft
            this.visual = document.createElement('div')

            const visual = this.visual;
            visual.classList.add('addToCart')
            visual.style.left = this.left + 10 + 'px'
            visual.style.bottom = this.bottom - 10 + 'px'
            item.appendChild(visual)
        }
    }

    // console.log(items[0].clientHeight)
    function hover(){
        items.forEach(item =>{
            item.addEventListener('mouseenter', ()=>{
                item.classList.add('hover')
                let newBoxBottom = item.clientHeight
                let newBoxLeft = item.clientLeft
                newBox = new cartBox(newBoxBottom, newBoxLeft, item)
                cartBoxes.push(newBox)
                    // console.log(cartBoxes)
                    let addToCartButton = document.querySelectorAll('.addToCart')
    addToCartButton.forEach(item =>{
        item.addEventListener('click', ()=>{
            console.log('clicked')
            console.log(item.parentNode)
            selectedItems.push(item.parentNode)
        })
    })
                    
                })
                item.addEventListener('mouseout', ()=>{
                    item.classList.remove('hover')
                    item.removeChild(newBox.visual)
                    
                })
        })
    }
    
    cartButton.addEventListener('click', ()=>{
        let page = document.createElement('div')
        page.classList.add('cartPage')
        page.style.left = 0 +'px'
        page.style.bottom = 0 + 'px'
        
        
        if(contents.classList.contains('show')){
            contents.classList.remove('show')
            contents.removeChild(page)
        }else{
        contents.classList.add('show')
        contents.appendChild(page)
        console.log(selectedItems)
        selectedItems.forEach(item =>{
            console.log(item.visual)
        })
        }

    })

    function makeDiv(){
        document.querySelectorAll('img').forEach(image =>{
            let container = document.createElement('div')
            let main = document.querySelector('.products')
            container.classList.add('product')
            container.appendChild(image)
            main.appendChild(container)
        })
    }
    
    function start(){
        // makeDiv();
        hover();

    }
    start();
})