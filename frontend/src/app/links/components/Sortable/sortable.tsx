import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./sortableItem";
import UseSortableComponent from "../../hook/useSortable";
import styles from "./sortable.module.scss";

const Sortable = () => {
  const sortable = UseSortableComponent();

  return (
    <div className={styles.container}>
      <DndContext
        sensors={sortable.sensors}
        collisionDetection={closestCenter}
        onDragEnd={sortable.handleDragEnd}
      >
        {sortable.items && (
          <SortableContext
            items={sortable.items}
            strategy={verticalListSortingStrategy}
          >
            {sortable.items.map((item) => (
              <SortableItem key={item.id} link={item} />
            ))}
          </SortableContext>
        )}
      </DndContext>
    </div>
  );
};

export default Sortable;
