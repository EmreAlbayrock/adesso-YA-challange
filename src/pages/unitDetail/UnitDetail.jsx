import "./unitDetail.scss"
import Data from "../../data/age-of-empires-units.json"
import { useParams } from "react-router-dom"


export default function UnitDetail() {
  const { id } = useParams();
  const thisUnit = Data.units.find(unit => unit.id === Number(id))

  return (
    <div className="unitDetail">
        <h2 className="unitName">{thisUnit.name}</h2>
        <div className="unitContainer">
            <div className="left">
                <p>Description: <span className="unitInfo">{thisUnit.description || "-"}</span></p>
                <p>Expansion: <span className="unitInfo">{thisUnit.expansion || "-"}</span></p>
                <p>Unit ID: <span className="unitInfo">{thisUnit.id || "-"}</span></p>
                <p>Age: <span className="unitInfo">{thisUnit.age || "-"}</span></p>
                <p>Food Cost: <span className="unitInfo">{thisUnit.cost?.Food || "-"}</span></p>
                <p>Wood Cost: <span className="unitInfo">{thisUnit.cost?.Wood || "-"}</span></p>
                <p>Gold Cost: <span className="unitInfo">{thisUnit.cost?.Gold || "-"}</span></p>
            </div>
            <div className="right">
                <p>Build Time: <span className="unitInfo">{thisUnit.build_time || "-"}</span></p>
                <p>Reload Time: <span className="unitInfo">{thisUnit.reload_time || "-"}</span></p>
                <p>Attack Delay: <span className="unitInfo">{thisUnit.attack_delay || "-"}</span></p>
                <p>Movement Rate: <span className="unitInfo">{thisUnit.movement_rate || "-"}</span></p>
                <p>Line of Sight: <span className="unitInfo">{thisUnit.line_of_sight || "-"}</span></p>
                <p>Hit Points: <span className="unitInfo">{thisUnit.hit_points || "-"}</span></p>
                <p>Range: <span className="unitInfo">{thisUnit.range || "-"}</span></p>
                <p>Attack: <span className="unitInfo">{thisUnit.attack || "-"}</span></p>
                <p>Armor: <span className="unitInfo">{thisUnit.armor || "-"}</span></p>
                <p>Accuracy: <span className="unitInfo">{thisUnit.accuracy || "-"}</span></p>
            </div>
        </div>
    </div>
  )
}
