import React from "react";

export default function Statistic({ bag, organization, collection }) {
  return (
    
    <section className="statistic">
    <div className=" container">
      <div className="entries">
        <div className="statistic__bag">
          {bag}
          <h2 className="statistic__title">oddanych worków</h2>
          <p className="statistics__entry">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            culpa dolores, nam nihil soluta tenetur debitis quo consequuntur
            eius, earum harum beatae repellat saepe, laudantium quisquam
            deleniti expedita voluptatum impedit!
          </p>
        </div>

        <div className="entries">
          <div className="statistic__organization">
            {organization}
            <h2 className="statistic__title">wspartych organizacji</h2>
            <p className="statistics__entry">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              a id amet dolores libero, ipsam officia blanditiis voluptas
              quisquam ut itaque distinctio, maxime sint! Tempore, molestias.
              Cumque quae quaerat expedita.
            </p>
          </div>
        </div>
        <div className="entries">
          <div className="statistic__collection">
            {collection}
            <h2 className="statistic__title">zorganizowanych zbiórek</h2>
            <p className="statistics__entry">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, recusandae maxime, officia error doloremque nobis
              repellat consequatur eaque ipsa dicta porro nulla ad quis expedita
              est! At et sequi dolorum.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
   
  );
}
