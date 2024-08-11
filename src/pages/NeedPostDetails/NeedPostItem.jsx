const NeedPostItem = ({ item, onRemove }) => {
  const {
    thumbnail,
    postTitle,
    category,
  } = item;

  return (
    <tr className="bg-white border-b border-gray-200">
      <td className="p-2 align-top">
        <img
          src={
            thumbnail ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt={postTitle}
          className="w-32 h-16 object-cover rounded"
        />
      </td>
      <td className="p-2 align-top text-center font-bold">{postTitle}</td>
      <td className="p-2 align-top text-center text-gray-600">{category}</td>
      <td className="p-2 align-top text-center">
        <button
          className="px-4 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
          onClick={onRemove}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default NeedPostItem;
