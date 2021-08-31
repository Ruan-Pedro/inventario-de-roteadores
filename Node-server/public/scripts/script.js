
document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts()
})


function updatePosts(){
    fetch('http://localhost:5050/api/all').then(res=>{
        return res.json()
    }).then(json=>{
        
        let routerBars = ''
        let roteadores = JSON.parse(json)
        console.log(roteadores)
         roteadores.forEach(roteador => {
            let routerBar = `<div class="router-indicators">
            <ol class="router-card">
            <li>id</li>
            <li>nome</li>
            <li>Fabricante</li>
            <li>Garantia</li>
            <li>Suporte</li>
                </ol>
                <ol class="router-card">
                    <li>${roteador.id}</li>
                    <li>${roteador.nome}</li>
                    <li>${roteador.fabricante}</li>
                    <li>${roteador.garantia}</li>
                    <li>${roteador.suporte}</li>
                    </ol>
        </div>`
        routerBars += routerBar
         });
         document.getElementById('router-inserts').innerHTML = routerBars
    })
}
