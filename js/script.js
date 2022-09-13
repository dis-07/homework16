const API_URL = 'https://jsonplaceholder.typicode.com/albums';

const getAlboms = async () => {
    let ul = document.createElement('ul');
    ul.className = 'albums';
    document.body.append(ul);

    ul.addEventListener('click', (event) => {
        const isRemoveButton = event.target.className === 'remove-btn';

        if (isRemoveButton) {
            const removeButton = event.target;
            const albumsTitle = removeButton.closest('.album_title');
            albumsTitle.remove();
        }
    })
    try {
        const responce = await fetch (API_URL);
        const data = await responce.json();
        data.forEach(item => {

            let li = document.createElement('li');
            li.className = 'album_title';
            li.innerHTML = item.title;
            ul.append(li);

            let button = document.createElement('button');
            button.innerHTML = 'remove';
            button.className = 'remove-btn';
            li.append(button);
        });
    }   catch (err) {
        console.error(err);
    }
}

getAlboms();