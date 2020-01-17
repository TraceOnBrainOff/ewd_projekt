var interpretFuncs = [ //Dane są w formacie tekstowym! Uzyj JSON.parse()!
    function(response) //Funkcja dla odpowiedzi ze strony z czystością powietrza
    {
        console.log(JSON.parse(response))
    },
    function(response) //Funkcja dla odpowiedzi ze strony z pogodą
    {
        console.log(JSON.parse(response))
    }
]