/*let generateImageForm = 
    document.getElementById('generate-image-form');
let formInput = 
    document.getElementById('input-value');
let imageContainerText = 
    document.getElementById('imageContainerText');
let imageGenerated = 
    document.getElementById('generated-image');
let imageContainer = 
    document.getElementById('images-visible');

async function fetchImages(category) {
    try {
        let response = 
        await fetch= (`https://api.example.com/images?category=${category})`;
        if (!response.ok) {
            throw new Error('Unable to fetch the data');
        }
        imageContainerText.innerText = 
        "Below is your generated Image:";
        imageContainer.style.display = "block";
        imageGenerated.src = response.url;
        console.log(response.url);
    }
    catch (error) {
        console.log(error);
    }
}

generateImageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let enteredText = formInput.value;
    if (enteredText !== "") {
        fetchImages(enteredText);
    }
    else {
        imageContainerText.innerText = 
            "Input field can not be empty!";
    }
}) 

    let generateImageForm = document.getElementById('generate-image-form');
    let formInput = document.getElementById('input-value');
    let imageContainerText = document.getElementById('imageContainerText');
    let imageGenerated = document.getElementById('generated-image');
    let imageContainer = document.getElementById('images-visible');

    async function fetchImages(category) {
        try {
           // let response = await fetch(`https://api.example.com/images?category=${category}`); https://www.google.co.in/imghp // Use your API here
           let response = await fetch('https://www.google.co.in/imghp'); 

           if (!response.ok) {
                throw new Error('Unable to fetch the data');
            }
            let data = await response.json(); // Assuming response is JSON
            imageContainerText.innerText = "Below is your generated Image:";
            imageContainer.style.display = "block";
            imageGenerated.src = data.imageUrl; // Use actual image URL key from API
            console.log(data.imageUrl);
        } catch (error) {
            console.log(error);
            imageContainerText.innerText = "Error generating image!";
        }
    }

    generateImageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let enteredText = formInput.value.trim();
        if (enteredText !== "") {
            fetchImages(enteredText);
        } else {
            imageContainerText.innerText = "Input field cannot be empty!";
        }
    }); */


    let generateImageForm = document.getElementById('generate-image-form');
    let formInput = document.getElementById('input-value');
    let imageContainerText = document.getElementById('imageContainerText');
    let imageGenerated = document.getElementById('generated-image');
    let imageContainer = document.getElementById('images-visible');

    async function fetchImages(category) {
        try {
            // Sample placeholder for image generation API
            let response = await fetch(`https://api.unsplash.com/photos/random?query=${category}&client_id=5h7mcfRBSg36aiXZsKfGtgVxVSH6alH0Krm9wTChk_o`);
            if (!response.ok) {
                throw new Error('Unable to fetch the image data');
            }

            let data = await response.json();
            imageContainerText.innerText = "Below is your generated image:";
            imageContainer.style.display = "block";
            imageGenerated.src = data.urls.regular; // Assuming Unsplash returns image URL in 'urls.regular'
            console.log(data.urls.regular);
        } catch (error) {
            console.error(error);
            imageContainerText.innerText = "Error fetching image!";
        }
    }

    generateImageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let enteredText = formInput.value.trim();
        if (enteredText !== "") {
            fetchImages(enteredText);
        } else {
            imageContainerText.innerText = "Input field cannot be empty!";
        }
    });
