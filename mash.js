function mash(){
    return "You will live in a "+ getHouse()+ ", and you will have " + getChildrenCount()+ " kids, and you are a " + getJob() + "!";
}

console.log(mash());

function getHouse(){
    let house = ["Mansion", "Apartment", "Shack", "House", "Dog", "Box", "Someone's Cabinet", "Pineapple under the sea"];
    const place = process.argv [2];
    if (place == undefined || !isNaN(place)){
        throw "You need to put a home on the list!!"
    }
    house.push(place)
    let get = Math.random() * house.length;
    let gh = Math.floor(get);
    let gthos = house[gh];
    return gthos
}

function getChildrenCount(){
    const kids = process.argv[3]
    if (kids == undefined || isNaN(kids)){
        throw "You need to put how many kids you want on the list!!"
    }
    let startingnumber = Math.random();
    let times100 = startingnumber * 100;
    let numKids = Math.floor(times100);
    return numKids;
}

function getJob(){
    let job = ["Hobo", "Lawyer", "Doctor", "Stripper", "Engineer"]
    let work = Math.random() * job.length;
    let ad = Math.floor(work);
    let works = job[ad];
    return works
}