import "./Pagination.css";
import { useNavigate } from "react-router-dom";
const Pagination = ({ page, pages, changePage }) => {
    console.log('pageNumberPropInsidePagination', page);
  const navigate = useNavigate();
  let middlePagination;
  if (pages <= 5) {
    console.log('firstpages', pages);
    middlePagination = [...Array(pages)].map((_, idx) => (
      <button
        key={idx + 1}
        onClick={() => {
            // changePage(idx + 1);
            navigate(`/page/${idx + 1}`);

        }}
        disabled={parseInt(page) === idx + 1}
      >
        {idx + 1}
      </button>
    ));
  } else {
    console.log('pages', pages);
    console.log('pageNumberPropInsidePaginationInFirstElse', page);
    const startValue = Math.floor((page - 1) / 5) * 5;
    middlePagination = (
      <>
        {[...Array(5)].map((_, idx) => (
          <button
            key={startValue + idx + 1}
            disabled={parseInt(page) == startValue + idx + 1}
            onClick={() => {
              // changePage(startValue + idx + 1)
              navigate(`/page/${startValue + idx + 1}`);
            }}
          >
            {startValue + idx + 1}
          </button>
        ))}
        <button>...</button>
        {/* last page */}
        <button onClick={() => {
            // changePage(pages);
            navigate(`/page/${pages}`);

        }}>{pages}</button>
      </>
    );
    if (parseInt(page) > 5) {
      if (pages - parseInt(page) >= 5) {
        middlePagination = (
          <>
            <button onClick={() => {
                // changePage(1);
              navigate(`/page/1`);

            }}>1</button>
            <button>...</button>
            <button onClick={() => {
                // changePage(startValue);
              navigate(`/page/${startValue}`);


            }}>{startValue}</button>
            {[...Array(5)].map((_, idx) => (
              <button
                key={startValue + idx + 1}
                disabled={parseInt(page) == startValue + idx + 1}
                onClick={() => {
                    // changePage(startValue + idx + 1);
                    navigate(`/page/${startValue + idx + 1}`);

                }}
              >
                {startValue + idx + 1}
              </button>
            ))}
            <button>...</button>
            {/* last page */}
            <button onClick={() => {
                // changePage(pages);
                navigate(`/page/${pages}`);

            }}>{pages}</button>
          </>
        );
      } else {
        let amountLeft = pages - parseInt(page) + 5;
        middlePagination = (
          <>
            <button onClick={() => {
                // changePage(1);
                navigate(`/page/1`);

            }}>1</button>
            <button>...</button>
            <button onClick={() => {
                // changePage(startValue);
                navigate(`/page/${startValue}`);

            }}>{startValue}</button>
            {[...Array(amountLeft)].map((_, idx) => (
              <button
                key={startValue + idx + 1}
                style={
                  pages < startValue + idx + 1 ? { display: "none" } : null
                }
                disabled={parseInt(page) === startValue + idx + 1}
                onClick={() => {
                    // changePage(startValue + idx + 1);
                    navigate(`/page/${startValue + idx + 1}`);

                }}
              >
                {startValue + idx + 1}
              </button>
            ))}
          </>
        );
      }
    }
  }
  return (
    pages > 1 && (
      <div className="pagination">
        <button
          className="pagination__prev"
          onClick={() => {
            // changePage((page) => page - 1)
            navigate(`/page/${parseInt(page) - 1 }`);
          }}
          disabled={parseInt(page) == 1}
        >
          &#171;
        </button>
        {middlePagination}
        <button
          className="pagination__next"
          onClick={() => {
            console.log('pageInsidePagination', page + 1)
            // changePage((page) => page + 1);
            navigate(`/page/${parseInt(page) + 1 }`);

          } }
          disabled={parseInt(page) == pages}
        >
          &#187;
        </button>
      </div>
    )
  );
};
export default Pagination;
