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

    if (user.user.profile.links.length !== items?.length) {
      setItems(user.user.profile.links);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.user]);

  useEffect(() => {
    if (!items) return;

    user.setProfile({ links: items });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const onUpdateLink = (link: ILink) => {
    if (!items) return;

    const links = [...items];
    const index = links.findIndex((e) => e.id === link.id);
    links[index] = link;
    setItems(links);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (!items) return;
    const { active, over } = event;
    if (!active || !over) return;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items!.findIndex((x) => x.id == active.id);
        const newIndex = items!.findIndex((x) => x.id === over.id);
        const newArray = arrayMove(items!, oldIndex, newIndex);

        return newArray;
      });
    }
  };

  return {
    items,
    sensors,
    handleDragEnd,
    onUpdateLink,
  };
};

export default UseSortableComponent;
