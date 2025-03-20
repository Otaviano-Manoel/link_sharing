import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ILink } from "@/interface/link";
import Image from "next/image";
import styles from "./sortableItem.module.scss";
import DropDown from "./dropDown/dropDown";

export interface SortableItemProps {
  link: ILink;
  count: number;
  onUpdateLink: (link: ILink) => void;
}

export function SortableItem(props: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.link.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className={styles.item} style={style}>
      <div className={styles.title}>
        <h3
          className={styles.h3}
          ref={setNodeRef}
          {...attributes}
          {...listeners}
        >
          <Image
            className={styles.icon}
            src={"/icon-drag-and-drop.svg"}
            alt=""
            height={50}
            width={50}
          />
          Link #{props.count + 1}
        </h3>
        <button className={styles.delete} type="button">
          Remove
        </button>
      </div>

      <DropDown link={props.link} onUpdateLink={props.onUpdateLink} />

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
            value={props.link.url}
            onChange={(e) =>
              props.onUpdateLink({ ...props.link, url: e.currentTarget.value })
            }
          />

          <p className={`${styles.alert} ${false ? "" : styles.error}`}>
            {false ? "Can’t be empty" : "Please check the URL"}
          </p>
        </div>
      </div>
    </div>
  );
}
