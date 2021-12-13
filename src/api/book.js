import { BASE_PATH } from "../utils/constants";

export async function getLastBooks(){

    try {
        const url = `${BASE_PATH}/new`;
        const response =await fetch(url);
        const result = await response.json();
        return result;
        
    } catch (error) {
        console.log(error);
        return null;
    } 
};

export async function getBooks(title){

    try {
        const url = `${BASE_PATH}/search/${title}`;
        const response =await fetch(url);
        const result = await response.json();
        return result;
        
    } catch (error) {
        console.log(error);
        return null;
    } 
};

export async function getBookId(Isbn13){
    try {
        const url = `${BASE_PATH}/books/${Isbn13}`;
        const response =await fetch(url);
        const result = await response.json();
        return result;
        
    } catch (error) {
        console.log(error);
        return null;
    } 
};