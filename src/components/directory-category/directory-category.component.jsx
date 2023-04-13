import "./directory-category.style.scss";
import CategoryItem from "../category-item/category-item.component";

const DirectoryCategory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        const { id } = category;
        return <CategoryItem key={id} category={category} />;
      })}
    </div>
  );
};

export default DirectoryCategory;
