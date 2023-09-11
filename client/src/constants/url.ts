const API_URL = 'http://localhost:3003/';

export const TOKEN_KEY = "token";
// user
export const SIGNUP_ROUTE = API_URL + "guests/signUp";
export const LOGIN_ROUTE = API_URL + "guests/login";
export const GUEST_INFO_ROUTE = API_URL + "guests/GuestInfo";
export const CHECK_TOKEN = API_URL + "users/checkToken";
export const PRODUCTS_LIST_ROUTE = API_URL + "products/productsList";

// user cart requests
export const ADD_TO_CART_ROUTE = API_URL + "users/addToCart";
export const CHANGE_ITEM_AMOUNT_CART_ROUTE = API_URL + "users/changeItemAmount/";
export const DELETE_FROM_CART_ROUTE = API_URL + "users/deleteFromCart/";
export const RESET_CART_ROUTE = API_URL + "users/resetCart";

// user favorite guides requests
export const ADD_TO_FAVORITE_ROUTE = API_URL + "users/addToFavorite/";
export const DELETE_FROM_FAVORITE_ROUTE = API_URL + "users/deleteFromFavorite/"

// admin
export const GUESTS_LIST_REQ = API_URL + "guests/guestsList";
export const DELETE_USER_ROUTE = API_URL + "users/delete/";
export const CHANGE_USER_ROLE_ROUTE =API_URL + "users/changeRole/"
export const CHECK_ADMIN_TOKEN = API_URL + "guests/checkAdminToken";
export const ADD_PRODUCT_ROUTE = API_URL + "products/addProduct";
export const DELETE_PRODUCT_ROUTE =API_URL + "products/deleteProduct/"
export const EDIT_PRODUCT_ROUTE = API_URL + "products/editProduct/";
export const SET_PRODUCT_INSTOCK_ROUTE = API_URL + "products/setInStock/";

// orders
export const ORDERS_LIST_ROUTE = API_URL + "orders/ordersList";
export const NEW_ORDER_ROUTE = API_URL + "orders/newOrder";
export const DELETE_ORDER_ROUTE = API_URL + "orders/delete/";
export const CHANGE_ORDER_STATUS_ROUTE = API_URL + "orders/changeStatus/";

//meals
export const MEAL_LIST_ROUTE = API_URL + "meals/MealsList";
export const ADD_MEAL_ROUTE = API_URL + "meals/addMeal";


//events
export const EVENT_LIST_ROUTE = API_URL + "events/eventsList";
export const ADD_EVENT_ROUTE = API_URL + "events/addEvent";
