import { Tag } from "../../models";

export default function Tags({
  tags,
  onSelectedTagChange,
  selectedTags,
  setSelectedTags,
}: {
  tags: Tag[];
  onSelectedTagChange?: (tags: string[]) => void;
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) => {
      const isSelected = prev.includes(tag);
      const updatedTags = isSelected
        ? prev.filter((t) => t !== tag)
        : [...prev, tag];
      onSelectedTagChange?.(updatedTags);
      return updatedTags;
    });
  };
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((item) => (
        <button
          key={item.tag}
          onClick={() => handleTagClick(item.tag)}
          className={`px-4 py-1 rounded-full text-sm transition ${
            selectedTags.includes(item.tag)
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
