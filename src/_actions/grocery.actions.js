import { groceryConstants } from '../_constants';
import { groceryService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const groceryActions = {
    add,
    update,
    getAll,
    delete: _delete
};

function add(name, quantity, unit) {
    return dispatch => {
        dispatch(request({ name }));
        groceryService.add(name, quantity, unit)
            .then(
                item => {
                    dispatch(success(item));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
            .catch(e => {
                dispatch(alertActions.error(e));
            })
    };

    function request(item) { return { type: groceryConstants.ADD_GROCERY_REQUEST, item } }
    function success(item) { return { type: groceryConstants.ADD_GROCERY_SUCCESS, item } }
    function failure(error) { return { type: groceryConstants.ADD_GROCERY_FAILURE, error } }
}

function update(item) {
    return dispatch => {
        dispatch(request({ item }));
        groceryService.update(item)
            .then(
                item => {
                    dispatch(success(item));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
            .catch(e => {
                dispatch(alertActions.error(e));
            })
    };

    function request(item) { return { type: groceryConstants.EDIT_GROCERY_REQUEST, item } }
    function success(item) { return { type: groceryConstants.EDIT_GROCERY_SUCCESS, item } }
    function failure(error) { return { type: groceryConstants.EDIT_GROCERY_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        groceryService.getAll()
            .then(
                items => {
                    dispatch(success(items));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
            .catch(e => {
                dispatch(alertActions.error(e));
        })
    };

    function success(items) {
        return { type: 'GET_ALL', items }
    }
    function failure(error) { return { type: groceryConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        groceryService.delete(id)
            .then(
                item => {
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            )
            .catch(e => {
                dispatch(alertActions.error(e));
            })
    };

    function success(id) {
        return {type: groceryConstants.DELETE_SUCCESS, id}
    }

    function failure(id, error) {
        return {type: groceryConstants.DELETE_FAILURE, id, error}
    }
}
