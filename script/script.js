

const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const nuvens = document.querySelector('.nuvens')
const div = document.querySelector('.play-again')
const botao = document.querySelector('.jogar')
var verifica = false


// Função para reiniciar o pipe
const resetPipe = () => {
    pipe.style.animation = ' pipe-animation 1.5s infinite linear'
};

const resetMario = ()=>{
    mario.src = './imagens/mario.gif'
    mario.style.width = '150px'
    mario.style.bottom = `0px`
    mario.style.marginLeft ='0px'
}


const jump = document.addEventListener('keydown',()=>{
    if(verifica)return
    {
        verifica = true
        mario.classList.add('jump')
    }
    setTimeout(() => {
        verifica = false
        mario.classList.remove('jump')
    }, 500);
})



const verificaColisao = setInterval(()=>{
    
    
    const pipePosiiton = pipe.offsetLeft;
    const marioPosition = (window.getComputedStyle(mario).bottom.replace('px', '')) 
    const nuvensPosition = nuvens.offsetLeft;
    
    if(pipePosiiton <= 120 && pipePosiiton > 0 && marioPosition < 120){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosiiton}px`
        mario.style.bottom = `${marioPosition}px`
        
        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft ='50px'
        
        nuvens.style.animationPlayState ='paused'
        nuvens.style.left= `${nuvensPosition}px`
        verifica =true
        
        
        div.style.display = 'flex'
        clearInterval(verificaColisao)
    }
}, 10)

botao.addEventListener('click', ()=>{
    resetPipe()
    resetMario()
    div.style.display = 'none'
    verifica = false    
    
})





