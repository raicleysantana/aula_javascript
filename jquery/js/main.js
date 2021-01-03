function consultaCEP() {
    var cep = $("input[name='cep']").val();

    $(".progress-bar").show();

    $.ajax({
        url: 'https://viacep.com.br/ws/' + cep + '/json',
        type: 'GET',
        success: (response) => {
            $(".dados").html("");
            $(".progress-bar").fadeOut(1000);
            $(".dados").append(`<td>${response.uf}</td>`);
            $(".dados").append(`<td>${response.logradouro}</td>`);
            $(".dados").append(`<td>${response.bairro}</td>`);
            $(".dados").append(`<td>${response.localidade}</td>`);
            $(".dados").append(`<td>${response.ibge}</td>`);

        }
    });
}