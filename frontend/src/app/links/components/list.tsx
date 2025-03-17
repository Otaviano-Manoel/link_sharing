import React from "react";
import styles from "./list.module.scss";
import Image from "next/image";
import DropDown from "./dropDown";
import UseList from "../hook/useList";

const List = () => {
  const list = UseList();

  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        {list.links.map((link, index) => (
          <li key={index} className={styles.li}>
            <div className={styles.title}>
              <h3 className={styles.h3}>
                <Image
                  className={styles.icon}
                  src={"/icon-drag-and-drop.svg"}
                  alt=""
                  height={50}
                  width={50}
                />
                Link #{index + 1}
              </h3>
              <button
                className={styles.delete}
                type="button"
                onClick={() => list.removeItem(index)}
              >
                Remove
              </button>
            </div>

            <DropDown
              link={link}
              index={index}
              handleChangeStateLinks={list.handleChangeStateLinks}
            />

            <div className={styles.inputLink}>
              <label className={styles.label} htmlFor="link">
                Link
              </label>
              <div className={styles.containerInput}>
                <Image
                  className={styles.icon}
                  src={"/icon-link.svg"}
                  alt=""
                  height={50}
                  width={50}
                />
                <input
                  className={styles.input}
                  type="text"
                  name="link"
                  id="link"
                  placeholder="e.g. https://www.github.com/johnappleseed"
                  value={link.url}
                  onChange={(e) =>
                    list.handleChangeStateLinks(index, {
                      ...link,
                      url: e.currentTarget.value,
                    })
                  }
                />

                <p className={`${styles.alert} ${false ? "" : styles.error}`}>
                  {false ? "Can’t be empty" : "Please check the URL"}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
