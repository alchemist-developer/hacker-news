import Story from "../Story";
import useDataFetcher from "../../hooks/dataFetcher";

const ShowStories = ({ type }) => {
    const { isLoading, stories } = useDataFetcher(type ? type : 'top');

  return (
    <>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          {stories.map(({ data: story }) => (
            <Story key={story.id} story={story} />
          ))}
        </>
      )}
    </>
  );
};

export default ShowStories;
