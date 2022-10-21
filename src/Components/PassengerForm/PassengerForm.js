import "./PassengerForm.css";

function PassengerForm (){
    return (
        <div>
            <form className="formPassenger">
            <div><label >First Name</label></div>
            <div><input className="form-control"  id="first_name" type="text"/></div>
            <div><label >Last Name</label></div>
            <div><input className="form-control"  id="last_name" type="text"/></div>
            <div class="input-wrapper">
                    <label for="numberpassengers">Number of passengers</label>
                    <select name="age" className="form-control" id="numberpassengers">
                    <option value="<2">Less than 2 years</option>
                    <option value="2-9">More than 2 but less than 9 years</option>
                    <option value="2-9">More than  9 years </option>
                    </select>
                </div>
            </form>
        </div>
    )
};

export default PassengerForm;