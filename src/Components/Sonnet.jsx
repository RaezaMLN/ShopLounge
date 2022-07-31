import React from "react";

import { WiDirectionRight } from "react-icons/wi";
import { TbPoint } from "react-icons/tb";

export function Description() {
  return (
    <div className="container">
      <div className="my-5 josefin">
        <h5 className="Midnight-Blue" style={{ fontSize: "22px" }}>
          Varius tempor.
        </h5>
        <span className="Wild-Blue-Yonder" style={{ fontSize: "16px" }}>
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non
          varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec.
          Dui, massa viverr .
        </span>
      </div>

      <div className="josefin">
        <h5 className="Midnight-Blue" style={{ fontSize: "22px" }}>
          More details
        </h5>
        <div className="Wild-Blue-Yonder" style={{ fontSize: "16px" }}>
          <WiDirectionRight style={{ fontSize: "30px" }} />
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr . <br />
          <WiDirectionRight style={{ fontSize: "30px" }} />
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr . <br />
          <WiDirectionRight style={{ fontSize: "30px" }} />
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr . <br />
          <WiDirectionRight style={{ fontSize: "30px" }} />
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
        </div>
      </div>
    </div>
  );
}

export function Additional() {
  return (
    <div className="container">
      <div className="my-5 josefin">
        <h5 className="Midnight-Blue" style={{ fontSize: "22px" }}>
          Lorem Ipsum.
        </h5>
        <span className="Wild-Blue-Yonder" style={{ fontSize: "16px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>

      <div className="josefin">
        <h5 className="Midnight-Blue" style={{ fontSize: "22px" }}>
          More details
        </h5>
        <div className="Wild-Blue-Yonder" style={{ fontSize: "16px" }}>
          <TbPoint style={{ fontSize: "30px" }} />
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... <br />
          <TbPoint style={{ fontSize: "30px" }} />
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... <br />
          <TbPoint style={{ fontSize: "30px" }} />
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... <br />
          <TbPoint style={{ fontSize: "30px" }} />
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>
      </div>
    </div>
  );
}

export function Review() {
  return (
    <div className="container">
      <div className="my-5 josefin">
        <h5 className="Midnight-Blue" style={{ fontSize: "22px" }}>
          de Finibus Bonorum et Malorum
        </h5>
        <span className="Wild-Blue-Yonder" style={{ fontSize: "16px" }}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
          placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
          recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </span>
      </div>
    </div>
  );
}

export function Video() {
  return <div></div>;
}
