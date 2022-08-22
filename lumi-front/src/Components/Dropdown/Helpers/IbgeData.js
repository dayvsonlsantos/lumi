//https://servicodados.ibge.gov.br/api/v1/localidades/estados

const BASE_URL = "https://servicodados.ibge.gov.br/api/v1";

//Convertendo apra Json
const responseToJson = (response) => response.json();

//Ordenar, comparando item A com item B
const sortByLabelAsc = (a, b) => a.label.localeCompare(b.label);


export const fetchStates = () => {
  const url = `${BASE_URL}/localidades/estados`;
  return fetch(url).then(responseToJson);
};

export const parseStates = (states) => {
  const data = states
    .map((state) => ({ label: state.nome, value: state.sigla }))
    .sort(sortByLabelAsc);

  const defaultOption = {label: 'Selecione um estado', value: []}
  return [defaultOption, ...data]
};




export const fetchCitiesForState = (state) => {
  if (!state) return Promise.resolve([]); //Utilizado o Promise, pois em caso de array vazio, retornaria um erro devido ao .then
  const url = `${BASE_URL}/localidades/estados/${state}/municipios`;
  return fetch(url).then(responseToJson);
};


export const parseCities = (cities) => {
  const data = cities
    .map((city) => ({ label: city.nome, value: city.nome }))
    .sort(sortByLabelAsc)

  const defaultOption = {label: 'Selecione uma Cidade', value: []}
  return [defaultOption, ...data]
}
