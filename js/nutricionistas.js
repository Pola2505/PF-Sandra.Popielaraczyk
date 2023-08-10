// El uso de API externa y fetch

// Aca creamos una lista de nutricionistas con cuales el usuario se puede comunicar y si no se carga sale el mensaje en la pantalla

const imprimirNutricionistas = () => {

    fetch('https://reqres.in/api/users?page=1')
        .then((res) => res.json())
        .then((res) => {

            const nutricionistas = res.data;

            //Pintamos estos datos en HTML

            const lista = document.querySelector('#lista-nutricionistas');

            nutricionistas.forEach((nutricionista) => {

                let listItem = document.createElement('li');
                listItem.classList.add("list-item");
                listItem.innerHTML = `
                    
                        <img class="nutri-imagen" src="${nutricionista.avatar}"/>
                        <div class="nutri-detalles">
                        <h2 class="nutri-name">${nutricionista.first_name} ${nutricionista.last_name}</h2>
                        <span class="nutri-email">${nutricionista.email}</span>
                        </div>
                        
                `;
                lista.append(listItem);
            });

        })
        .catch(() => {
            const errorMessage = document.querySelector("#error-message");
            errorMessage.classList.remove("inactive");

});

};

document.addEventListener('DOMContentLoaded', imprimirNutricionistas);
