import { useEffect, useState } from "react";
import { fetchStates, parseStates } from "../Helpers/IbgeData";
import Dropdown from "../Dropdown";

export const BrazilianStates = ({id, name, onChange, editData, estado}) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetchStates().then(parseStates).then(setStates);
  }, []); 

  const dropdownOptions = {
    id: id,
    name: name,
    data: states,
    onChange: onChange,
    estado: estado
  }

  return (<Dropdown {...dropdownOptions} editData={editData}/>)
};
