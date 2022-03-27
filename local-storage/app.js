// const books = ['Bangla', 'English', 'Math', 'History', 'Bangla', 'English', 'Bangla', 'Math'];

// const bangla = books.filter(book => book === 'Bangla');
// const english = books.filter(book => book === 'English');
// console.log(bangla, english);


let db = {};


const showNameUI = (name) => {
    const container = document.getElementById('person-list');
    let h3 = document.createElement('h3');
    h3.innerText = name;
    container.appendChild(h3);
}

const exists = localStorage.getItem('person-tracker');
if(exists){
    const items = JSON.parse(exists);
    const persons = Object.keys(items);
    console.log(persons);
    // for(const person of persons){
    //     showNameUI(person);
    // }

    persons.forEach(person => showNameUI(person));
}

const cellToAction = () => {
    const name = document.getElementById('name').value;
    addToDB(name);
    document.getElementById('name').value = '';
}
document.getElementById('name').addEventListener('keyup', (event) => {
    const name = document.getElementById('name').value;
    if(event.keyCode === 13){
        addToDB(name)
        document.getElementById('name').value = '';
    }
})


const addToDB = item => {
    // db.amir = 1;
    // db['aksay'] = 1;
    // db[item] = 1;
    showNameUI(item);

    const storedPerson = localStorage.getItem('person-tracker');
    if(storedPerson){
        db = JSON.parse(storedPerson);
    }

    if(item in db){
        db[item] = db[item] + 1;
    }else{
        db[item] = 1;
    }

    localStorage.setItem('person-tracker', JSON.stringify(db));

}

