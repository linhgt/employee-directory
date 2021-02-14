import React from "react";
import Tbody from "./Tbody";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

function Table(props){
    const element = <FontAwesomeIcon icon={faSort} />
    //initialize sortedResults variable
    const sortedResults = props.results;
    //This returns the property of an object
    const simplePropertyRetriever = function(obj) {
        return obj.name.first;
    };
    //Sort in ascending order
    const sortTrue = function (propertyRetriever, arr) {
        arr.sort(function (a, b) {
            const valueA = propertyRetriever(a);
            const valueB = propertyRetriever(b);
            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            } else {
                return 0;
            }
        });
    };

    if(props.sort === true){
        sortTrue(simplePropertyRetriever, sortedResults);
    } 
    //return a table
    return (
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Name <button className="btn btn-light" onClick={props.handleSort}>{element}</button></th>
            <th scope="col">Picture</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Location</th>
            </tr>
        </thead>
        <Tbody 
        results={sortedResults} key={sortedResults.email}
        />
        </table>
    );
}