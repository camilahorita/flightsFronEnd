import './Form.css';
import {useState} from 'react';
import PassengerForm from '../PassengerForm/PassengerForm';

function Form({vector}) {

    var npeople = "0";
    var city = "São Paulo"
    var way = "oneway";
    var total = 0;
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);

    const handleChange = event => {
        var date = document.getElementById("datedeparture");
        date.max = event.target.value; 
        var arrive = document.getElementById("arriveflight");
        city = arrive.options[arrive.selectedIndex].text;
    };

    const handleChangePeople = event => {
        npeople = document.getElementById('numberpassengers').value;
        if (npeople == "0"){
            setIsShown(false);
            setIsShown2(false);
            setIsShown3(false);
        }
        if (npeople == "1"){
            setIsShown(true);
            setIsShown2(false);
            setIsShown3(false);
        }
        if (npeople == "2"){
            setIsShown(true);
            setIsShown2(true);
            setIsShown3(false);
        }
        if (npeople == "3"){
            setIsShown(true);
            setIsShown2(true);
            setIsShown3(true);
        }
     };

     const handleChangeWay= event => {
        way = event.target.value;
        console.log(way)
     };

     const handleClick = event => {
        var value = vector.find(val => val.arriveCity === city);
        console.log(value);
        total = value.priceGo;
        if (way === "roundtrip"){
            total = total + value.priceReturn;
        }
        console.log(total);
        var newElement = document.createElement("h3");
        newElement.innerHTML = total;
        document.getElementById("totalValue").appendChild(newElement);

     }
    return (
        <div className="box">
            <h3>Book Flights</h3>
            <form>
                <legend>Book a Flight</legend>
                <div class="input-wrapper">
                    <label for="departureflight">Departing from</label>
                    <select id="departureflight" className="form-control">
                    <option>Seville</option>
                    <option disabled >Madrid</option>
                    <option disabled>Barcelona</option>
                    </select>
                </div>
                <div class="input-wrapper">
                    <label for="arriveflight">Arriving at</label>
                    <select className="form-control" id="arriveflight" onChange={handleChange} >
                        {
                            vector.map((obj, index) => (
                                <option  value={obj.maxDate} id={obj.id} >{obj.arriveCity}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label>One-way<input type="radio" name="way" value="oneway" onChange={handleChangeWay} onClick={handleChangeWay} checked/></label>
                    <label>Round-trip<input type="radio" name="way" value="roundtrip" onClick={handleChangeWay} /></label>
                </div>
                <div className='dates'>
                    <div>
                        <label for ="datedeparture">Select a date of departure</label>
                        <input className="form-control" type="date" min="2022-10-21" max="2022-11-20" id="datedeparture" name="datedeparture"  placeholder="" required ></input>
                    </div>
                    <div>
                        <label for ="datereturn">Select a date of return</label>
                        <input  className="form-control" type="date" min="2022-10-21" max="2022-11-29" id="datedereturn" name="datereturn"  placeholder="" required ></input>
                    </div>
                </div>
                <div class="input-wrapper">
                    <label for="numberpassengers">Number of passengers</label>
                    <select name="people" onChange={handleChangePeople} className="form-control" id="numberpassengers">
                    <option>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>
                </div>
                {isShown && <PassengerForm />}
                {isShown2 && <PassengerForm />}
                {isShown3 && <PassengerForm />}
            </form>
            <button className="btn btn-primary" onClick={handleClick}> Submit </button>
            <div id="totalValue"></div>
        </div>

    )
};

export default Form;
