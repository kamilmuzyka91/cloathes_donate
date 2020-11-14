import React from "react";

export default function Statistic({ bag, organization, collection }) {
  return (
    <section className="statistic">
      <div className="statistic__counter">
        {bag}
        <h2 className="statistic__title ">oddanych worków</h2>
        <p className="statistic__entry">
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>

      <div className="statistic__counter">
        {organization}
        <h2 className="statistic__title">wspartych organizacji</h2>
        <p className="statistic__entry">
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>

      <div className="statistic__counter">
        {collection}
        <h2 className="statistic__title">zorganizowanych zbiórek</h2>
        <p className="statistic__entry">
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
    </section>
  );
}
