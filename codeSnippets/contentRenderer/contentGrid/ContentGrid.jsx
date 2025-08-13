import classes from "./contentGrid.module.scss";
import ContentCard from "../contentCard/contentCard";

function ContentGrid({ dataArr }) {
  return (
    <div className={classes.grid}>
      {dataArr?.map((data) => {
        return <ContentCard key={data.id} data={data} />;
      })}
    </div>
  );
}

export default ContentGrid;
