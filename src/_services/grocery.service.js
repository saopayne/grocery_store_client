export const groceryService = {
    add,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function add(name, quantity, unit) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ name, quantity, unit })
    };

    return fetch(`https://guarded-brook-31463.herokuapp.com/grocerylists/1/items/`, requestOptions)
        .then(handleResponse)
        .then(item => {
            if (item.token) {
                localStorage.setItem('groceryItem', JSON.stringify(item));
            }
            return item;
        });
}

function update(item) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    };

    return fetch(`https://guarded-brook-31463.herokuapp.com/grocerylists/1/items/${item.id}`, requestOptions)
        .then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`https://guarded-brook-31463.herokuapp.com/grocerylists/1/items/`, requestOptions)
        .then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        mode: 'no-cors'
    };

    return fetch(`https://guarded-brook-31463.herokuapp.com/grocerylists/1/items/${id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(`https://guarded-brook-31463.herokuapp.com/grocerylists/1/items/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`https://guarded-brook-31463.herokuapp.com/users/register`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}