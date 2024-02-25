function insertData() {
    try {
        // get form values
        let title = document.getElementById('titleInput').value;
        let paragraph = document.getElementById('paragraphInput').value;
        let imageInput = document.getElementById('imageInput');

        // create data object
        const dataObject = {
            title: title,
            paragraph: paragraph,
            imageUrl: getImageUrl(imageInput)
        };

        // get existing data from storage
        var storedData = JSON.parse(localStorage.getItem('formData')) || [];

        // add new data to array
        storedData.push(dataObject);

        // save data to storage
        localStorage.setItem('formData', JSON.stringify(storedData));

        // clear for fields
        document.getElementById('myForm').reset();

        // show success message
        alert('Data inserted successfully');

    } catch (error) {
        
        // handle errors
        console.error('Error inserting Data: ',error);
        alert('Error inserting data. Please try again.');

    }

    // function to get image url
    function getImageUrl(input) {
        // logic to get image url form file input
        return '../upload/abc.png';
    }
}