import { groceryConstants } from '../_constants';
import { groceryService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const groceryActions = {
    add,
    register,
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
            );
    };

    function request(item) { return { type: groceryConstants.ADD_GROCERY_REQUEST, item } }
    function success(item) { return { type: groceryConstants.ADD_GROCERY_SUCCESS, item } }
    function failure(error) { return { type: groceryConstants.ADD_GROCERY_FAILURE, error } }
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        groceryService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: groceryConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: groceryConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: groceryConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        groceryService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: groceryConstants.GETALL_REQUEST } }
    function success(users) { return { type: groceryConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: groceryConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        groceryService.delete(id)
            .then(
                user => {
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: groceryConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: groceryConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: groceryConstants.DELETE_FAILURE, id, error } }
}