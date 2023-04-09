import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, index) => {
        return (
          <Card
            key={index} //trebuie sa ii dai un unique key prop pt ca atunci cand se sterge ceva, sa nu rendeze tot d ela 0, sa stie ce s-a sters
            id={robots[index].id}
            name={robots[index].name}
            email={robots[index].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
