/**
 * GalleryTabs
 * Renders a row of tab buttons for gallery category selection.
 *
 * Props:
 * - tabTitles: string[] — Array of tab names to display.
 * - selectedTab: string — The currently selected tab.
 * - onSelect: (title: string) => void — Callback when a tab is clicked.
 */

type Props = {
  tabTitles: string[];
  selectedTab: string;
  onSelect: (title: string) => void;
};

function GalleryTabs({ tabTitles, selectedTab, onSelect }: Props) {
  return (
    <>
      {tabTitles.map((title) => (
        <button
          key={title}
          className={`py-2 px-4 rounded-3xl font-text text-base transition-colors ${
            selectedTab === title
              ? "bg-main text-image"
              : "border-2 border-main text-main bg-transparent"
          }`}
          onClick={() => onSelect(title)}
        >
          {title}
        </button>
      ))}
    </>
  );
}

export default GalleryTabs;
