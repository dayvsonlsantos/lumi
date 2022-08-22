import { useEffect, useState } from "react";
import { fetchCitiesForState, parseCities } from "../Helpers/IbgeData";
import Dropdown from "../Dropdown";

export const BrazilianCities = ({state, id, name, onChange, editData, estado}) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCitiesForState(state).then(parseCities).then((cities) => {
      setCities(cities);
    });
  }, [state]);

  const dropdownOptions = {
    id: id,
    name: name,
    data: cities,
    onChange: onChange,
    estado: estado
  }

  return (<Dropdown {...dropdownOptions} editData={editData}/>)
};
