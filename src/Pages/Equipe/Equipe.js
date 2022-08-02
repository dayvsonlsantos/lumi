import React from "react";
import {
  MainTeam,
  SectionTeam,
  AsideTeam,
  PictureTeam,
  AboutTeam,
  Links,
  Gmail,
  Github,
  Linkedin,
} from "./Style.Equipe";

function Equipe() {
  return (
    <MainTeam>
      <SectionTeam>
        <AsideTeam>
          <AboutTeam>
            <p>
              Olá, me chamo Dayvson. Me formei como Técnico em Desenvolvimento
              de Sistemas em 2019, e após passar um tempo afastado da área da
              Tecnologia, resolvi regressar novamente agora em 2022. Tenho como
              foco aperfeiçoar cada vez mais as minhas habilidades, tanto as
              técnicas (hard skills), como as comportamentais (soft skills), me
              tornando um profisional cada vez melhor.
            </p>
            <br />
            <p>Tenho experiências e habilidades nas seguintes tecnologias:</p>
            <p>
              Front-end: HTML5, CSS3, JavaScript, React, Styled Components;
              Back-end: NodeJs; Banco de Dados: MongoDB.
            </p>

            <Links>
              <a href="mailto:dayvsonlsantos@gmail.com" target="_blank" rel="noreferrer">
                <Gmail />
              </a>

              <a href="https://www.linkedin.com/in/dayvsonlimasantos" target="_blank" rel="noreferrer">
                <Linkedin />
              </a>

              <a href="https://github.com/dayvsonlsantos" target="_blank" rel="noreferrer">
                <Github />
              </a>
            </Links>
          </AboutTeam>
          <PictureTeam
            src="https://avatars.githubusercontent.com/u/102249811?s=400&u=2843e9ff654eb5587f9e6ad6b873fed0b1c0df77&v=4"
            alt="Foto de Perfil, Dayvson"
          />
        </AsideTeam>
        <AsideTeam>
          <PictureTeam
            src="https://avatars.githubusercontent.com/u/99907704?v=4"
            alt="Foto de Perfil, Jonas"
          />
          <AboutTeam>
            <p>
              Olá, me chamo Jonas Rafael e tenho 21 anos. Desde que me entendo por gente tenho tido contato com a tecnologia, e hoje um dos meus sonhos que estão se realizando é o de virar desenvolvedor.
            </p>
            <p>
              Meu foco é o desenvolvimento Front End e pretendo me aprimorar pra muitas outras tecnologias.
            </p>
            <Links>
              <a href="mailto:jonassrmarquess@gmail.com" target="_blank" rel="noreferrer">
                <Gmail />
              </a>
              <a
                href="https://www.linkedin.com/in/jonas-marques-b80554239/"
                target="_blank" rel="noreferrer"
              >
                <Linkedin />
              </a>
              <a href="https://github.com/JonassMarquess" target="_blank" rel="noreferrer">
                <Github />
              </a>
            </Links>
          </AboutTeam>
        </AsideTeam>
      </SectionTeam>
      <SectionTeam>
        <AsideTeam>
          <AboutTeam>
            <p>
              Me chamo Vitor Gabriel, nascido em 08/01/2001. Sempre estive
              envolvido com a tecnologia, fiz meu primeiro curso de informática
              com 13 anos e desde então comecei outros cursos na área de ti
              porém nada relacionado a programação. Me graduei em gastronomia no
              ano de 2020 mas é um mercado que não me encontrei e não encontrei
              meu devido valor e foi aí que decidi me aprofundar na tecnologia,
              em 2021 iniciei uma nova faculdade, dessa vez de ADS(análise e
              desenvolvimento de sistema) e me inscrevi no start, onde em 2022
              fui um dos selecionados para fazer parte desse imenso projeto.
            </p>
            <Links>
              <a href="mailto:vitoorgabri3l@gmail.com" target="_blank" rel="noreferrer">
                <Gmail />
              </a>
              <a
                href="https://www.linkedin.com/in/vitor-gabriel-b42563218/"
                target="_blank" rel="noreferrer"
              >
                <Linkedin />
              </a>
              <a href="https://github.com/Vitorgabri3l" target="_blank" rel="noreferrer">
                <Github />
              </a>
            </Links>
          </AboutTeam>
          <PictureTeam
            src="https://avatars.githubusercontent.com/u/102758602?v=4"
            alt="Foto de Perfil, Vitor"
          />
        </AsideTeam>
        <AsideTeam>
          <PictureTeam
            src="https://avatars.githubusercontent.com/u/108552657?v=4"
            alt="Foto de Perfil, Vitória"
          />
          <AboutTeam>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Links>
              <a href="mailto:regina117.500@hotmail.com" target="_blank" rel="noreferrer">
                <Gmail />
              </a>
              <a
                href="https://www.linkedin.com/in/vitoria-regina-6b799b1ba/"
                target="_blank" rel="noreferrer"
              >
                <Linkedin />
              </a>
              <a href="https://github.com/vitorxst" target="_blank" rel="noreferrer">
                <Github />
              </a>
            </Links>
          </AboutTeam>
        </AsideTeam>
      </SectionTeam>
    </MainTeam>
  );
}

export default Equipe;
