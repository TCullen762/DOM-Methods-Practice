//console.log('linked')


let main_div = document.createElement('main') //creates element
//let main_divText = 'Where the .....! is my link?'
//main_div.append(main_divText)



/*let imgElement = document.createElement('img')
imgElement.src = 'https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dinosaur.png'
let anchorElement = document.createElement('a')
anchorElement.href = 'https://google.com'*/

let imgElement = document.createElement('img')
imgElement.src = 'https://vhx.imgix.net/criterionchannelchartersu/assets/6d3d0ab1-77a0-4520-a6b4-b2703f80f78f-a81c655b.jpg?auto=format%2Ccompress&fit=crop&h=360&w=640'
main_div.append(imgElement)


let anchorElement = document.createElement('a')
anchorElement.href = 'https://www.groundzeromedia.org'
anchorElement.append ('Say what?')

main_div.append(anchorElement)
//main_div.append(anchorElement_text)




//remove button

let button = document.createElement('button')//create

button.append('Remove Element')


document.body.appendChild(button)

button.addEventListener("click", function(){
    //console.log('non event')
    main_div.remove('main')
})


// add button

let inputBox = document.createElement('input')
main_div.append(inputBox)

let boxLabel = document.createElement('label')
main_div.append(boxLabel)
boxLabel.append('Say something cheeky here')




let inputButton = document.createElement('button')

inputButton.append('Add Element')


document.body.appendChild (inputButton)

inputButton.addEventListener("click", function(){
    let div2 = document.createElement('div')
    main_div.append(div2)
 div2.append(inputBox.value)
})


//not working
let clearButton = document.createElement('button')

clearButton.append('clear input')


document.body.appendChild (clearButton)

clearButton.addEventListener("click", function(){
main_div.remove(div2)
//main_div.remove(inputBox.value)
    
})





document.body.appendChild(main_div)