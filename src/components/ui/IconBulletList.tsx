import { getIcon } from "@/components/icons";

interface IconBulletItem {
  text: string;
  icon: string;
}

interface IconBulletListProps {
  items: IconBulletItem[];
}

export function IconBulletList({ items }: IconBulletListProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.text} className="flex items-start gap-4">
          <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center">
            {getIcon(item.icon, "h-5 w-5 text-primary")}
          </div>
          <p className="text-foreground-muted pt-2">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
