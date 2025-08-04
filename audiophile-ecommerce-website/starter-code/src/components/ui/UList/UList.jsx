function UList({ items = [], renderItem, className, ...props }) {
  return (
    <ul className={className} {...props}>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default UList;
