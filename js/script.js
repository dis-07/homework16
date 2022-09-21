const API_URL = 'https://jsonplaceholder.typicode.com/albums';

const getAlboms = async () => {
    try {
        const responce = await fetch (API_URL);
        let data = await responce.json();
        return data;
    }   catch (err) {
        console.error(err);
    }
}

let ul = document.createElement('ul');
ul.className = 'albums';
document.body.append(ul);

const createAlbums = async () => {
    let title = await getAlboms();

    title.forEach(item => {
        let li = document.createElement('li');
        li.className = 'album_title';
        li.innerHTML = item.title;
        ul.append(li);

        let button = document.createElement('button');
        button.className = 'remove-btn';
        li.append(button);
        button.innerHTML = 'remove';
    })
}

ul.addEventListener('click', (event) => {
    const isRemoveButton = event.target.className === 'remove-btn';

    if (isRemoveButton) {
        const removeButton = event.target;
        const albumsTitle = removeButton.closest('.album_title');
        albumsTitle.remove();
    }
})

createAlbums();