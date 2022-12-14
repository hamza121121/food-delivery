import Image from "next/image";
import { urlFor } from "../lib/client";
import css from "../styles/Menu.module.css";
import Link from "next/link";
const Menu = ({ pizzas }) => {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Make You Fall in Love</span>
      </div>
      {/* {Pizzas} */}
      <div className={css.Menu}>
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={id}>
              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={css.imageWraper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>
              <span>{pizza.name}</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>$</span>{" "}
                {pizza.price[1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
