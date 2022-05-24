import React from "react";
import "../styles/homepage/main.css";
import man from "../assets/images/man2.jpg";

export default function Body() {
  return (
    <main className="main">
      <div className="main-text">
        <h1>Get Started Today</h1>
        <div className="main-lorem">
          <p>
            Id sunt aliquip eu commodo dolor excepteur exercitation duis
            proident ut quis. Ex eu nostrud eiusmod magna velit fugiat
            exercitation est nisi et exercitation non ad culpa. Non do ullamco
            reprehenderit labore minim fugiat incididunt velit veniam. Nulla
            ullamco reprehenderit eu aliquip ad ut incididunt laborum dolore
            laboris excepteur labore laborum.Eu duis excepteur ut esse dolor id
            ullamco culpa non eu. Ea eiusmod pariatur commodo dolor commodo
            consectetur voluptate irure. Proident culpa eu reprehenderit eu. Est
            occaecat ex sit nostrud. Elit cillum quis ea dolor incididunt
            deserunt dolore. Exercitation et aliqua adipisicing irure nisi elit
            cupidatat tempor id elit. Culpa mollit culpa minim sit officia
            proident et veniam. In aliquip aliqua irure duis ad est. Ut do magna
            reprehenderit enim occaecat voluptate ea enim excepteur Lorem labore
            ullamco ullamco enim. Nisi reprehenderit dolore aute sit dolor.
            Voluptate ea cillum aute nisi mollit enim cillum voluptate elit
            consectetur. Ipsum esse cupidatat esse exercitation enim nisi esse
            enim. Exercitation ex nostrud deserunt ullamco officia sit eu. Qui
            sunt non pariatur nisi nulla voluptate. Quis nisi quis laborum
            mollit in esse duis ea pariatur consectetur velit amet qui
            incididunt. Excepteur aliqua reprehenderit velit fugiat eiusmod.
            Tempor elit consequat ut veniam sunt laboris do magna enim
            adipisicing proident ex. Duis nulla ea elit veniam. Irure dolor
            officia incididunt velit occaecat do pariatur. Nostrud quis officiaS
          </p>
        </div>
      </div>
      <div className="img-container">
        <img src={man} alt="face of man" className="img" />
      </div>
    </main>
  );
}
