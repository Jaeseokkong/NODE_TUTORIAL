function deleteLead(leadId) {
    $.ajax({
        url: '/lead/' + leadId + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({leadId}),
        type: 'POST',
        success: ((res) => {
            console.log("Result : ", res);
            console.log("#"+leadId)
            $("#"+leadId).remove();
        }),
        error: ((error) => {
            console.log("Error: ", error);
        })
    })
}