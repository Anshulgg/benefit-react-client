import moment from 'moment' ;


export let convertTimestampToDate = (timestamp) => {
    // let date = new Date(timestamp);
    // return date.toString("dd MMM" )


    let date = moment(timestamp)
    return date.format("DD MMM YYYY hh:mm a")
};