import React, { useEffect, useState } from "react";

//Validação do CPF
import CPF from "cpf-check";

//Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Componentes
import {
  Label,
  Submit,
  ProfileSectionBG,
  FormBottom,
  InputGroup,
  DivInput,
} from "./Style.CardUser";
import CardInput from "./CardInput/CardInput";
import { BrazilianStates } from "../Dropdown/BrazilianStates/BrazilianStates";
import { BrazilianCities } from "../Dropdown/BrazilianCities/BrazilianCities";
import { Select } from "../StyleList/Style.List";
import TextCounter from "../TextCounter/TextCounter";

//Modal
import ChangePassword from "../Modal/Password/ChangePassword/ChangePassword";
import Logout from "../Modal/Logout";

//Serviços
import servicos from "../ServicosList/servicos.json";

//Axios
import { axiosInstance } from "../../service/axios";
import { calculaIdade } from "../Validate";

function CardUser({setReady}) {
  
  const [toggleButtonOption, setToggleButtonOption] = useState("false");

  function changeToggleButton(e) {
    if (toggleButtonOption === "true") {
      setToggleButtonOption("false");
      setData({
        ...data,
        [e.target.toggleButton]: (e.target.value = "false"),
      });
    } else {
      setToggleButtonOption("true");
      setData({
        ...data,
        [e.target.toggleButton]: (e.target.value = "true"),
      });
    }
  }


  //Dados
  const [data, setData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
    userCPF: "",
    userDTNasc: "",
    userPhone: "",
    toggleButton: toggleButtonOption,
    userServico: "",
    userServDescricao: "",
    userServModalidade: "",
    userCity: "",
    userState: "",
  });

  const inputs = [
    {
      id: "userFirstName",
      name: "userFirstName",
      type: "text",
      errorMessage:
        "Nome deve possuir 3-16 caracteres e não pode conter caracteres especiais.",
      label: "Nome",
      required: true,
      pattern: "^[A-Za-z ]{3,16}$",
    },
    {
      id: "userLastName",
      name: "userLastName",
      type: "text",
      errorMessage:
        "Sobrenome deve possuir 3-45 caracteres e não pode conter caracteres especiais.",
      label: "Sobrenome",
      required: true,
      pattern: "^[A-Za-z ]{3,45}$",
    },
    {
      id: "userCPF",
      name: "userCPF",
      type: "text",
      errorMessage:
        "O CPF deve conter 11 caracteres, sendo informado apenas os números",
      label: "CPF",
      pattern: "^[0-9]{11}$",
      required: true,
    },
    {
      id: "userDTNasc",
      name: "userDTNasc",
      type: "date",
      errorMessage: "Informe sua data de nascimento",
      label: "Data de Nascimento",
      required: true,
    },
    {
      id: "userPhone",
      name: "userPhone",
      type: "text",
      errorMessage:
        "O telefone deve conter 11 caracteres, sendo informado apenas os números",
      label: "Telefone",
      required: true,
      pattern: "^[0-9]{11}$",
    },   
    {
      id: "userEmail",
      name: "userEmail",
      type: "email",
      errorMessage: "Esse não é um endereço de e-mail válido!",
      label: "E-mail",
      required: true,
    },
    {
      id: "userPassword",
      name: "userPassword",
      type: "password",
      errorMessage:
        "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
      label: "Senha",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
    },
    {
      id: "toggleButton",
      name: "toggleButton",
      type: "checkbox",
      label: "Prestar serviço ?",
    },
  ];


  //*Manipulação de dados
    const [editData, setEditData] = useState("none");
    const [editDataOp, setEditDataOp] = useState("auto"); //*usado em alterar senha

        //Atividando edição de dados
        const activateData = (e) => {
          e.preventDefault();
          setEditData("auto");
          setEditDataOp("none");
        };

            //Notify
            const notify = (texto) => toast(texto);

        //Enviar dados e Desativar a edição
        const sendData = (e) => {
          e.preventDefault();
          if (CPF.validate(data.userCPF) === false) {
            <>{notify("Esse CPF é inválido!")}</>
          } else{
            if (calculaIdade(data.userDTNasc) < 18) {
              <>{notify("Idade não correspondente")}</>;
            }else {
              setData({ ...data, [e.target.name]: e.target.value });
              console.log(data);
              setEditData("none");
              setEditDataOp("auto");
              axiosInstance.put("/api/user-data", data).then((res) =>{
                console.log(res);
              })
            }
          } 
        };

        

  //* -----------------------------------




  //Modalidade === Online ? : Esconder Localidade : Exibir Localidade 
      const [selecionarLocal, setSelecionarLocal] = useState(false);

      const LocalServico = (value) => {
        setData({ ...data, userServModalidade: value });
        if (value === "Online") {
          setSelecionarLocal(false);
          setData({ ...data, userState: "", userCity: "", userServModalidade: "Online" });
        } else {
          setSelecionarLocal(true);
        }
      };




  //Contador para Textarea

      const [count, setCount] = useState(0);

      const contarCaracteres = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        
        const elemento = e.target;

        if (elemento.value.length <= 150) {
          setCount(elemento.value.length);
        }
      };

  //Textarea Propriedades
      const textArea = {
        value: data.userServDescricao,
        name: "userServDescricao",
        id: "userServDescricao",
        onChange: contarCaracteres.bind(this),
        count: count,
      };



  //Modal para alterar senha
  const [isModalChangePass, setModalChangePass] = useState(false);
  
  function openModalCP() {setModalChangePass(true)}

  function closeModalCP() {setModalChangePass(false)}


  //Atualizar valor do input
  const changeInputValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  //Recarregar dados ao cancelar edição de dados
  const [recarregar, setRecarregar] = useState(0);

  //Axios
  useEffect(() => {
    axiosInstance.get("/auth/check").then((res) =>{
      setReady(true);
      console.log({...res.data.user})
      setData({...res.data.user})
      setToggleButtonOption(res.data.user.toggleButton)
      res.data.user.userState !== "" ? setSelecionarLocal(true) : setSelecionarLocal(false);
      setCount(res.data.user.userServDescricao.length);
    })
  }, [recarregar, setReady])

  //Cancelar edição de dados
  const CancelEditData = (e) => {
    e.preventDefault();
    setEditData("none");
    setEditDataOp("auto");
    setCount(e.target.value.length);
    setRecarregar((oldKey) => oldKey + 1);  
  };



    //Abrir Fechar: CodeRecover
    const [isSairOpen, setSairOpen] = useState(false);

    function openModalSair(e) {
      e.preventDefault();
      setSairOpen(true);
    }
  
    function closeModalSair() {setSairOpen(false)}


  return (
    <>

      {isSairOpen ? (
        <Logout
          closeModalSair={closeModalSair}
        />
      ) : null}

      

      <ProfileSectionBG>
        
        <form onSubmit={(e) => sendData(e)}>

          <aside>
            {inputs.map((input) => (
              <CardInput
                key={input.id}
                {...input}
                value={data[input.name]}
                onChange={changeInputValue}
                ChangeToggleButton={changeToggleButton}
                toggleButtonOption={toggleButtonOption}
                editData={editData}
                editDataOp={editDataOp}
                onClick={openModalCP}
              />
            ))}

            {toggleButtonOption === "true" ? (
              <>  

                <DivInput>
                  <InputGroup editData={editData}>
                    <label htmlFor="servico">Qual o seu serviço</label>

                    <Select 
                      name="userServico"
                      id="userServico"
                      required
                      onChange={changeInputValue}
                      editData={editData}
                      value={data.userServico}
                    >
                        <option key="Selecionar" value="">Selecionar serviço</option>

                        {servicos && servicos.map(({id, nome}) => (
                          <option key={id} value={nome}>{nome}</option>
                        ))}

                    </Select>

                  </InputGroup>

                  <Label htmlFor="userServDescricao">Forma de serviço</Label>

                    <Select
                      name="userServModalidade"
                      id="userServModalidade"
                      required
                      onChange={(e) => LocalServico(e.target.value)}
                      editData={editData}
                      value={data.userServModalidade}
                    >
                      <option value="">Escolher Modalidade</option>
                      <option value="Online">Online</option>
                      <option value="Presencial">Presencial</option>
                      <option value="Híbrido">Híbrido</option>
                    </Select>

                </DivInput>
                
                <TextCounter editData={editData} {...textArea} />
                
                {selecionarLocal === true ? (
                  <>
                    <BrazilianStates
                      id="userState"
                      name="userState"
                      onChange={changeInputValue}
                      editData={editData}
                      estado={data.userState}
                    />

                    <BrazilianCities
                      id="userCity"
                      name="userCity"
                      state={data.userState}
                      onChange={changeInputValue}
                      editData={editData}
                      estado={data.userCity}
                    />
                  </>
                ) : null}
                
              </>
            ) : null}
          </aside>

          <FormBottom>
            
            {editData === "none" ? (
              <>
                <Submit onClick={activateData}>Editar</Submit>
                <Submit onClick={openModalSair}>Sair</Submit>
              </>
            ) : (
              <>
                <Submit onClick={CancelEditData}>Cancelar</Submit>
                <Submit>Salvar</Submit>
              </>
            )}

          </FormBottom>
          
        </form>

        {isModalChangePass ? (
            <ChangePassword closeModalCP={closeModalCP} />
          ) : null}

      </ProfileSectionBG>
    </>
  );
}

export default CardUser;
