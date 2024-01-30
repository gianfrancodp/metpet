
$(document).ready(function () { 
			
    // FETCHING DATA FROM JSON FILE 
    $.getJSON("TOR1.json",  
            function (data) { 
        var TABLEHTML = ''; 

        // ITERATING THROUGH OBJECTS 
        $.each(data, function (key, value) { 

            //CONSTRUCTION OF ROWS HAVING 
            // DATA FROM JSON OBJECT 
            TABLEHTML += '<tr>'; 
            TABLEHTML += '<td>' +  
                value.W + '</td>'; 

            TABLEHTML += '<td>' +  
                value.L + '</td>'; 

            TABLEHTML += '<td>' +  
                value.A + '</td>'; 

            TABLEHTML += '<td>' +  
                value.AsR + '</td>'; 

            TABLEHTML += '</tr>'; 
        }); 
            
        //INSERTING ROWS INTO TABLE  
        $('#table').append(TABLEHTML); 
    }); 
    });