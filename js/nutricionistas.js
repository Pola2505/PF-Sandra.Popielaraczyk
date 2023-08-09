const imprimirNutricionistas = () => {

    fetch('https://reqres.in/api/users?page=1')
        .then((res) => res.json())
        .then((res) => {

            console.log(res.data); //res = [array de nutricionistas]

            const nutricionistas = res.data;

            //PINTAR ESTOS DATOS (res) EN EL HTML.
            const lista = document.querySelector('#lista-nutricionistas');

            nutricionistas.forEach((nutricionista) => {

                let listItem = document.createElement('li');
                listItem.innerHTML = `
                    
                        <img class="nutri-imagen" src="${nutricionista.avatar}"/>
                        <h2 class="nutri-name">${nutricionista.first_name} ${nutricionista.last_name}</h2>
                        <span class="nutri-email">${nutricionista.email}</span>
                   
                `;
                lista.append(listItem);
            });

        })
        .catch((error) => console.log(error));

};

document.addEventListener('DOMContentLoaded', imprimirNutricionistas);
