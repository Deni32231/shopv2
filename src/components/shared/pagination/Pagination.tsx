import { FC } from "react";
import styles from "./pagination.module.scss";

export interface IPaginationProps {
  countPages: number;
  indexPage: number;
  setIndexPage: (num: number) => void;
}

const Pagination: FC<IPaginationProps> = ({
  countPages,
  indexPage,
  setIndexPage,
}) => {
  const pagesList: number[] = [];

  for (let i = 1; i <= countPages; i++) {
    pagesList.push(i);
  }

  return (
    <div
      className={`${styles.pagination__wrapper} ${
        countPages === 0 ? styles.hidden : ""
      }`}
    >
      <button
        onClick={() => {
          if (indexPage !== 1) {
            setIndexPage(indexPage - 1);
          }
        }}
      >
        <img src="img/arrowL.svg" alt="" />
      </button>
      <ul className={styles.pagination__pages}>
        {pagesList.map((page) => (
          <li
            key={page}
            onClick={() => setIndexPage(page)}
            className={`${styles.pagination_item} ${
              page === indexPage ? styles.active : ""
            }`}
          >
            {page}
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          if (indexPage !== countPages) {
            setIndexPage(indexPage + 1);
          }
        }}
      >
        <img src="img/arrowR.svg" alt="" />
      </button>
    </div>
  );
};

export default Pagination;
