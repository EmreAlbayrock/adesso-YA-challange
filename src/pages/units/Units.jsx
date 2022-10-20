import "./units.scss"
import { Link } from 'react-router-dom';
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { changeFoodCheckState } from "../../redux/foodCheckSlice";
import { changeWoodCheckState } from "../../redux/woodCheckSlice";
import { changeGoldCheckState } from "../../redux/goldCheckSlice";
import { changeSelectedAge } from "../../redux/selectedAgeSlice";
import { changeSelectedData } from "../../redux/selectedDataSlice";
import { changeInputData } from "../../redux/inputDataSlice";
import { getUnitsFetch } from "../../redux/unitsSlice";

export default function Units() {
    const units = useSelector(state => state.units.units)
    const dispatch = useDispatch()
    const ageList = ["All", "Dark", "Feudal", "Castle", "Imperial"]
    const selectedAge = useSelector(state => state.selectedAge.value)
    const selectedData = useSelector(state => state.selectedData.value)
    const inputData = useSelector(state => state.inputData.value)
    const foodCheck = useSelector(state => state.foodCheck.value)
    const woodCheck = useSelector(state => state.woodCheck.value)
    const goldCheck = useSelector(state => state.goldCheck.value)

    useEffect(() => {
        dispatch(getUnitsFetch())
    }, [dispatch])

    useEffect(() => {
        let data;
        if (selectedAge === "All") {
            data = units.units || []
        } else {
            data = units.units.filter(unit => unit.age === selectedAge)
        }
        if (foodCheck) data = filterByCostRange("Food", inputData.minFood, inputData.maxFood, data)
        if (woodCheck) data = filterByCostRange("Wood", inputData.minWood, inputData.maxWood, data)
        if (goldCheck) data = filterByCostRange("Gold", inputData.minGold, inputData.maxGold, data)
        dispatch(changeSelectedData(data))
    }, [selectedAge, inputData, foodCheck, woodCheck, goldCheck, dispatch, units])

    function filterByCostRange(costType, minCost, maxCost, data) {
        return data.filter(unit => (unit.cost?.[costType] && unit.cost?.[costType] >= minCost && unit.cost?.[costType] <= maxCost) || (!unit.cost?.[costType] && minCost === 0))
    }

    function handleChange(event) {
        const payload = {
            ...inputData,
            [event.target.name]: event.target.value <= 0 ? 0 : event.target.value >= 200 ? 200 : Number(event.target.value)
        }
        dispatch(changeInputData(payload))
    }

  return (
    <div className="units">
        <h1>Units</h1>
        <div className="units-container">
            <div className="left">
                <div className="age-filter">
                    <h3>Age Filter</h3>
                    <ul className="ages">
                        {ageList.map((item, index) => (
                            <li 
                                key={index}
                                className={selectedAge === item ? "age-item active" : "age-item"} 
                                onClick={() => dispatch(changeSelectedAge(item))}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <hr className="break"/>
                <div className="cost-filter">
                    <h3>Cost Filter</h3>
                    <div className="costs-container">
                        <div className="costs-left">
                            <h5>Resources</h5>
                            <ul className="resources-container">
                                <li onClick={() => dispatch(changeFoodCheckState())} className={!foodCheck ? "resource-item" : "resource-item active"}>Food</li>
                                <li onClick={() => dispatch(changeWoodCheckState())} className={!woodCheck ? "resource-item" : "resource-item active"}>Wood</li>
                                <li onClick={() => dispatch(changeGoldCheckState())} className={!goldCheck ? "resource-item" : "resource-item active"}>Gold</li>
                            </ul>
                        </div>
                        <div className="costs-right">
                            <h5>Amount (min - max)</h5>
                            <div className="input-container">
                                <input className={!foodCheck ? "disabled" : ""} disabled={!foodCheck} onChange={handleChange} name="minFood" value={inputData.minFood} type="number" />
                                    <span>-</span>
                                <input className={!foodCheck ? "disabled" : ""} disabled={!foodCheck} onChange={handleChange} name="maxFood" value={inputData.maxFood} type="number" />
                            </div>
                            <div className="input-container">
                                <input className={!woodCheck ? "disabled" : ""} disabled={!woodCheck} onChange={handleChange} name="minWood" value={inputData.minWood} type="number" />
                                    <span>-</span>
                                <input className={!woodCheck ? "disabled" : ""} disabled={!woodCheck} onChange={handleChange} name="maxWood" value={inputData.maxWood} type="number" />
                            </div>
                            <div className="input-container">
                                <input className={!goldCheck ? "disabled" : ""} disabled={!goldCheck} onChange={handleChange} name="minGold" value={inputData.minGold} type="number" />
                                    <span>-</span>
                                <input className={!goldCheck ? "disabled" : ""} disabled={!goldCheck} onChange={handleChange} name="maxGold" value={inputData.maxGold} type="number" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <table className="units-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Costs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedData.map(unit => (
                            <tr key={unit.id}>
                                <td>{unit.id}</td>
                                <td><Link to={`unit/${unit.id}`}>{unit.name}</Link></td>
                                <td>{unit.age}</td>
                                <td><span>Food: {unit.cost?.Food || "-"}</span> <span>Wood: {unit.cost?.Wood || "-"}</span> <span>Gold: {unit.cost?.Gold || "-"}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
