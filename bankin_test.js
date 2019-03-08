let JSON = {};

const newHTML = `
    <div id="progress-bar"></div>
    <p class="question">Combien gagnez-vous chaque mois ?</p>
    <form id="earned-money" action="" method="">
        <input type="text" name="money" id="input-earned-money" autofocus />
        <input type="submit" value="Suivant" name="next" id="input_next" />
    </form>
    <p id="error"></p>`;


$('#accueil-button').on('click', function() {
    $('#main-wrap').empty()
                   .append(`${ newHTML }`);

    $( '#earned-money' ).on('submit', function( evt ) {
        evt.preventDefault();

        const newForm = `
            <form id="saved-money" action="" method="">
                <input type="text" name="money" id="input-saved-money" autofocus />
                <input type="submit" value="Suivant" name="next" id="input_next" />
            </form>`;

        // alert( "Handler for .submit() called." );

        // REGEX FOR VALIDATION :
        // const regex = /\d/;
        // const earnedMoney = form.elements.money.value;

        // if ( !regex.test( earnedMoney )) {
        //     $('#error').text('Votre montant est incorrect (somme ronde attendue)');
        // }

        // OBJET JSON :
        JSON.salary = $('#input-earned-money').val();    

        $('.question').text('Combien épargnez-vous chaque mois ?');
        $('#earned-money').replaceWith( newForm );


        $( '#saved-money' ).on('submit', function( evt ) {
            evt.preventDefault();

            // OBJET JSON :
            JSON.savings = $('#input-saved-money').val();

            $( '#saved-money' ).remove();
            $('.question').text('Vous devriez mettre de côté 15% de votre salaire tous les mois');

            const toSave = `${ JSON.salary * ( 15 / 100 )}`;

            const newHTML = `
                <table>
                    <tr>
                        <th>
                            Votre salaire
                        </th>
                        <th>
                            A mettre de côté tous les mois
                        </th>
                    </tr>

                    <tr>
                        <th>
                            ${ JSON.salary }
                        </th>
                        <th>
                            ${ toSave }
                        </th>
                    </tr>
                </table>

                <p class="question">Est-ce que cela vous paraît possible ? 
                    <br/>
                    <img src="Camembert_OPT.gif" alt="camembert statistiques" />
                </p>

                <div id="buttons-container">
                    <button>Oui</button>
                    <button>Non, pas encore</button>
                </div>
            `;

            $('#main-wrap').append(`${ newHTML }`);

        });
    });
});




