import { useUserContext } from "@/context/userContext";
import { ILink } from "@/interface/link";
import {
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";

const UseSortableComponent = () => {
  const user = useUserContext();
  const [items, setItems] = useState<ILink[] | undefined>();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    if (!user.user || !user.user.profile) return;

    setItems(user.user.profile.links.map((e, i) => ({ ...e, id: String(i) })));
  }, [user.user]);

  const handleDragEnd = (event: DragEndEvent) => {
    if (!items) return;
    const { active, over } = event;
    if (!active || !over) return;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items!.findIndex((x) => x.id == active.id);
        const newIndex = items!.findIndex((x) => x.id === over.id);

        return arrayMove(items!, oldIndex, newIndex);
      });
    }
  };

  return {
    items,
    sensors,
    handleDragEnd,
  };
};

export default UseSortableComponent;
