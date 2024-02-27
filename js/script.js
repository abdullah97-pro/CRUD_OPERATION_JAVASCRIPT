function insertData() {
    try {
        // get form values
        let title = document.getElementById('titleInput').value;
        let paragraph = document.getElementById('paragraphInput').value;
        let imageInput = document.getElementById('imageInput');

        // convert image to data URL
        let reader = new FileReader();
        reader.onload = function(event) {
            // create data object with data URL
            const dataObject = {
                title: title,
                paragraph: paragraph,
                imageUrl: event.target.result
            };

            // get existing data from storage
            var storedData = JSON.parse(localStorage.getItem('formData')) || [];

            // add new data to array
            storedData.push(dataObject);

            localStorage.clear();
            // save data to storage
            localStorage.setItem('formData', JSON.stringify(storedData));

            // clear form fields
            document.getElementById('myForm').reset();

            // show success message
            alert('Data inserted successfully');
        };

        // read the image file as data URL
        reader.readAsDataURL(imageInput.files[0]);

    } catch (error) {
        // handle errors
        console.error('Error inserting Data: ', error);
        alert('Error inserting data. Please try again.');
    }
}

// function to read data
function readData() {
    try {
        // get data from storage
        var storedData = JSON.parse(localStorage.getItem('formData')) || [];

        // display data
        var dataDisplay = document.getElementById('dataDisplay');
        dataDisplay.innerHTML = '';

        storedData.forEach(function (data) {
            var div = document.createElement('div');
            div.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.paragraph}</p>
            <img src="${data.imageUrl}">
            `;

            dataDisplay.appendChild(div);
        });

        // show success message
        alert("Data read successfully");
    } catch (error) {
        // handle error
        console.error('Error reading data: ', error);
        alert("Error reading data, please try again");
    }
}