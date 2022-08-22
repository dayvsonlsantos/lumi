//Style
import { Select } from "../StyleList/Style.List";

const Dropdown = ({ id, name, data=[], onChange, editData, estado }) => {
  return (
    <Select id={id} name={name} onChange={onChange} editData={editData} value={estado} required>
      {data.map(({ value, label }) => {
        return (<option key={value} value={value}>{label}</option>)
      })}
    </Select>
  );
};

export default Dropdown;
