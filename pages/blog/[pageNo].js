export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
  
    const paths = data.map((curElem) => {
      return {
        params: {
          pageNo: curElem.id.toString(),
        },
      };
     });

  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = async (paths) => {
    const id = paths.params.pageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  };
  
  const myData = ({ data }) => {
    const { id, title, body } = data;
    return (
      <>
        
        <div className="ssr-styles ssr-styles-inside">
          <h3>{id}</h3>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </>
    );
  };
  
  export default myData;